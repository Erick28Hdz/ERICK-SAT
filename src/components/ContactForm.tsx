import React, { useState } from "react";
import { Snackbar, Alert, type AlertColor } from "@mui/material";
import { Box, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "emailjs-com";
import Button from "./Button";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup.string().email("Correo inválido").required("El correo es obligatorio"),
  message: yup.string().required("El mensaje es obligatorio"),
});

const ContactForm: React.FC = () => {
  // ✅ useState debe estar dentro del componente
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>("success");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...data },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log("Correo enviado:", response.status, response.text);
      setSnackbarMessage("¡Mensaje enviado exitosamente!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      reset();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setSnackbarMessage("Hubo un error al enviar el mensaje.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <Box flex={1}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={2}
          sx={{
            width: "100%",
            maxWidth: "700px",
            margin: "0 auto",
            padding: 3,
            backgroundColor: "var(--color-dark)",
            borderRadius: 2,
          }}
        >
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={customStyles}
          />
          <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={customStyles}
          />
          <TextField
            label="Mensaje"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            {...register("message")}
            error={!!errors.message}
            helperText={errors.message?.message}
            sx={{
              ...customStyles,
              textarea: { color: "var(--color-light)" },
            }}
          />
          <Box display="flex" justifyContent="center">
            <Button type="submit" variant="contained" disabled={isSubmitting}>
              Enviar
            </Button>
          </Box>
        </Stack>
      </form>

      {/* Snackbar de notificación */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

// 🎨 Estilos personalizados
const customStyles = {
  input: { color: "var(--color-light)" },
  "& label": { color: "var(--color-light-blue)" },
  "& label.Mui-focused": { color: "var(--color-light-blue)" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "var(--color-light-blue)" },
    "&:hover fieldset": { borderColor: "var(--color-beige)" },
    "&.Mui-focused fieldset": { borderColor: "var(--color-beige)" },
  },
};

export default ContactForm;

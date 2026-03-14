import { Snackbar, Alert, Box, Stack, TextField } from "@mui/material";
import Button from "./Button";
import { useContactForm } from "../../../hooks/useContactForm";

const inputStyles = {
  "& .MuiInputLabel-root": {
    color: "var(--color-beige)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "var(--color-light-blue)",
  },
  "& .MuiOutlinedInput-root": {
    color: "var(--color-light)",
    backgroundColor: "var(--color-dark-blue",
    "& fieldset": {
      borderColor: "var(--color-light)",
    },
    "&:hover fieldset": {
      borderColor: "var(--color-light)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--color-light-blue)",
    },
  },
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    formDisabled,
    snackbarOpen,
    snackbarMessage,
    snackbarSeverity,
    setSnackbarOpen,
    onSubmit,
  } = useContactForm();

  return (
    <Box flex={1}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={2}
          sx={{
            width: "100%",
            maxWidth: "700px",
            margin: "0 auto",
            padding: 4,
            backgroundColor: "var(--color-dark-blue)",
            borderRadius: 3,
          }}
        >
          <TextField
            label="Nombre"
            fullWidth
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={inputStyles}
          />

          <TextField
            label="Correo electrónico"
            fullWidth
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={inputStyles}
          />

          <TextField
            label="Mensaje"
            multiline
            rows={4}
            fullWidth
            {...register("message")}
            error={!!errors.message}
            helperText={errors.message?.message}
            sx={inputStyles}
          />

          <input
            type="text"
            style={{ display: "none" }}
            {...register("company")}
          />

          <Box display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting || formDisabled}
            >
              Enviar
            </Button>
          </Box>
        </Stack>
      </form>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={snackbarSeverity}
          onClose={() => setSnackbarOpen(false)}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
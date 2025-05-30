import React from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  IconButton,
  Stack,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Mail, Send, PhoneCall, MapPin } from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "@emailjs/browser";
import SectionTitle from "../components/SectionTitle";

const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup
    .string()
    .email("Correo inválido")
    .required("El correo es obligatorio"),
  message: yup.string().required("El mensaje es obligatorio"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        data,
        "YOUR_USER_ID"
      );
      alert("Mensaje enviado correctamente");
      reset();
    } catch (error) {
      console.error("Error enviando el mensaje:", error);
      alert("Hubo un error al enviar el mensaje");
    }
  };

  return (
    <Box sx={{ p: 5, bgcolor: "var(--color-dark-blue)", color: "var(--color-light)" }}>
      <SectionTitle>Contáctanos</SectionTitle>
      <Typography
        variant="body1"
        textAlign="center"
        mb={4}
        sx={{ color: "var(--color-beige)" }}
      >
        ¿Tienes una pregunta, propuesta o proyecto? Estamos listos para escucharte.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}{...({} as any)}>
          <Paper
            variant="outlined"
            sx={{
              p: 4,
              borderRadius: "20px 0",
              borderLeft: "2px solid var(--color-beige)",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.1)",
              transition: "all 0.3s ease",
              overflow: "hidden",
              maxWidth: 500,
              margin: "0 auto",
              '&:hover': {
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.25)",
                transform: "translateY(-5px)",
                borderLeft: "2px solid var(--color-light-blue)",
                borderRight: "2px solid var(--color-light-blue)"
              }
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2}>
                <TextField
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  sx={{
                    input: {
                      color: "var(--color-light)",
                    },
                    label: { color: "var(--color-light-blue)" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "var(--color-light-blue)",
                      },
                      "&:hover fieldset": {
                        borderColor: "var(--color-beige)",
                      },
                    },
                  }}
                />
                <TextField
                  label="Correo electrónico"
                  variant="outlined"
                  fullWidth
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  sx={{
                    input: {
                      color: "var(--color-light)",
                    },
                    label: { color: "var(--color-light-blue)" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "var(--color-light-blue)",
                      },
                      "&:hover fieldset": {
                        borderColor: "var(--color-beige)",
                      },
                    },
                  }}
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
                    textarea: {
                      color: "var(--color-light)",
                    },
                    label: { color: "var(--color-light-blue)" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "var(--color-light-blue)",
                      },
                      "&:hover fieldset": {
                        borderColor: "var(--color-beige)",
                      },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<Send />}
                  sx={{
                    bgcolor: "var(--color-dark-blue)",
                    color: "var(--color-light-blue)",
                    fontFamily: "var(--font-ui)",
                    '&:hover': {
                      bgcolor: "var(--color-light-blue)",
                      color: "var(--color-black)"
                    }
                  }}
                  disabled={isSubmitting}
                >
                  Enviar
                </Button>
              </Stack>
            </form>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}{...({} as any)}>
          <Stack spacing={2} alignItems="center">
            <IconButton href="https://wa.me/573022016072" target="_blank" sx={{ color: "#25D366" }}>
              <WhatsAppIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://t.me/ErickSAT46" target="_blank" sx={{ color: "#229ED9" }}>
              <TelegramIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://github.com/Erick28Hdz" target="_blank" sx={{ color: "#333" }}>
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://linkedin.com/in/erick-hernandez-sapere-aude" target="_blank" sx={{ color: "#0077B5" }}>
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;

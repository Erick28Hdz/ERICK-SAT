import React from "react";
import {
  Box,
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
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaTiktok } from 'react-icons/fa';
import emailjs from "@emailjs/browser";
import SectionTitle from "../components/SectionTitle";
import IntroSection from "../components/IntroSection";
import UniversalImage from "../components/UniversalImg";
import Button from "../components/Button";
import UniversalCard from "../components/UniversalCard";
import CardDescription from "../components/CardDescrition";
import SectionSubtitle from "../components/SectionSubtitle";


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
    <Box sx={{ padding: 4 }} className="universal-container">
      <SectionTitle>Contáctanos</SectionTitle>
      <IntroSection
        description={
          <Typography
            variant="body1"
            className="description"
          ><h4>¿Tienes una pregunta, propuesta o proyecto? ¡Estamos listos para escucharte!</h4>
            <p>
              En un mundo digital en constante evolución, tener un equipo confiable, creativo y técnicamente sólido es fundamental para alcanzar tus objetivos.
              Ya sea que estés buscando desarrollar una solución web a medida, mejorar la ciberseguridad de tu infraestructura, crear una experiencia interactiva
              para tu portafolio o lanzar un nuevo proyecto digital, <strong>estamos aquí para ayudarte</strong>.
            </p>

          </Typography>
        }
        imageComponent={<UniversalImage src="/images/productos.jpg" alt="Nuestros servicios" />}
      />

      <Grid container spacing={4} justifyContent="center" gap="10rem">
        {/* Columna izquierda con el texto */}
        <Grid item xs={12} md={4} sx={{ width: "40%" }} {...({} as any)}>
          <SectionSubtitle>¿Dónde puedes encontrarnos?</SectionSubtitle>
          <CardDescription >
            <p>
              Contáctanos para recibir asesoría personalizada, resolver tus dudas o contarnos sobre esa gran idea que tienes en mente.
              Nos especializamos en brindar soluciones prácticas, modernas y centradas en el usuario, adaptándonos a tus necesidades específicas.
            </p>
            <p><strong>Tu mensaje puede ser el comienzo de una gran colaboración. ¡Te leemos pronto!</strong></p>
          </CardDescription>
          {/* Redes Sociales en fila */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", mt: 2, flexWrap: "wrap" }}>
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
            <IconButton href="https://www.youtube.com/@tu_usuario" target="_blank" sx={{ color: "#FF0000" }}>
              <YouTubeIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://www.facebook.com/tu_usuario" target="_blank" sx={{ color: "#1877F2" }}>
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://www.tiktok.com/@tu_usuario" target="_blank" sx={{ color: "#000" }}>
              <FaTiktok size={30} />
            </IconButton>
          </Box>
        </Grid>

        {/* Columna derecha con formulario + redes sociales */}
        <Grid item xs={12} md={6}  {...({} as any)}>
          <UniversalCard>
            {/* Formulario */}
            <Box flex={1} >
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
                      input: { color: "var(--color-light)" },
                      label: { color: "var(--color-light-blue)" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "var(--color-light-blue)" },
                        "&:hover fieldset": { borderColor: "var(--color-beige)" },
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
                      input: { color: "var(--color-light)" },
                      label: { color: "var(--color-light-blue)" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "var(--color-light-blue)" },
                        "&:hover fieldset": { borderColor: "var(--color-beige)" },
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
                      textarea: { color: "var(--color-light)" },
                      label: { color: "var(--color-light-blue)" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "var(--color-light-blue)" },
                        "&:hover fieldset": { borderColor: "var(--color-beige)" },
                      },
                    }}
                  />
                  <Button disabled={isSubmitting}>Enviar</Button>
                </Stack>
              </form>
            </Box>
          </UniversalCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;

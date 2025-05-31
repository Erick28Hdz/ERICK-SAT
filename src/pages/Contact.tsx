import React from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import UniversalContainer from "../components/UniversalContainer";
import SocialLinks from "../components/SocialLinks";
import emailjs from "@emailjs/browser";
import SectionTitle from "../components/SectionTitle";
import IntroSection from "../components/IntroSection";
import UniversalImage from "../components/UniversalImg";
import ContactForm from "../components/ContactForm";
import UniversalCard from "../components/UniversalCard";
import CardTitle from "../components/CardTitle";
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
    <UniversalContainer pt={6} pb={3}>
      <SectionTitle>Contáctanos</SectionTitle>
      <IntroSection
        description={
          <Typography
            variant="body1"
            className="description"
          ><CardTitle>¿Tienes una pregunta, propuesta o proyecto? ¡Estamos listos para escucharte!</CardTitle>
            <p>
              En un mundo digital en constante evolución, tener un equipo confiable, creativo y técnicamente sólido es fundamental para alcanzar tus objetivos.
              Ya sea que estés buscando desarrollar una solución web a medida, mejorar la ciberseguridad de tu infraestructura, crear una experiencia interactiva
              para tu portafolio o lanzar un nuevo proyecto digital, <strong>estamos aquí para ayudarte</strong>.
            </p>
            <p>
              Contáctanos para recibir asesoría personalizada, resolver tus dudas o contarnos sobre esa gran idea que tienes en mente.
              Nos especializamos en brindar soluciones prácticas, modernas y centradas en el usuario, adaptándonos a tus necesidades específicas.
            </p>
          </Typography>
        }
        imageComponent={<UniversalImage src="/images/contacto.jpg" alt="Nuestros servicios" />}
      />

      <Grid container spacing={4} justifyContent="center" gap="10rem">
        {/* Columna izquierda con el texto */}
        <Grid item xs={12} md={4} sx={{ width: "40%" }} {...({} as any)}>
          <SectionSubtitle>📞 ¿Dónde puedes encontrarnos?</SectionSubtitle>
          <CardDescription >
            <p>
              ¿Tienes una idea brillante o buscas una solución tecnológica a medida? Estamos aquí para escucharte. Nuestro equipo se especializa en transformar ideas en experiencias digitales impactantes, modernas y centradas en el usuario.
            </p>
            <p>
              <strong>Contáctanos hoy y démosle vida a tu proyecto. La innovación comienza con una conversación. 🚀</strong>
            </p>
          </CardDescription>
          {/* Redes Sociales en fila */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", mt: 2, flexWrap: "wrap" }}>
            <SocialLinks hide={[]} />
          </Box>
        </Grid>

        {/* Columna derecha con formulario + redes sociales */}
        <Grid item xs={12} md={6}  {...({} as any)}>
          <UniversalCard>
            {/* Formulario */}
              <ContactForm />
          </UniversalCard>
        </Grid>
      </Grid>
    </UniversalContainer>
  );
};

export default Contact;

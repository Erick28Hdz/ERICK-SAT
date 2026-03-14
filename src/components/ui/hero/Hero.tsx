import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Heading from "../tipografias/Heading";
import UniversalImage from "../universales/UniversalImg";
import Button from "../arquitectura/Button";
import CardDescription from "../cards/CardDescrition";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/servicios");
  };

  return (
    <section
      className="
        relative
        min-h-[90vh]
        w-full
        bg-[url('/images/hero.jpg')]
        bg-cover
        bg-center
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Overlay futurista */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-[#0a0a1a]/70 to-[#0a0a2a]/60 z-10" />

      {/* Contenido */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 py-16">
        
        {/* Columna izquierda - Texto */}
        <motion.div
          className="p-4 w-full md:w-[60%] text-center md:text-left flex flex-col justify-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Heading level={3} color="blue" align="center" transform="uppercase">
            Innovación en Desarrollo de Software y Tecnología
          </Heading>

          <CardDescription className="mt-4 mb-6 text-(--color-beige) text-[clamp(1rem,1vw+0.4rem,1.2rem)] leading-relaxed text-center md:text-left">
            Somos una empresa especializada en{" "}
            <strong>soluciones tecnológicas a medida</strong>, enfocadas en{" "}
            <strong>ciberseguridad</strong>, <strong>desarrollo web</strong> y{" "}
            <strong>automatización de procesos</strong>. Potenciamos tu negocio
            con herramientas digitales modernas, eficientes y seguras.
          </CardDescription>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mx-auto md:mx-0">
            <Button variant="contained" onClick={handleClick}>
              Conoce nuestros servicios
            </Button>
          </motion.div>
        </motion.div>

        {/* Columna derecha - Imagen */}
        <motion.div
          className="w-full md:w-[40%] flex justify-center mt-10 md:mt-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ duration: 0.5 }} className="max-w-105 w-full overflow-hidden rounded-xl shadow-2xl">
            <UniversalImage
              src="/images/lider.jpg"
              alt="Decoración"
              containerClassName="max-w-[500px] mx-auto"
              imgClassName="rounded-xl"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
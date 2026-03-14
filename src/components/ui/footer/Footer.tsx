import React from "react";
import SocialLinks from "../arquitectura/SocialLinks";
import Heading from "../tipografias/Heading";
import CardDescription from "../cards/CardDescrition";
import FooterLinks from "./FooterLink";

const Footer: React.FC = () => {
  return (
    <footer
      className="
        flex 
        items-center 
        justify-between 
        pt-4 
        flex-wrap 
        gap-4
        bg-black
        text-(--color-dark-blue)
        border-t border-white/10
        shadow-[0px_-4px_10px_1px_rgba(0,0,0,0.4)]
      "
    >
      {/* Logo / Nombre */}
      <div className="w-full md:w-1/4 text-center m-2">
        <Heading level={4} color="beige" transform="uppercase">
          Erick Software and Technology
        </Heading>

        <CardDescription className="mt-2 text-(--color-beige) opacity-80">
          &copy; {new Date().getFullYear()} - Todos los derechos reservados
        </CardDescription>
      </div>

      {/* Links legales */}
      <div className="w-full md:w-[30%] flex justify-center">
        <FooterLinks />
      </div>

      {/* Redes sociales */}
      <div className="w-full md:w-[25%] flex justify-center">
        <SocialLinks hide={["github", "telegram"]} />
      </div>
    </footer>
  );
};

export default Footer;

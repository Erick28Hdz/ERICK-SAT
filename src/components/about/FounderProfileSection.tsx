import React from "react";
import Heading from "../ui/tipografias/Heading";
import UniversalImage from "../ui/universales/UniversalImg";
import CardDescription from "../ui/cards/CardDescrition";
import UniversalContainer from "../ui/universales/UniversalContainer";
import UniversalGrid from "../ui/universales/UniversalGrid";

const FounderProfileSection: React.FC = () => {
  return (
    <UniversalContainer>
      <UniversalGrid cols={2} className="items-start">
        {/* PERFIL */}
        <div className="flex flex-col items-center">
          <div
            className="
              w-45 h-45
              sm:w-50 sm:h-50
              md:w-62.5 md:h-62.5
              rounded-full
              overflow-hidden
              shrink-0
            "
          >
            <UniversalImage
              src="/images/fundador.jpg"
              alt="Fundador"
              imgClassName="w-full h-full object-cover"
            />
          </div>

          <div className="mt-4 text-center">
            <Heading
              level={3}
              variant="section"
              color="light"
              transform="capitalize"
            >
              Erick Hernández
            </Heading>
          </div>
        </div>

        {/* DESCRIPCIÓN */}
        <div className="text-left">
          <CardDescription>
            Desarrollador autodidacta con enfoque en software funcional,
            automatización de procesos y ciberseguridad.
            <br />
            <br />
            Especialista en herramientas libres como Bash, Nmap, Wireshark y
            Metasploit.
            <br />
            <br />
            Experiencia en desarrollo full stack usando HTML, CSS, JavaScript,
            TypeScript, React, Tailwind, Python, PHP, MySQL, Postgres y Mongodb.
            <br />
            <br />
            Promotor de la soberanía digital y el acceso libre al conocimiento.
            <br />
            <br />
            Actualmente reside en Bogotá y trabaja de forma remota con empresas,
            emprendedores y comunidades educativas.
          </CardDescription>
        </div>
      </UniversalGrid>
    </UniversalContainer>
  );
};

export default FounderProfileSection;

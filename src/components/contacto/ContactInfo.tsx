import Heading from "../ui/tipografias/Heading";
import CardDescription from "../ui/cards/CardDescrition";
import SocialLinks from "../ui/arquitectura/SocialLinks";
import UniversalContainer from "../ui/universales/UniversalContainer";

const ContactInfo = () => {
  return (
    <UniversalContainer>
      <Heading level={4} variant="section" color="beige" transform="capitalize">
        📞 ¿Dónde puedes encontrarnos?
      </Heading>

      <CardDescription className="mt-4 text-center">
        <p>¿Tienes una idea brillante o buscas una solución tecnológica?</p>

        <p>
          <strong>Contáctanos y démosle vida a tu proyecto 🚀</strong>
        </p>
      </CardDescription>

      <div className="flex justify-center gap-4 mt-4 flex-wrap">
        <SocialLinks hide={[]} />
      </div>
    </UniversalContainer>
  );
};

export default ContactInfo;

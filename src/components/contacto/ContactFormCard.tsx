import UniversalCard from "../ui/universales/UniversalCard";
import ContactForm from "../ui/arquitectura/ContactForm";
import UniversalContainer from "../ui/universales/UniversalContainer";

const ContactFormCard = () => {
  return (
    <UniversalContainer>
      <UniversalCard>
        <ContactForm />
      </UniversalCard>
    </UniversalContainer>
  );
};

export default ContactFormCard;
import ContactIntroSection from "../components/contacto/ContactIntro";
import ContactInfo from "../components/contacto/ContactInfo";
import ContactFormCard from "../components/contacto/ContactFormCard";
import { useScrollTop } from "../hooks/useScrollTop";
import UniversalSection from "../components/ui/universales/UniversalSection";

const Contact = () => {
  useScrollTop();

  return (
    <UniversalSection>
      <ContactIntroSection />

      <div className="flex flex-col md:flex-row gap-8 items-center justify-evenly px-2 md:px-7">
        <div className="max-w-150 w-full flex justify-center">
          <ContactFormCard />
        </div>

        <div className="max-w-150 w-full">
          <ContactInfo />
        </div>
      </div>
    </UniversalSection>
  );
};

export default Contact;

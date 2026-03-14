import Heading from "../ui/tipografias/Heading";
import TestimonialCard from "../ui/cards/TestimonialCard";
import { casosDeExito } from "../../data/Clientes";
import UniversalContainer from "../ui/universales/UniversalContainer";

const SuccessCasesSection = () => {
  return (
    <UniversalContainer>
      <div className="text-center">
        <Heading
          level={4}
          color="beige"
          variant="section"
          transform="capitalize"
        >
          🛡️ Casos de Éxito
        </Heading>
      </div>

      <div className="flex flex-wrap justify-center gap-6 pt-4">
        {casosDeExito.map((c, index) => (
          <div key={index} className="w-full sm:w-[45%] md:w-[30%]">
            <TestimonialCard content={c.content} author={c.author} />
          </div>
        ))}
      </div>
    </UniversalContainer>
  );
};

export default SuccessCasesSection;

import Heading from "../ui/tipografias/Heading";
import UniversalContainer from "../ui/universales/UniversalContainer";
import TestimonialCard from "../ui/cards/TestimonialCard";
import { testimonios } from "../../data/Clientes";

const TestimonialsSection = () => {
  return (
    <UniversalContainer>
      <div className="text-center">
        <Heading
          level={4}
          color="beige"
          variant="section"
          transform="capitalize"
        >
          💬 Testimonios
        </Heading>
      </div>

      <div className="flex flex-wrap justify-center gap-6  pt-4">
        {testimonios.map((t, index) => (
          <div key={index} className="w-full sm:w-[45%] md:w-[30%]">
            <TestimonialCard content={t.content} author={t.author} />
          </div>
        ))}
      </div>
    </UniversalContainer>
  );
};

export default TestimonialsSection;

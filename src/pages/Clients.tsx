import UniversalSection from "../components/ui/universales/UniversalSection";
import { useScrollTop } from "../hooks/useScrollTop";

import ClientsIntroSection from "../components/clientes/ClientsIntroSection";
import ClientSegmentsSection from "../components/clientes/ClientSegmentsSection";
import SuccessCasesSection from "../components/clientes/SuccessCasesSection";
import TestimonialsSection from "../components/clientes/TestimonialsSection";

const Clients: React.FC = () => {
  useScrollTop();

  return (
    <UniversalSection>
      <ClientsIntroSection />
      <ClientSegmentsSection />
      <SuccessCasesSection />
      <TestimonialsSection />
    </UniversalSection>
  );
};

export default Clients;
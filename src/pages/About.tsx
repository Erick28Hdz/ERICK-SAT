import React from "react";
import UniversalSection from "../components/ui/universales/UniversalSection";
import { useScrollTop } from "../hooks/useScrollTop";

import AboutHistorySection from "../components/about/AboutHistorySection";
import AboutMissionSection from "../components/about/AboutMissionSection";
import FounderProfileSection from "../components/about/FounderProfileSection";
import ValueProposition from "../components/about/ValueProposition";

const About: React.FC = () => {

  useScrollTop();

  return (
    <UniversalSection>

      <AboutHistorySection />

      <AboutMissionSection />

      <FounderProfileSection />

      <ValueProposition />

    </UniversalSection>
  );
};

export default About;
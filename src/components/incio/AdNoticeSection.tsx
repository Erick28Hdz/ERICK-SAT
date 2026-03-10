import React from "react";
import SectionSubtitle from "../ui/tipografias/SectionSubtitle";
import UniversalContainer from "../ui/universales/arquitectura/UniversalContainer";

interface AdNoticeSectionProps {
  ads: string[];
}

const AdNoticeSection: React.FC<AdNoticeSectionProps> = ({ ads }) => {
  return (
    <section
      className="
        w-full
        mt-4
        bg-black
        border-t-2
        border-b-2
        border-(--color-light-blue)
      "
    >
      <UniversalContainer className="py-4">

        <SectionSubtitle>📢 Anuncios publicitarios</SectionSubtitle>

        <div className="flex flex-col gap-4 mt-4 p-2">

          {ads.map((ad, index) => (
            <div
              key={index}
              className="
                bg-(--color-dark-blue)
                text-(--color-beige)
                px-4
                py-2
                rounded-xl
                border
                border-(--color-light-blue)
                font-(--font-ui)
                text-[1.2rem]
                shadow-[0_0_8px_rgba(0,255,255,0.4)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_16px_rgba(0,255,255,0.7)]
              "
            >
              {ad}
            </div>
          ))}

        </div>

      </UniversalContainer>
    </section>
  );
};

export default AdNoticeSection;
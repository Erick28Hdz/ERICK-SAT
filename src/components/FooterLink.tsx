import React, { useState } from "react";
import UniversalCard from "./UniversalCard";
import { styled } from "@mui/system";
import UniversalModal from "./UniversalModal";
import { legalTexts } from "../data/LegalContent";
import { toUpperCase } from "../utils/capitalize";

const LinkStyled = styled("button")({
  background: "none",
  border: "none",
  color: "var(--color-light)",
  fontFamily: "var(--font-ui)",
  cursor: "pointer",
  fontSize: "0.8rem",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "2px",
    background: "var(--color-light-blue)",
    left: 0,
    bottom: "-3px",
    transform: "scaleX(0)",
    transformOrigin: "right",
    transition: "transform 0.3s ease",
  },
  "&:hover": {
    color: "var(--color-light-blue)",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "left",
  },
});

const FooterLinks: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const handleOpen = (title: keyof typeof legalTexts) => {
    setModalTitle(toUpperCase(title)); // si también quieres el título del modal en mayúscula
    setModalContent(legalTexts[title]);
    setModalOpen(true);
  };
  return (
    <>
      <UniversalCard
        contentFlexDirection="row"
        sx={{
          justifyContent: "center",
          width: "100%",
          maxWidth: 700,
          gap: "1.5rem",
          background: "var(--color-black)",
          borderRadius: "20px 0px",
          m: 1,
          borderTop: "2px solid var(--color-beige)",
          borderBottom: "2px solid transparent",
          borderLeft: "none",
          '&:hover': {
            borderTop: "2px solid var(--color-light-blue)",
            borderBottom: "2px solid var(--color-light-blue)",
          },
        }}
      >
        {Object.keys(legalTexts).map((title) => (
          <LinkStyled
            key={title}
            onClick={() => handleOpen(title as keyof typeof legalTexts)}
          >
            {toUpperCase(title)}
          </LinkStyled>
        ))}
      </UniversalCard>

      <UniversalModal open={modalOpen} onClose={() => setModalOpen(false)} title={modalTitle}>
        <p style={{ whiteSpace: "pre-line" }}>{modalContent}</p>
      </UniversalModal>
    </>
  );
};

export default FooterLinks;

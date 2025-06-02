// components/UniversalModal.tsx
import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SectionSubtitle from "./SectionSubtitle";
import CardDescription from "./CardDescrition";

type UniversalModalProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
};

const UniversalModal: React.FC<UniversalModalProps> = ({ open, onClose, title, children }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    width: {
                        xs: '90%',   // móviles
                        sm: '80%',   // tablets pequeñas
                        md: 600,     // desktop (como antes)
                    },
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    mx: 'auto',
                    my: 4,
                    p: {
                        xs: 2,
                        sm: 3,
                        md: 4,
                    },
                    backgroundColor: 'var(--color-black)',
                    borderRadius: 3,
                    boxShadow: 24,
                    color: 'var(--color-light)',
                    position: 'relative',

                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'transparent',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'var(--color-light-blue)',
                        borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: 'var(--color-blue)',
                    },
                }}
            >
                <IconButton
                    onClick={onClose}
                    sx={{ position: "absolute", top: 8, right: 8, color: "var(--color-light-blue)" }}
                >
                    <CloseIcon />
                </IconButton>

                {title && (
                    <SectionSubtitle>
                        {title}
                    </SectionSubtitle>
                )}

                <CardDescription>{children}</CardDescription>
            </Box>
        </Modal>
    );
};

export default UniversalModal;

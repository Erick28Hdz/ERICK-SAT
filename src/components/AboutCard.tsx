import React from 'react';
import { Box, Card } from '@mui/material';
import { aboutData, type AboutItem } from '../data/About';
import CardTitle from './CardTitle';
import CardDescription from './CardDescrition';
import UniversalCard from './UniversalCard';

const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100',
    maxWidth: 390,
    borderRadius: '20px 0',
    borderLeft: '2px solid var(--color-beige)',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    margin: '0 auto',
    '&:hover': {
        boxShadow: '0 0 30px rgba(0, 255, 255, 0.25)',
        transform: 'translateY(-5px)',
        borderLeft: '2px solid var(--color-light-blue)',
        borderRight: '2px solid var(--color-light-blue)',

    },
};

export default function AboutCards() {
    return (
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center', margin: 1, padding: 2 }}>
            {aboutData.map(({ id, title, content, Icon }: AboutItem) => (
                <UniversalCard key={id} className={id} sx={cardStyles}>
                    {Icon && (
                        <Box
                            sx={{
                                textAlign: "center",
                                padding: '1.5rem 1rem 0 1rem',
                                "&:hover svg": {
                                    color: "var(--color-light-blue)",
                                    transform: "scale(1.1)",
                                    transition: "all 0.3s ease-in-out",
                                },
                                "& svg": {
                                    color: "var(--color-black)",
                                    fontSize: 60,
                                    mb: 1,
                                    transition: "all 0.3s ease-in-out",
                                },
                            }}
                        >
                            <Icon />
                            <CardTitle>{title}</CardTitle>
                            <CardDescription>
                                {typeof content === "string" ? (
                                    <p>{content}</p>
                                ) : (
                                    <ul style={{ paddingLeft: "1.2rem", margin: 0, textAlign: "start" }}>
                                        {content.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </CardDescription>
                        </Box>
                    )}
                </UniversalCard>

            ))}
        </Box>
    );
}

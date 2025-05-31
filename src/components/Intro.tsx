import Box from '@mui/material/Box';
import styled, { keyframes } from "styled-components";
import UniversalImage from './UniversalImg';
import CardTitle from './CardTitle';
import CardDescription from './CardDescrition';
import Button from './Button';
import Threads from './Threads';

type IntroProps = {
    onEnter: () => void;
};

const Intro = ({ onEnter }: IntroProps) => {
    return (
        <Box
            sx={{
                height: '100vh',
                backgroundColor: 'var(--color-black)',
                color: 'var(--color-light)',
                overflow: 'hidden',
                padding: 2,          // equivale a 16px (2 * 8px spacing)
                margin: 0,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            {/* Fondo animado */}
            <Box style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
            </Box>

            {/* Contenido principal encima del fondo */}
            <FadeInUpBox>
                <UniversalImage src="logo.png" alt="Logo" sx={{ borderRadius: 0 }}/>
                <CardTitle sx={{ color: "var(--color-beige)" }}>Bienvenidx a</CardTitle>
                <IntroTitle>ERICK SOFTWARE AND TECHNOLOGY</IntroTitle>
                <CardDescription>
                    <i>Soluciones digitales seguras, accesibles y funcionales.</i>
                </CardDescription>
                <Button onClick={onEnter}>Ingresar</Button>
            </FadeInUpBox>
        </Box>
    );
};

export default Intro;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FadeInUpBox = styled.div`
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 1.2s ease-out;
`;

const IntroTitle = styled.h1`
  font-family: var(--font-tech);
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(90deg, var(--color-cyan), var(--color-light-blue));
  -webkit-background-clip: text;
  text-shadow: 2px 2px 10px rgba(0, 183, 255, 0.3);
  letter-spacing: 2px;
  margin-bottom: 1rem;
  animation: ${fadeInUp} 1.2s ease-out;
`;
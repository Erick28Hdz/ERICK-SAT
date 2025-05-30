import { Container, Image } from 'react-bootstrap';
import '../styles/Intro.css';
import '../styles/threads.css';
import Button from './Button';
import Threads from './Threads';

type IntroProps = {
    onEnter: () => void;
};

const Intro = ({ onEnter }: IntroProps) => {
    return (
        <Container
            fluid
            className="intro-container d-flex flex-column justify-content-center align-items-center text-center"
            style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}
        >
            {/* Fondo animado */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
            </div>

            {/* Contenido principal encima del fondo */}
            <div className="fade-in-up" style={{ zIndex: 1, position: 'relative' }}>
                <Image
                    src="logo.png"
                    alt="Logo"
                    className="logo mb-4"
                />
                <p className="intro-subtitle">Bienvenidx a</p>
                <h1 className="intro-title">ERICK SOFTWARE AND TECHNOLOGY</h1>
                <p className="intro-description">
                    <i>Soluciones digitales seguras, accesibles y funcionales.</i>
                </p>
                <Button onClick={onEnter}>
                    Ingresar
                </Button>
            </div>
        </Container>
    );
};

export default Intro;

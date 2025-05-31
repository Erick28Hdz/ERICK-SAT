// Navbar.tsx
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import FlipTitleLogo from './FlipLogo';

const Navbar = () => {
  return (
    <StyledNavbar>
      <FlipTitleLogo></FlipTitleLogo>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Nosotros</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/portafolio">Portafolio</Link></li>
        <li><Link to="/clientes">Clientes</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;

// 🎨 Estilos con styled-components
const StyledNavbar = styled.nav`
  background: var(--color-black);
  padding: 1rem 4rem 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ul {
    display: flex;
    gap: 1.5rem;
    list-style: none;

    li a {
      position: relative;
      font-family: var(--font-tech);
      text-transform: uppercase;
      color: var(--color-beige);
      font-weight: 500;
      text-decoration: none;
      padding: 0.5rem 0;
      transition: color 0.3s ease;

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background: #0ff;
        left: 0;
        bottom: 0;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }

      &:hover {
        color: #0ff;
      }
    }
  }
`;

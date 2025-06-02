import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FlipTitleLogo from './FlipLogo';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledNavbar>
      <FlipTitleLogo />

      {/* Ícono hamburguesa o cierre */}
      <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseIcon sx={{ color: '#0ff', fontSize: 32 }} /> : <MenuIcon sx={{ color: '#0ff', fontSize: 32 }} />}
      </MenuToggle>

      <NavLinks className={menuOpen ? 'open' : ''}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>Nosotros</Link></li>
        <li><Link to="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link></li>
        <li><Link to="/portafolio" onClick={() => setMenuOpen(false)}>Portafolio</Link></li>
        <li><Link to="/clientes" onClick={() => setMenuOpen(false)}>Clientes</Link></li>
        <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
        <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
      </NavLinks>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  background: var(--color-black);
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  z-index: 100;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
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

  @media (max-width: 768px) {
    display: none;
    position: absolute;
    top: 100%;
    right: 1rem;
    background: rgba(0, 0, 0, 0.95);
    border: 1px solid #0ff;
    border-radius: 0.5rem;
    flex-direction: column;
    padding: 1rem;
    width: 200px;
    box-shadow: 0 10px 20px rgba(0, 255, 255, 0.2);

    &.open {
      display: flex;
    }

    li {
      padding: 0.5rem 0;
      text-align: left;
    }
  }
`;

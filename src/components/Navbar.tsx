import { Link } from 'react-router-dom'
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h2 className="text-xl font-bold">ERICK SAT</h2>
      <ul className="flex gap-6">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Nosotros</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/portafolio">Portafolio</Link></li>
        <li><Link to="/clientes">Clientes</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
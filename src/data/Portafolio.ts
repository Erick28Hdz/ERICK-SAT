// data/portfolioData.ts
export interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  enlace?: string;
  categoria: string;
  subcategoria: string;
  fecha: string; 
}

export const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "Escaneo de Red Interna",
    descripcion: "Auditoría de red utilizando Nmap y Wireshark para detectar vulnerabilidades.",
    imagen: "/images/default.jpg",
    enlace: "https://github.com/erick/proyecto-auditoria",
    categoria: "Ciberseguridad",
    subcategoria: "Auditoría de red",
    fecha: "2024-07-18",
  },
  {
    id: 2,
    titulo: "Generador de Scripts Bash",
    descripcion: "Automatización de tareas en Linux con scripts personalizados.",
    imagen: "/images/default.jpg",
    enlace: "",
    categoria: "Scripts personalizados",
    subcategoria: "Automatización en Linux",
    fecha: "2024-06-15",
  },
  {
    id: 3,
    titulo: "Plantilla Web Responsiva",
    descripcion: "Sitio web adaptable con diseño moderno para negocios locales.",
    imagen: "/images/default.jpg",
    enlace: "https://demo.com/plantilla",
    categoria: "Plantillas y aplicaciones web",
    subcategoria: "Sitios institucionales",
    fecha: "2024-12-05",
  },
  {
    id: 4,
    titulo: "Conversor de imagenes",
    descripcion: "Convierte, renderiza y cambia el tamaño de tus imagenes unicas, varias o toda una carpeta.",
    imagen: "/images/portafolio/conversor_imagenes.png",
    enlace: "https://drive.google.com/file/d/1ubWoZXymmlUO2VBrqsNem6ebmJ6FqFf-/view?usp=drive_link",
    categoria: "Scripts personalizados",
    subcategoria: "Programas básicos",
    fecha: "2025-07-15",
  },
  {
    id: 5,
    titulo: "Landing Page RUMBO",
    descripcion: "Desarrollo de landing page profesional desde cero con HTML y CSS.",
    imagen: "/images/portafolio/Rumbo.png",
    enlace: "https://erick28hdz.github.io/PaginaRumbo/",
    categoria: "Desarrollo Web por Niveles",
    subcategoria: "Landing Page",
    fecha: "2025-05-10",
  },
  {
    id: 6,
    titulo: "Portafolio Web Profesional",
    descripcion: "Desarrollo de portafolio personal utilizando HTML, CCS y JavaScript",
    imagen: "/images/portafolio/Portafolio.png",
    enlace: "https://erick28hdz.github.io/PortafolioWeb/",
    categoria: "Desarrollo Web por Niveles",
    subcategoria: "Portafolios Web",
    fecha: "2025-02-28",
  },
  {
    id: 7,
    titulo: "Generador contraseñas profesional",
    descripcion: "Aplicación profesional para generar contraseñas y cifracrlas, guarda la contraseña en la nube directamente con google drive.",
    imagen: "/images/portafolio/gen-pro.png",
    enlace: "https://generador-contrasenas-pro.onrender.com/",
    categoria: "Ciberseguridad",
    subcategoria: "Aplicaciones",
    fecha: "2025-06-28",
  }
];

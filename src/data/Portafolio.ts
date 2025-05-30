// data/portfolioData.ts
export interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  enlace?: string;
  categoria: string;
  subcategoria: string;
}

export const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "Escaneo de Red Interna",
    descripcion: "Auditoría de red utilizando Nmap y Wireshark para detectar vulnerabilidades.",
    imagen: "/images/portfolio/red-auditoria.jpg",
    enlace: "https://github.com/erick/proyecto-auditoria",
    categoria: "Ciberseguridad",
    subcategoria: "Auditoría de red",
  },
  {
    id: 2,
    titulo: "Generador de Scripts Bash",
    descripcion: "Automatización de tareas en Linux con scripts personalizados.",
    imagen: "/images/portfolio/script-bash.jpg",
    enlace: "",
    categoria: "Scripts personalizados",
    subcategoria: "Automatización en Linux",
  },
  {
    id: 3,
    titulo: "Plantilla Web Responsiva",
    descripcion: "Sitio web adaptable con diseño moderno para negocios locales.",
    imagen: "/images/portfolio/plantilla-web.jpg",
    enlace: "https://demo.com/plantilla",
    categoria: "Plantillas y aplicaciones web",
    subcategoria: "Sitios institucionales",
  },
  {
    id: 4,
    titulo: "Curso Introductorio a Linux",
    descripcion: "Formación básica sobre comandos esenciales y estructura de archivos.",
    imagen: "/images/portfolio/curso-linux.jpg",
    categoria: "Educación y Formación",
    subcategoria: "Comandos básicos",
  },
  {
    id: 5,
    titulo: "Landing Page RUMBO",
    descripcion: "Desarrollo de landing page profesional desde cero con HTML y CSS.",
    imagen: "/images/portafolio/Rumbo.png",
    enlace: "https://erick28hdz.github.io/PaginaRumbo/",
    categoria: "Desarrollo Web por Niveles",
    subcategoria: "Landing Page",
  },
  {
    id: 6,
    titulo: "Portafolio Web Profesional",
    descripcion: "Desarrollo de portafolio personal utilizando HTML, CCS y JavaScript",
    imagen: "/images/portafolio/Portafolio.png",
    enlace: "https://erick28hdz.github.io/PortafolioWeb/",
    categoria: "Desarrollo Web por Niveles",
    subcategoria: "Portafolios Web",
  }
];

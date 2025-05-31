// soluciones.ts
import SecurityIcon from "@mui/icons-material/Security";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";

export interface Solucion {
  title: string;
  description: string;
  icon: React.ElementType; // Nota: cambiamos de string a componente
  bgColor?: string;
}

export const soluciones: Solucion[] = [
  {
    title: "Ciberseguridad",
    description: "Pentesting, protección de redes, consultoría y normativas de cumplimiento.",
    icon: SecurityIcon,
  },
  {
    title: "Desarrollo de Software",
    description: "Aplicaciones personalizadas, paneles de administración y APIs integradas.",
    icon: CodeIcon,
  },
  {
    title: "Infraestructura Cloud",
    description: "Soluciones escalables en la nube, automatización con DevOps y respaldo seguro.",
    icon: CloudIcon,
  },
];

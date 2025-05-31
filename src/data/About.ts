import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export interface AboutItem {
  id: string;
  title: string;
  content: string | string[];
  Icon?: React.ElementType;  // Añadimos un campo para icono opcional
}

export const aboutData: AboutItem[] = [
  {
    id: 'mision',
    title: 'Misión',
    content:
      'Brindar soluciones tecnológicas accesibles, seguras y personalizadas a través del desarrollo de software, automatizaciones, formación técnica y servicios de ciberseguridad.',
    Icon: EmojiObjectsIcon,
  },
  {
    id: 'vision',
    title: 'Visión',
    content:
      'Ser reconocidos como una empresa líder en soluciones tecnológicas integrales en Latinoamérica, destacándose por nuestra capacidad técnica, innovación en ciberseguridad y formación educativa de calidad.',
    Icon: VisibilityIcon,
  },
  {
    id: 'valores',
    title: 'Valores',
    content: [
      'Innovación continua',
      'Ética profesional y responsabilidad',
      'Accesibilidad tecnológica',
      'Formación autodidacta y compartida',
      'Seguridad de la información',
      'Compromiso con el cliente',
    ],
    Icon: VerifiedUserIcon,
  },
];

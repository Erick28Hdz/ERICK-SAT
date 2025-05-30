// aboutData.ts
export interface AboutItem {
  id: string;
  title: string;
  content: string | string[];
}

export const aboutData: AboutItem[] = [
  {
    id: 'mision',
    title: 'Misión',
    content:
      'Brindar soluciones tecnológicas accesibles, seguras y personalizadas a través del desarrollo de software, automatizaciones, formación técnica y servicios de ciberseguridad.',
  },
  {
    id: 'vision',
    title: 'Visión',
    content:
      'Ser reconocidos como una empresa líder en soluciones tecnológicas integrales en Latinoamérica, destacándose por nuestra capacidad técnica, innovación en ciberseguridad y formación educativa de calidad.',
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
  },
];

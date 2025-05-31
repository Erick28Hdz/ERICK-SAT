// promo.ts
export interface Promo {
  title: string;
  description: string;
  bgColor?: string;
}

export const promos: Promo[] = [
  {
    title: "Nuevo Servicio: Análisis Avanzado de Seguridad",
    description: "Protege tu infraestructura con nuestros escaneos automatizados y auditorías personalizadas de seguridad empresarial.",
    bgColor: undefined, // o algún color si quieres variar
  },
  {
    title: "Lanzamiento de Plataformas Web Empresariales",
    description: "Conoce nuestras soluciones listas para implementar: tiendas en línea, sistemas de reservas y plataformas educativas.",
    bgColor: "rgba(0,0,0,0.15)",
  },
];

import { useMemo } from "react";
import { proyectos } from "../data/Portafolio";

export const usePortfolioFilter = (
  categoriaActual: string,
  subcategoria: string
) => {

  const subcategoriasDisponibles = useMemo(() => {
    if (categoriaActual === "Todos") {
      const allSubs = proyectos.map((p) => p.subcategoria);
      return ["Todas", ...Array.from(new Set(allSubs))];
    }

    const filtered = proyectos.filter((p) => p.categoria === categoriaActual);
    const subs = filtered.map((p) => p.subcategoria);

    return ["Todas", ...Array.from(new Set(subs))];
  }, [categoriaActual]);

  const proyectosFiltrados = useMemo(() => {
    let filtrados =
      categoriaActual === "Todos"
        ? proyectos
        : proyectos.filter((p) => p.categoria === categoriaActual);

    if (subcategoria !== "Todas") {
      filtrados = filtrados.filter((p) => p.subcategoria === subcategoria);
    }

    filtrados.sort((a, b) => {
      const fechaA = new Date(a.fecha).getTime();
      const fechaB = new Date(b.fecha).getTime();
      return fechaB - fechaA;
    });

    return filtrados;
  }, [categoriaActual, subcategoria]);

  return { subcategoriasDisponibles, proyectosFiltrados };
};
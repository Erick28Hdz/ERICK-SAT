import { useState, useEffect } from 'react';

export function usePagination<T>(items: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Reiniciar a la página 1 cuando cambian los elementos
  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return {
    currentPage,
    setCurrentPage,
    currentItems,
    totalPages,
  };
}

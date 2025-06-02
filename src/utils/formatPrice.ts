export function parsePrice(price: string): number {
  return Number(price.replace(/\./g, "").replace(",", ".")); // Convierte "150.000" a 150000
}

export function formatPrice(price: number, locale: string, currency: string): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}
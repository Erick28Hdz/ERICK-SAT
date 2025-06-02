export const capitalize = (text: string): string => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const capitalizeAll = (text: string): string => {
  if (!text) return "";
  return text
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const toUpperCase = (text: string): string => {
  return text.toUpperCase();
};

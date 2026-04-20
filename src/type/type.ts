export type MenuItem = {
  name: string;
  path: string;
  badge?: string; // optionnel
};
export type Product = {
  id: number;
  category: "MEN" | "WOMEN";
  name: string;
  price: string;
  image: string;
  discount?: number;
  colors: string[];
  sizes: { value: string; available: boolean }[]; // tableau de tailles + disponibilité
  description: string;
};
 export type FormType = {
  name: string;
  price: string;
  description: string;
  category: string;
  image: File | null;
};
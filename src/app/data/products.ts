export type Product = {
  id: number;
  name: string;
  category: string;
  subcategory: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Basic T-shirt",
    category: "clothes",
    subcategory: "t-shirts",
  },
  {
    id: 2,
    name: "Classic Shirt",
    category: "clothes",
    subcategory: "shirts",
  },

  {
    id: 3,
    name: "Running Sneakers",
    category: "shoes",
    subcategory: "sneakers",
  },

  {
    id: 4,
    name: "City Backpack",
    category: "bags",
    subcategory: "backpacks",
  },
];

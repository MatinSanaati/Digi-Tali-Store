// src/data/products.ts

export interface Product {
  id: number;
  name: string;
  price: number; // به تومان
  image: string;
  category: "mobile" | "tablet" | "accessory";
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "آیفون 15 پرو",
    price: 45000000,
    image: "https://via.placeholder.com/150?text=iPhone+15",
    category: "mobile",
  },
  {
    id: 2,
    name: "سامسونگ گلکسی S24",
    price: 38000000,
    image: "https://via.placeholder.com/150?text=Galaxy+S24",
    category: "mobile",
  },
  {
    id: 3,
    name: "آیپد پرو 12.9 اینچ",
    price: 52000000,
    image: "https://via.placeholder.com/150?text=iPad+Pro",
    category: "tablet",
  },
  {
    id: 4,
    name: "کیف چرمی آیفون",
    price: 450000,
    image: "https://via.placeholder.com/150?text=Leather+Case",
    category: "accessory",
  },
];

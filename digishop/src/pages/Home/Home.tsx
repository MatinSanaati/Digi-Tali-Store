// src/pages/Home.tsx
import "./Home.css";
import AutoSlider from "../../components/AutoSlider/AutoSlider";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import FeaturedProductsSection from "../../components/ProductsSection/ProductsSection";
import { mockProducts } from "../../data/products";

export default function Home() {
  const featuredProducts = mockProducts.slice(0, 4);

  const categories = [
    { id: "mobile", name: "موبایل", icon: "📱" },
    { id: "tablet", name: "تبلت", icon: "💻" },
    { id: "accessory", name: "لوازم جانبی", icon: "🔌" },
  ];

  return (
    <div className="home-page">
      <AutoSlider />
      <CategoriesSection categories={categories} />
      <FeaturedProductsSection products={featuredProducts} />
    </div>
  );
}

// src/pages/Home.tsx

import "./Home.css";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { mockProducts } from "../data/products";

export default function Home() {
  const featuredProducts = mockProducts.slice(0, 4);

  // دسته‌بندی‌های محصول برای نمایش در Home
  const categories = [
    { id: "mobile", name: "موبایل", icon: "📱" },
    { id: "tablet", name: "تبلت", icon: "💻" },
    { id: "accessory", name: "لوازم جانبی", icon: "🔌" },
  ];

  return (
    <div className="home-page container">
      {/* Hero */}
      <section className="hero">
        <h1>به DigiTali خوش آمدید!</h1>
        <p>بهترین کالاهای دیجیتال با تضمین اصالت و قیمت مناسب</p>
        <Link to="/products" className="btn btn-outline hero__btn">
          مشاهده‌ی محصولات
        </Link>
      </section>

      {/* دسته‌بندی‌ها در Home */}
      <section className="home-categories">
        <h2>دسته‌بندی‌ محصولات</h2>
        <div className="home-categories__grid">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="home-category card"
            >
              <span className="home-category__icon">{cat.icon}</span>
              <h3 className="home-category__title">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* محصولات پیشنهادی */}
      <section className="home-featured">
        <div className="home-featured__header">
          <h2>محصولات پیشنهادی</h2>
          <Link to="/products" className="home-featured__view-all">
            مشاهده همه
          </Link>
        </div>
        <div className="home-featured__grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

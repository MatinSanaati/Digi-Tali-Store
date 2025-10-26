// src/pages/Home.tsx

import "./Home.css";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { mockProducts } from "../data/products";

export default function Home() {
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <div className="home-page container">
      {/* Hero Banner */}
      <section className="hero">
        <h1>به DigiTali خوش آمدید!</h1>
        <p>بهترین کالاهای دیجیتال با تضمین اصالت و قیمت مناسب</p>
        <Link to="/products" className="btn btn-outline hero__btn">
          مشاهده‌ی محصولات
        </Link>
      </section>

      {/* Categories */}
      <section className="home-categories">
        <h2>دسته‌بندی‌ها</h2>
        <div className="home-categories__list">
          <Link to="/products?category=mobile" className="home-category card">
            <h3>موبایل</h3>
          </Link>
          <Link to="/products?category=tablet" className="home-category card">
            <h3>تبلت</h3>
          </Link>
          <Link
            to="/products?category=accessory"
            className="home-category card"
          >
            <h3>لوازم جانبی</h3>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="home-featured">
        <h2>محصولات پیشنهادی</h2>
        <div className="home-featured__grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

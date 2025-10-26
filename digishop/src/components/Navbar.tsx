// src/components/Navbar.tsx

import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentCategory = searchParams.get("category"); // می‌تونه null یا "mobile" باشه

  const categories = [
    { id: "mobile", name: "موبایل" },
    { id: "tablet", name: "تبلت" },
    { id: "accessory", name: "لوازم جانبی" },
  ];

  // تشخیص اکتیو بودن فقط بر اساس category
  const isActive = (category: string | null) => {
    return currentCategory === category;
  };

  return (
    <nav className="navbar">
      <div className="navbar__list">
        <Link
          to="/products"
          className={`navbar__item ${
            isActive(null) ? "navbar__item--active" : ""
          }`}
        >
          همه محصولات
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/products?category=${cat.id}`}
            className={`navbar__item ${
              isActive(cat.id) ? "navbar__item--active" : ""
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

// src/components/Navbar.tsx

import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const categories = [
    { id: "mobile", name: "موبایل" },
    { id: "tablet", name: "تبلت" },
    { id: "accessory", name: "لوازم جانبی" },
  ];

  return (
    <nav className="navbar card">
      <div className="navbar__list">
        <Link to="/products" className="btn btn-outline navbar__item">
          همه محصولات
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/products?category=${cat.id}`}
            className="btn btn-outline navbar__item"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

// src/components/Navbar.tsx

import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // تشخیص صفحه‌ی فعال برای هایلایت
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <Link
            to="/products"
            className={`navbar__item ${
              isActive("/products") ? "navbar__item--active" : ""
            }`}
          >
            محصولات
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`navbar__item ${
              isActive("/about") ? "navbar__item--active" : ""
            }`}
          >
            درباره ما
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={`navbar__item ${
              isActive("/blog") ? "navbar__item--active" : ""
            }`}
          >
            بلاگ
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`navbar__item ${
              isActive("/contact") ? "navbar__item--active" : ""
            }`}
          >
            تماس با ما
          </Link>
        </li>
      </ul>
    </nav>
  );
}

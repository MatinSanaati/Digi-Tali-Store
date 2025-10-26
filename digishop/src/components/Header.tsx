// src/components/Header.tsx

import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import ThemeToggle from "./ThemeToggle";
import Navbar from "./Navbar";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="container">
        <Link
          to="/"
          className={`header__logo ${isHome ? "header__logo--active" : ""}`}
        >
          DigiTali
        </Link>
        <div className="header__main">
          <Navbar />
        </div>
        <div className="header__actions">
          <ThemeToggle />
          <Link to="/cart" className="header__cart-link">
            سبد خرید ({totalItems})
          </Link>
        </div>
      </div>
    </header>
  );
}

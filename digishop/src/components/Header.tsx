// src/components/Header.tsx

import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

export default function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          DigiTali
        </Link>
        <div className="header__cart">
          <Link to="/cart" className="header__cart-link">
            سبد خرید ({totalItems})
          </Link>
        </div>
      </div>
    </header>
  );
}

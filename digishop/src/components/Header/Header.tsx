// src/components/Header/Header.tsx
import "./Header.css";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import ThemeToggle from "./Theme-Toggle/ThemeToggle";
import Navbar from "./Navbar/Navbar";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container">
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <MobileMenu />
        </motion.nav>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link
            to="/"
            className={`header__logo ${isHome ? "header__logo--active" : ""}`}
          >
            DigiTali
          </Link>
        </motion.div>
        <motion.ul
          className="header__main"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Navbar />
        </motion.ul>
        <motion.div
          className="header__actions"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <ThemeToggle />
          <Link to="/cart" className="header__cart-link">
            <motion.span
              className="header__cart-icon"
              whileHover={{ rotate: 10, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            ></motion.span>
            <span className="header__cart-text">سبد خرید ({totalItems})</span>
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}

import "./Header.css";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const totalItems = cartItems.length;

  // === تشخیص جهت تغییر ===
  const prevTotalRef = useRef(totalItems);
  const direction = totalItems > prevTotalRef.current ? "up" : "down";

  useEffect(() => {
    prevTotalRef.current = totalItems;
  }, [totalItems]);

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
          {/* === سبد خرید با UpOnIncrease + DownOnDecrease === */}
          <Link to="/cart" className="header__cart-link">
            <div className="header__cart-wrapper">
              {/* آیکون سبد خرید */}
              <motion.span className="header__cart-icon">
                {/* SVG بعداً جایگزین میشه */}
              </motion.span>

              {/* پرنت ثابت + شمارنده جهت‌دار */}
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.div
                    className="header__cart-badge-container"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                    }}
                  >
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={totalItems}
                        className="header__cart-badge"
                        initial={{
                          y: direction === "up" ? 20 : -20,
                          opacity: 0,
                        }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{
                          y: direction === "up" ? -20 : 20,
                          opacity: 0,
                        }}
                        transition={{
                          y: { type: "spring", stiffness: 500, damping: 30 },
                          opacity: { duration: 0.15 },
                        }}
                      >
                        {totalItems}
                      </motion.span>
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}

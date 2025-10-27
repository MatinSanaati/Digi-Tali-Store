// src/components/MobileMenu/MobileMenu.tsx
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import "./MobileMenu.css";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuVariants: Variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.8, transition: { duration: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const navItems = [
    { to: "/products", label: "محصولات" },
    { to: "/blog", label: "بلاگ" },
    { to: "/about", label: "درباره ما" },
    { to: "/contact", label: "تماس" },
    { to: "/cart", label: "سبد خرید" },
  ];

  return (
    <>
      {!isOpen && (
        <motion.button
          className="mobile-menu__toggle"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ☰
        </motion.button>
      )}
      {isOpen && (
        <motion.div
          className="mobile-menu__overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          onClick={toggleMenu}
        />
      )}
      {isOpen && (
        <motion.nav
          className="mobile-menu"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className="mobile-menu__close"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>
          <motion.div
            className="mobile-menu__items"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {navItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `mobile-menu__item ${
                      isActive ? "mobile-menu__item--active" : ""
                    }`
                  }
                  onClick={toggleMenu}
                >
                  <span className="mobile-menu__label">{item.label}</span>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        </motion.nav>
      )}
    </>
  );
}

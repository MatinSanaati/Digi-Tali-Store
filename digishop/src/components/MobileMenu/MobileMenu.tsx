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

  // مدیریت اسکرول
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // غیرفعال کردن اسکرول
    } else {
      document.body.style.overflow = ""; // فعال کردن اسکرول
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
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.8, transition: { duration: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const navItems = [
    { to: "/products", label: "محصولات", icon: "🛒" },
    { to: "/blog", label: "بلاگ", icon: "📝" },
    { to: "/about", label: "درباره ما", icon: "ℹ️" },
    { to: "/contact", label: "تماس", icon: "📞" },
    { to: "/cart", label: "سبد خرید", icon: "🛍️" },
  ];

  return (
    <>
      {/* دکمه همبرگری - فقط وقتی منو بسته است نمایش داده می‌شود */}
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

      {/* لایه تیره (Overlay) */}
      {isOpen && (
        <motion.div
          className="mobile-menu__overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          onClick={toggleMenu}
        />
      )}

      {/* منوی موبایل */}
      {isOpen && (
        <motion.nav
          className="mobile-menu"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
        >
          {/* دکمه ضربدر داخل منو */}
          <motion.button
            className="mobile-menu__close"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>
          <div className="mobile-menu__items">
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
                  <span className="mobile-menu__icon">{item.icon}</span>
                  <span className="mobile-menu__label">{item.label}</span>
                </NavLink>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      )}
    </>
  );
}

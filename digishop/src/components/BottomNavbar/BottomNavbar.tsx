// src/components/BottomNavbar.tsx
import { NavLink } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import "./BottomNavbar.css";

export default function BottomNavbar() {
  const navItems = [
    { to: "/", label: "خانه", icon: "🏠" },
    { to: "/products", label: "محصولات", icon: "🛒" },
    { to: "/blog", label: "بلاگ", icon: "📝" },
    { to: "/about", label: "درباره ما", icon: "ℹ️" },
    { to: "/contact", label: "تماس", icon: "📞" },
    { to: "/cart", label: "سبد خرید", icon: "🛍️" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      className="bottom-navbar"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bottom-navbar__items">
        {navItems.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `bottom-navbar__item ${
                  isActive ? "bottom-navbar__item--active" : ""
                }`
              }
            >
              <span className="bottom-navbar__icon">{item.icon}</span>
              <span className="bottom-navbar__label">{item.label}</span>
            </NavLink>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}

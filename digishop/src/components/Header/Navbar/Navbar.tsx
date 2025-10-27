// src/components/Navbar/Navbar.tsx
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="navbar">
      <motion.ul
        className="navbar__list"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {[
          { to: "/products", label: "محصولات" },
          { to: "/about", label: "درباره ما" },
          { to: "/blog", label: "بلاگ" },
          { to: "/contact", label: "تماس با ما" },
        ].map((item) => (
          <motion.li key={item.to} variants={itemVariants}>
            <Link
              to={item.to}
              className={`navbar__item ${
                isActive(item.to) ? "navbar__item--active" : ""
              }`}
            >
              {item.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}

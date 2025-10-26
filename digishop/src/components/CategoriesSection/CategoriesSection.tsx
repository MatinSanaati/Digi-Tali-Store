// src/components/CategoriesSection/CategoriesSection.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./CategoriesSection.css";

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategoriesSectionProps {
  categories: Category[];
}

export default function CategoriesSection({
  categories,
}: CategoriesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="categories-section">
      <h2>دسته‌بندی‌ محصولات</h2>
      <motion.div
        className="categories-section__grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map((cat) => (
          <motion.div key={cat.id} variants={itemVariants}>
            <Link
              to={`/products?category=${cat.id}`}
              className="category-card card"
            >
              <span className="category-card__icon">{cat.icon}</span>
              <h3 className="category-card__title">{cat.name}</h3>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

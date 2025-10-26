// src/components/ProductsSection/ProductsSection.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ProductsSection.css";
import ProductCard from "../ProductCard/ProductCard";
import type { Product } from "../../data/products";

interface FeaturedProductsSectionProps {
  products: Product[];
}

export default function FeaturedProductsSection({
  products,
}: FeaturedProductsSectionProps) {
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
    <section className="featured-products-section">
      <div className="featured-products__header">
        <h2>محصولات پیشنهادی</h2>
        <Link to="/products" className="featured-products__view-all">
          مشاهده همه
        </Link>
      </div>
      <motion.div
        className="featured-products__grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

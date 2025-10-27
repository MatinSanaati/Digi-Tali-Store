// src/components/ProductsSection/ProductsSection.tsx
import { useEffect, useRef } from "react";
import { motion, useDragControls } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsSection.css";
import type { Product } from "../../data/products";

interface FeaturedProductsSectionProps {
  products: Product[];
}

export default function FeaturedProductsSection({
  products,
}: FeaturedProductsSectionProps) {
  const dragControls = useDragControls();
  const scrollRef = useRef<HTMLDivElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // غیرفعال کردن انتخاب متن موقع درگ
  useEffect(() => {
    const preventTextSelection = (e: Event) => {
      e.preventDefault();
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("selectstart", preventTextSelection);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener(
          "selectstart",
          preventTextSelection
        );
      }
    };
  }, []);

  if (!products || products.length === 0) {
    return <div className="featured-products-section">محصولی یافت نشد</div>;
  }

  return (
    <section className="featured-products-section">
      <div className="featured-products__header">
        <h2>محصولات پیشنهادی</h2>
        <Link to="/products" className="featured-products__view-all">
          مشاهده همه
        </Link>
      </div>
      <motion.div
        ref={scrollRef}
        className="featured-products__scroll-container"
        drag="x"
        dragControls={dragControls}
        dragConstraints={{ left: -1000, right: 0 }}
        dragElastic={0.2}
        whileDrag={{ cursor: "pointer" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="featured-products__grid">
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="product-card-wrapper"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// src/components/ProductCard/ProductCard.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ProductCard.css";
import type { Product } from "../../data/products";
import { Link } from "react-router-dom";
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = product.image;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true); // حتی در صورت خطا ادامه بده
  }, [product.image]);

  const categoryName =
    product.category === "mobile"
      ? "موبایل"
      : product.category === "tablet"
      ? "تبلت"
      : product.category === "accessory"
      ? "لوازم جانبی"
      : product.category === "laptop"
      ? "لپ‌تاپ"
      : "هدفون";

  if (!imageLoaded) {
    return <div className="product-card card">در حال لود...</div>;
  }

  return (
    <motion.div
      className="product-card card"
      whileHover={{ scale: 1.03, boxShadow: "var(--shadow-md)" }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/product/${product.id}`} className="product-card__link">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />
        <div className="product-card__info">
          <h3 className="product-card__title">{product.name}</h3>
          <p className="product-card__category">دسته‌بندی: {categoryName}</p>
          <p className="product-card__price">
            {product.price.toLocaleString()} تومان
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

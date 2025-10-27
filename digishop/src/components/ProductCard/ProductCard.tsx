// src/components/ProductCard/ProductCard.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import "./ProductCard.css";
import { addToCart } from "../../features/cart/cartSlice";
import type { Product } from "../../data/products";
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = product.image;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true); // حتی در صورت خطا ادامه بده
  }, [product.image]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1, // اضافه کردن quantity
      })
    );
  };

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
        <motion.button
          onClick={handleAddToCart}
          className="btn btn-primary product-card__add-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          افزودن به سبد خرید
        </motion.button>
      </div>
    </motion.div>
  );
}

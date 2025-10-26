// src/components/ProductCard.tsx

import "./ProductCard.css";
import { useDispatch } from "react-redux";
import type { Product } from "../data/products";
import { addToCart } from "../features/cart/cartSlice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card__image"
      />
      <h3 className="product-card__title">{product.name}</h3>
      <p className="product-card__price">
        {product.price.toLocaleString()} تومان
      </p>
      <button
        onClick={handleAddToCart}
        className="btn btn-primary product-card__add-btn"
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
}

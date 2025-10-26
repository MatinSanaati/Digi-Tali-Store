// src/pages/ProductDetail.tsx

import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { mockProducts } from "../../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const product = mockProducts.find((p) => p.id === productId);

  const dispatch = useDispatch();

  if (!product) {
    return (
      <div className="container" style={{ padding: "2rem" }}>
        <p className="product-detail__not-found">محصولی یافت نشد!</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const categoryName =
    product.category === "mobile"
      ? "موبایل"
      : product.category === "tablet"
      ? "تبلت"
      : "لوازم جانبی";

  return (
    <div className="product-detail-page container">
      <div className="product-detail__content">
        <img
          src={product.image}
          alt={product.name}
          className="product-detail__image"
        />
        <div className="product-detail__info">
          <h1 className="product-detail__title">{product.name}</h1>
          <p className="product-detail__price">
            {product.price.toLocaleString()} تومان
          </p>
          <p className="product-detail__category">دسته‌بندی: {categoryName}</p>
          <button
            onClick={handleAddToCart}
            className="btn btn-primary product-detail__add-btn"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}

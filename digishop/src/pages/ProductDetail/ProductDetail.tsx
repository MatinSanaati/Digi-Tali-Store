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
      <div className="container" style={{ marginTop: "var(--header-offset)" }}>
        <p className="product-detail__not-found">محصولی یافت نشد!</p>
      </div>
    );
  }

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
      : product.category === "headphone"
      ? "هدفون"
      : product.category === "monitor"
      ? "مانیتور"
      : product.category === "smartwatch"
      ? "ساعت هوشمند"
      : product.category === "computer_parts"
      ? "قطعات کامپیوتر"
      : "قلم دیجیتال";

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

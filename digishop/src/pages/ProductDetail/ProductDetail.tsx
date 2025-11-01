// src/pages/ProductDetail.tsx
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { mockProducts } from "../../data/products";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../features/cart/cartSlice";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import type { RootState, AppDispatch } from "../../app/store";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const product = mockProducts.find((p) => p.id === productId);
  const dispatch = useDispatch<AppDispatch>();

  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.id === productId)
  );

  const [selectedColor, setSelectedColor] = useState<string>(
    product?.colors?.[0] || ""
  );

  useEffect(() => {
    if (product?.colors?.[0]) setSelectedColor(product.colors[0]);
  }, [product]);

  if (!product) {
    return (
      <div className="container" style={{ marginTop: "var(--space-2xl)" }}>
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
        quantity: 1,
        color: selectedColor,
      })
    );
  };

  const handleIncrease = () => dispatch(increaseQuantity(product.id));

  const handleDecreaseOrRemove = (id: number, quantity: number) => {
    if (quantity === 1) dispatch(removeFromCart(id));
    else dispatch(decreaseQuantity(id));
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
      <motion.div
        className="product-detail__content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* راست: تصویر محصول */}
        <motion.div
          className="product-detail__image-section"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="product-detail__image"
          />
        </motion.div>

        {/* چپ: اطلاعات محصول */}
        <motion.div
          className="product-detail__info-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="product-detail__title">{product.name}</h1>
          <p className="product-detail__category">دسته‌بندی: {categoryName}</p>
          <p className="product-detail__price">
            {product.price.toLocaleString()} تومان
          </p>

          {/* انتخاب رنگ */}
          {product.colors && product.colors.length > 0 && (
            <div className="product-detail__color-section">
              <p className="product-detail__color-title">
                رنگ انتخاب شده: <span>{selectedColor}</span>
              </p>
              <div className="product-detail__colors">
                {product.colors.map((color) => (
                  <label
                    key={color}
                    className="product-detail__color-label"
                    style={{
                      borderColor:
                        selectedColor === color
                          ? "var(--color-primary)"
                          : "var(--color-border)",
                    }}
                  >
                    <input
                      type="radio"
                      name="color"
                      value={color}
                      checked={selectedColor === color}
                      onChange={() => setSelectedColor(color)}
                    />
                    <span
                      className="product-detail__color-box"
                      style={{ backgroundColor: color }}
                    />
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* ویژگی‌ها */}
          {product.features && product.features.length > 0 && (
            <div className="product-detail__features-section">
              <p className="product-detail__features-title">ویژگی‌ها:</p>
              <ul className="product-detail__features-list">
                {product.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>
          )}

          {/* کنترل افزودن به کارت یا تعداد محصول */}
          {!cartItem ? (
            <motion.button
              onClick={handleAddToCart}
              className="product-detail__add-btn"
              whileTap={{ scale: 0.95 }}
            >
              افزودن به سبد خرید
            </motion.button>
          ) : (
            <div className="cart-item__quantity">
              <motion.button
                onClick={() =>
                  handleDecreaseOrRemove(cartItem.id, cartItem.quantity)
                }
                className="cart-item__quantity-btn cart-item__quantity-btn--minus"
                whileTap={{ scale: 0.9 }}
              >
                {cartItem.quantity === 1 ? "×" : "−"}
              </motion.button>

              <span className="cart-item__quantity-value">
                {cartItem.quantity}
              </span>

              <motion.button
                onClick={() => handleIncrease()}
                className="cart-item__quantity-btn cart-item__quantity-btn--plus"
                whileTap={{ scale: 0.9 }}
              >
                +
              </motion.button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

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
import ProductImage from "../../components/ProductImage/ProductImage";
import { colorName } from "../../utils/colorName";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const product = mockProducts.find((p) => p.id === productId);
  const dispatch = useDispatch<AppDispatch>();

  // cartItem اگر محصول داخل سبد هست اینجا پیدا میشه
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
        localImageFile: product.localImageFile,
        quantity: 1,
        color: selectedColor,
        category: product.category,
        features: product.features,
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
    <div className="product-detail-page">
      <motion.div
        className="product-detail__content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        {/* ---------- RIGHT: product visual (image + gallery placeholder) ---------- */}
        <motion.section
          className="product-detail__image-section"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="pd-image-wrapper">
            <ProductImage
              src={product.image}
              localFileName={product.localImageFile || "placeholder.png"}
              alt={product.name}
              size="large"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </motion.section>
        {/* ---------- LEFT: purchase module (copied & adapted from cart UI) ---------- */}
        <motion.aside
          className="pd-purchase"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <div className="pd-card">
            <h2 className="pd-title">{product.name}</h2>
            <p className="pd-category">دسته‌بندی: {categoryName}</p>

            <div className="pd-price-row">
              <div className="pd-price">
                {product.price.toLocaleString()} تومان
              </div>
            </div>

            {/* رنگ انتخاب شده */}
            {product.colors && product.colors.length > 0 && (
              <div className="pd-color-section">
                <div className="pd-color-selected">
                  <span className="pd-color-selected__label">رنگ:</span>
                  <span className="pd-color-selected__name">
                    {colorName(selectedColor)}
                  </span>
                </div>

                <div className="pd-colors">
                  {product.colors.map((c) => (
                    <label
                      key={c}
                      className={`pd-color-pill ${
                        selectedColor === c ? "pd-color-pill--active" : ""
                      }`}
                      style={{
                        borderColor:
                          selectedColor === c
                            ? "var(--color-primary)"
                            : "var(--color-border)",
                      }}
                    >
                      <input
                        type="radio"
                        name="pd-color"
                        value={c}
                        checked={selectedColor === c}
                        onChange={() => setSelectedColor(c)}
                      />
                      <span
                        className="pd-color-pill__swatch"
                        style={{ backgroundColor: c }}
                        aria-hidden
                      />
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* ویژگی‌ها */}
            {product.features && product.features.length > 0 && (
              <div className="pd-features">
                <p className="pd-features__title">ویژگی‌ها</p>
                <ul className="pd-features__list">
                  {product.features.map((f, i) => (
                    <li key={i} className="pd-features__item">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* افزودن / کنترل تعداد (همان کنترلِ کارت) */}
            <div className="pd-actions">
              {!cartItem ? (
                <motion.button
                  onClick={handleAddToCart}
                  className="pd-btn pd-btn--primary"
                  whileTap={{ scale: 0.98 }}
                >
                  افزودن به سبد خرید
                </motion.button>
              ) : (
                <div className="pd-quantity">
                  <motion.button
                    onClick={() =>
                      handleDecreaseOrRemove(cartItem.id, cartItem.quantity)
                    }
                    className="pd-qty__btn pd-qty__btn--minus"
                    whileTap={{ scale: 0.9 }}
                    data-remove={cartItem.quantity === 1}
                  >
                    {cartItem.quantity === 1 ? "×" : "−"}
                  </motion.button>

                  <span className="pd-qty__value">{cartItem.quantity}</span>

                  <motion.button
                    onClick={() => handleIncrease()}
                    className="pd-qty__btn pd-qty__btn--plus"
                    whileTap={{ scale: 0.9 }}
                  >
                    +
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </div>
  );
}

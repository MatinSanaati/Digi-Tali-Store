// src/pages/Cart.tsx
import { useSelector, useDispatch } from "react-redux";
import { motion, type Variants } from "framer-motion";
import type { AppDispatch, RootState } from "../../app/store";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <motion.div
        className="cart-empty"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>سبد خرید شما خالی است</motion.h2>
        <motion.div variants={itemVariants}>
          <Link to="/" className="cart-empty__link">
            برگردیم به فروشگاه
          </Link>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="cart-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants}>
        سبد خرید ({cartItems.length} کالا)
      </motion.h2>

      <motion.div className="cart-items" variants={containerVariants}>
        {cartItems.map((item) => (
          <motion.div
            key={item.id}
            className="cart-item card"
            variants={itemVariants}
            whileHover={{ scale: 1.03, boxShadow: "var(--shadow-md)" }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="cart-item__image"
            />
            <div className="cart-item__info">
              <h3>{item.name}</h3>
              <p className="cart-item__price">
                {item.price.toLocaleString()} تومان
              </p>
            </div>

            <div className="cart-item__quantity">
              <motion.button
                onClick={() => handleDecrease(item.id)}
                disabled={item.quantity <= 1}
                className="cart-item__quantity-btn cart-item__quantity-btn--minus"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                -
              </motion.button>
              <span className="cart-item__quantity-value">{item.quantity}</span>
              <motion.button
                onClick={() => handleIncrease(item.id)}
                className="cart-item__quantity-btn cart-item__quantity-btn--plus"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                +
              </motion.button>
            </div>

            <motion.button
              onClick={() => handleRemove(item.id)}
              className="btn btn-secondary cart-item__remove-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              حذف
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="cart-summary card" variants={itemVariants}>
        <div className="cart-summary__discount">
          <input
            type="text"
            placeholder="کد تخفیف"
            className="cart-summary__discount-input"
          />
          <button className="btn btn-outline">اعمال کد</button>
        </div>
        <div className="cart-summary__details">
          <p>جمع محصولات: {totalPrice.toLocaleString()} تومان</p>
          <p>هزینه ارسال: رایگان (placeholder)</p>
          <h3>جمع کل: {totalPrice.toLocaleString()} تومان</h3>
        </div>
        <div className="cart-summary__actions">
          <Link to="/" className="btn btn-outline">
            ادامه خرید
          </Link>
          <button className="btn btn-primary cart-summary__checkout-btn">
            ثبت سفارش
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

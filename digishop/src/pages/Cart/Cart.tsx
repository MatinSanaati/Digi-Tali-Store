import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import type { AppDispatch, RootState } from "../../app/store";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const handleIncrease = (id: number) => dispatch(increaseQuantity(id));
  const handleDecreaseOrRemove = (id: number, quantity: number) => {
    if (quantity <= 1) dispatch(removeFromCart(id));
    else dispatch(decreaseQuantity(id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // === سبد خالی ===
  if (cartItems.length === 0) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="cart-empty-state"
          className="cart-empty"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* متن با key → فوراً وارد میشه */}
          <motion.h2 key="empty-title" variants={itemVariants}>
            سبد خرید شما خالی است
          </motion.h2>

          {/* لینک با AnimatePresence داخلی */}
          <AnimatePresence>
            <motion.div
              key="return-link"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Link to="/" className="cart-empty__link">
                برگردیم به فروشگاه
              </Link>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    );
  }
  // === سبد پر ===
  return (
    <motion.div
      className="cart-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* === لایه 1: عنوان === */}
      <motion.header className="cart-header" variants={itemVariants}>
        <h1 className="cart-header__title">سبد خرید</h1>
        <p className="cart-header__count">{cartItems.length} کالا</p>
      </motion.header>

      <div className="cart-layout">
        {/* === لایه 2: محصولات === */}
        <motion.main className="cart-products" variants={containerVariants}>
          {cartItems.map((item, index) => (
            <motion.article
              key={item.id}
              className="cart-item card"
              variants={itemVariants}
              custom={index}
              style={{ zIndex: cartItems.length - index }}
            >
              <div className="cart-item__media-controls">
                <motion.div
                  className="cart-item__image-wrapper"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item__image"
                  />
                </motion.div>

                <div className="cart-item__quantity">
                  <motion.button
                    onClick={() =>
                      handleDecreaseOrRemove(item.id, item.quantity)
                    }
                    className="cart-item__quantity-btn cart-item__quantity-btn--minus"
                    data-remove={item.quantity === 1}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.quantity === 1 ? "×" : "−"}
                  </motion.button>

                  <span className="cart-item__quantity-value">
                    {item.quantity}
                  </span>

                  <motion.button
                    onClick={() => handleIncrease(item.id)}
                    className="cart-item__quantity-btn cart-item__quantity-btn--plus"
                    whileTap={{ scale: 0.9 }}
                  >
                    +
                  </motion.button>
                </div>
              </div>

              <div className="cart-item__info">
                <h3 className="cart-item__name">{item.name}</h3>
                <p className="cart-item__price">
                  {item.price.toLocaleString()} تومان
                </p>
              </div>
            </motion.article>
          ))}
        </motion.main>

        {/* === لایه 3: سایدبار چسبنده === */}
        <motion.aside className="cart-sidebar" variants={itemVariants}>
          <h3 className="cart-sidebar__title">خلاصه سفارش</h3>
          <div className="cart-sidebar__details">
            <p>
              <span>جمع محصولات:</span>
              <span>{totalPrice.toLocaleString()} تومان</span>
            </p>
            <p className="cart-sidebar__total">
              <span>جمع کل:</span>
              <span>{totalPrice.toLocaleString()} تومان</span>
            </p>
          </div>
          <div className="cart-sidebar__actions">
            <button className="cart-sidebar__checkout-btn">ثبت سفارش</button>
          </div>
        </motion.aside>
      </div>
    </motion.div>
  );
}

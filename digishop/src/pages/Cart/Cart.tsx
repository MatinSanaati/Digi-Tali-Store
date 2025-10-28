import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence, motion, type Variants } from "framer-motion";
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
    if (quantity <= 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(decreaseQuantity(id));
    }
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
    );
  }

  return (
    <motion.div
      className="cart-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants} className="cart-page__title">
        سبد خرید ({cartItems.length} کالا)
      </motion.h2>

      {/* === ساختار ۲ ستونه === */}
      <div className="cart-layout">
        {/* === سمت راست: محصولات === */}
        <motion.div className="cart-products" variants={containerVariants}>
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              className="cart-item card"
              variants={itemVariants}
            >
              {/* === سمت راست: عکس + کنترل‌ها === */}
              <div className="cart-item__media-controls">
                {/* پرنت عکس با انیمیشن float */}
                <motion.div
                  className="cart-item__image-wrapper"
                  animate={{
                    y: [0, -8, 0], // بالا → پایین → بالا
                  }}
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
                  {/* دکمه کاهش/حذف — بدون scale */}
                  <motion.button
                    onClick={() =>
                      handleDecreaseOrRemove(item.id, item.quantity)
                    }
                    className="cart-item__quantity-btn cart-item__quantity-btn--minus"
                    data-remove={item.quantity === 1}
                  >
                    {item.quantity === 1 ? "×" : "−"}
                  </motion.button>

                  <span className="cart-item__quantity-value">
                    {item.quantity}
                  </span>

                  {/* دکمه افزایش — بدون scale */}
                  <motion.button
                    onClick={() => handleIncrease(item.id)}
                    className="cart-item__quantity-btn cart-item__quantity-btn--plus"
                  >
                    +
                  </motion.button>
                </div>
              </div>

              {/* === سمت چپ: اطلاعات محصول === */}
              <div className="cart-item__info">
                <h3 className="cart-item__name">{item.name}</h3>
                <p className="cart-item__price">
                  {item.price.toLocaleString()} تومان
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* === سمت چپ: سایدبار === */}
        <motion.aside className="cart-sidebar card" variants={itemVariants}>
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
            <button className="btn btn-primary cart-sidebar__checkout-btn">
              ثبت سفارش
            </button>
          </div>
        </motion.aside>
      </div>
    </motion.div>
  );
}

// src/pages/Cart.tsx

import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

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
      <div className="cart-empty container">
        <h2>سبد خرید شما خالی است</h2>
        <Link to="/" className="cart-empty__link">
          برگردیم به فروشگاه
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <h2>سبد خرید ({cartItems.length} کالا)</h2>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item card">
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
              <button
                onClick={() => handleDecrease(item.id)}
                disabled={item.quantity <= 1}
                className="cart-item__quantity-btn cart-item__quantity-btn--minus"
              >
                -
              </button>
              <span className="cart-item__quantity-value">{item.quantity}</span>
              <button
                onClick={() => handleIncrease(item.id)}
                className="cart-item__quantity-btn cart-item__quantity-btn--plus"
              >
                +
              </button>
            </div>

            <button
              onClick={() => handleRemove(item.id)}
              className="btn btn-secondary cart-item__remove-btn"
            >
              حذف
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>جمع کل: {totalPrice.toLocaleString()} تومان</h3>
        <button className="btn btn-success cart-summary__checkout-btn">
          ثبت سفارش
        </button>
      </div>
    </div>
  );
}

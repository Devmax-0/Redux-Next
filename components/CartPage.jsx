"use client";

import { useSelector } from "react-redux";

const CartPage = () => {
  const items = useSelector((state) => state.cart);
  const total = items.reduce((a, b) => a + b.price, 0);
  return (
    <>
      <div className="cart-page-body">
        {items &&
          items.map((item, index) => (
            <div key={index} className="cart-container">
              <h3 className="cart-page-heading">{item.name}</h3>
              <h3 className="cart-page-price">
                Item Price: <b>Rs.{item.price}</b>
              </h3>
            </div>
          ))}
      </div>
      <div>
        <h1 className="cart-page-total">
          Total Price: <span>Rs.{total}</span>
        </h1>
      </div>
    </>
  );
};

export default CartPage;

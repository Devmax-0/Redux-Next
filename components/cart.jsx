"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  console.log("Items:", items);
  const total = items.reduce((a, b) => a + b.price, 0);
  return (
    <>
      <div className=" cart-wrapper">
        <h3 className="cart-heading ">
          Total Items: {items.length} (Rs. {total} /-) /-
        </h3>
        <button onClick={() => router.push("/cart")} className="cart-page-btn">
          Cart
        </button>
      </div>
    </>
  );
};

export default Cart;

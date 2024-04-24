"use client";

import { addItem } from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";

const Product = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container">
        <img className="card-img-top" src="" alt="" />
        <div className="card-body">
          <h5 class="card-title">{props.productName}</h5>
          <p class="card-text">Rs: {props.price} /-</p>
          <button
            className="btn btn-primary"
            onClick={() =>
              dispatch(addItem({ name: props.productName, price: props.price }))
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

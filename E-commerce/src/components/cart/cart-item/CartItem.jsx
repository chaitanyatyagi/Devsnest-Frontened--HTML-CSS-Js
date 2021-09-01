import React from "react";
import { useDispatch } from "react-redux";
import "./CartItem-Style.css";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <div className="details">
        <div className="image">
          <img src={item.url} alt={item.title} />
        </div>
        <div className="desc">
          <Link to={`/product/${item.id}`}>
            <div className="title">{item.title}</div>
          </Link>
          <div className="size">{item.description}</div>
          <div className="price">₹ {item.price * item.quantity}</div>
        </div>
      </div>
      <div className="qty-row">
        <div className="qty">
          <button
            className="dec"
            onClick={() => dispatch({ type: "DEC", payload: item.id })}
          >
            -
          </button>
          <div className="qty-value">{item.quantity}</div>
          <button
            className="dec"
            onClick={() => dispatch({ type: "INC", payload: item.id })}
          >
            +
          </button>
        </div>
        <div className="remove-btn">
          <button
            onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

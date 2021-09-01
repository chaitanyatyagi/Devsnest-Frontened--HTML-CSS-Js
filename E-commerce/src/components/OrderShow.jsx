import React from "react";
import { useDispatch } from "react-redux";
import "./cart/cart-item/CartItem-Style.css";
import { Link } from "react-router-dom";

const OrderShow = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cartItem ORDER">
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
          
          <div className="qty-value" style={{border:"none",width:100}}>Qty: {item.quantity}</div>
          
        </div>
        <div className="remove-btn">
          
        </div>
      </div>
    </div>
  );
};

export default OrderShow;

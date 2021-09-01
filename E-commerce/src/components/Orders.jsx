import React from "react";
import { useSelector } from "react-redux"
import CartItem from "./cart/cart-item/CartItem";
import OrderShow from "./OrderShow"

function Orders() {
  const {myOrders} = useSelector((state)=>state.cartReducer)
  return (
    <div className="Orders">
      <div className="Head">
        <h1>My Orders</h1>
        <h4>View all Your pending orders and delivered Orders.</h4>
      </div>
      <hr  className="line1"/>
      <div className="items">
        <div className="item-row">
          {myOrders.length > 0 ? (
            <>
              {myOrders.map((order) => (
                <div className="orderone">
                  {order.map((item) => (
                    <OrderShow key={item.id} item={item} className="orderItem" />
                  ))}
                  <hr />
                </div>
              ))}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;

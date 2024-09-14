import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.priceCents * item.quantity;
  }, 0);

  return (
    <div className="cart-page">
    <div className="cart-head"> Your Cart</div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2 className="h2-cart">{item.name}</h2>
                <p >Price:  ₹ {(item.priceCents)}</p>
                <div className="quantity-control">
                  <label>Quantity: </label>
                  <input style={{border: "1px solid black", borderRadius: "5px"}}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  />
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
              <p className="item-total">Total:  ₹ {(item.priceCents * item.quantity )}</p>
            </div>
          ))}
        </div>
      )}
      <div className="cart-end-sec">
      <h2 className="total">Total Price: ₹ {totalPrice}</h2>
      <button className="addtoCartB">Place Order</button>
      </div>
      
    </div>
  );
};

export default Cart;

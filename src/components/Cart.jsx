import React, { useContext } from "react";
import { CartContext } from "../context/cart.context";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Total Cart Items: {cartItems.length}</h2>
    </div>
  );
};

export default Cart;

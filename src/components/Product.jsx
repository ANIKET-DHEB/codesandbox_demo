import React, { useContext } from "react";
import { CartContext } from "../context/cart.context";

export const Product = ({ productName }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid black",
        marginBottom: "1rem"
      }}
    >
      <h1>{productName}</h1>
      <button onClick={() => addToCart(productName)}>Add to Cart</button>
    </div>
  );
};

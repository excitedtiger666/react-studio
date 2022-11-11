// TODO: create a component that displays a single bakery item
import { useState } from "react";
import "../App.css";

function Cart(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  return (
    <div>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Cart;

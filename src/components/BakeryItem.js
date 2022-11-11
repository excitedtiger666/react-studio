// TODO: create a component that displays a single bakery item
import { useState } from "react";
import "../App.css";

function BakeryItem(props) {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  return (
    <div className="Item-Container">
      <img src={props.image} alt="" />
      <div>
        {props.name}
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
      <button
        onClick={() => {
          props.addToCart(props.name, props.price);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default BakeryItem;

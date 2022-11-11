import "./App.css";
import { useState, useEffect } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Cart from "./components/Cart";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

//image, description, price, add to cart big container
function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const addToCart = (n, p) => {
    setCart([...cart, { name: n, price: p }]);
  };

  const sumValues = (c) => {
    let sum = 0;
    console.log(c);
    for (let ind in c) {
      sum += cart[ind].price;
    }
    return sum;
  };

  useEffect(() => {
    setTotal(sumValues(cart));
  }, [cart]);

  return (
    <div className="App">
      <div className="items">
      <h1>Roshan's Bakery</h1>{" "}
      {/* TODO: personalize your bakery (if you want) */}
      {bakeryData.map(
        (
          item,
          index // TODO: map bakeryData to BakeryItem components
        ) => (
          <BakeryItem
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            addToCart={addToCart}
          />
          // replace with BakeryItem component
        )
      )}
      </div>
      <div>
        <h2>Cart</h2>
        {cart.map((item) => (
          <Cart name={item.name} price={item.price} />
        ))}
      </div>
      <div>
        <h2>Total: {total} </h2>
      </div>
    </div>
  );
}

export default App;

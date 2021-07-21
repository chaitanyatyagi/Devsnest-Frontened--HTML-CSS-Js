import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { useState } from "react";
import Card from "./components/card";

const App = () => {
  let [card, setCard] = useState([
    {
      cal: "69",
      title: "Pizza",
    },
    { cal: "110", title: "Burger" },
    { cal: "70", title: "Maggie" },
    { cal: "84", title: "Chips" },
    { cal: "240", title: "Chhole Bhature" },
    { cal: "99", title: "Coke" },
    { cal: "52", title: "Cheese Patties" },
  ]);

  function removes(i) {
    const newCards = card.filter((el, index) => index !== i);
    setCard(newCards);
  }
  return (
    <div className="container">
      {card.map((items, index) => (
        <Card
          cal={items.cal}
          title={items.title}
          key1={index}
          key={index}
          func={removes}
        />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

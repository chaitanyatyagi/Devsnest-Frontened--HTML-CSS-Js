import React,{useState} from 'react'
import Main from "./Main.js";
import "./Style.css"

function Column() {
    const [card, setCard] = useState([
        { cal: "69",title: "Pizza"},
        { cal: "110", title: "Burger" },
        { cal: "70", title: "Maggie" },
        { cal: "84", title: "Chips" },
        { cal: "240", title: "Chhole Bhature" },
        { cal: "99", title: "Coke" },
        { cal: "52", title: "Cheese Patties" },
      ]);

      function remove(i){
        const newCards = card.filter((el, indx) => indx !== i);
        setCard(newCards);
      }
    return (
        <div className="block">
            <h3>INSTRUCTIONS</h3>
            <li>pass value and setter of the state to the component as props</li>
            <div className="parent">
                {card.map((item,indx) => (
                    <Main title = {item.title} calorie = {item.cal} key = {indx} key1 = {indx} func = {remove}/>
                ))}
            </div>
        </div>
    )
}
export default Column;
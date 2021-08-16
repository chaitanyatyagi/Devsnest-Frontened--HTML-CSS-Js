import React, { useState, useEffect } from 'react'
import Components from './Components'
import './style.css'

function Main() {

    const [itemname, setItemname] = useState('')
    const [calorieamount, setCalorieamount] = useState(0)
    const [meals, setMeals] = useState([])
    const addMealHanler = () => {
        
        const oldMeals = [...meals];
        const meal = {
            itemname,
            calorieamount,
            id: Math.floor(Math.random() * 1000),
        };

        const newMeals = oldMeals.concat(meal);

        if (calorieamount <= 0 || itemname === "") {
            alert("Must not be empty");
        } else {
            setMeals(newMeals);
        }

        setItemname("");
        setCalorieamount(0);
    }

    const deleteMealHandler = (id)=>{
        const oldMeals = [...meals];
        const newMeals = oldMeals.filter((meals)=>meals.id !== id);
        setMeals(newMeals);
      }

    return (
        <div>
            <div className="grid">
                <input type="text" value={itemname} onChange={(event) => setItemname(event.target.value )} placeholder="Item Name" />
                <input type="number" min='0' value={calorieamount} onChange={(event) => setCalorieamount(event.target.value)} placeholder="Calorie Amount" />
                <button onClick={() => addMealHanler()}>ADD ITEM</button>
            </div>
            <div className='heading'><h1>ADD ITEM</h1></div>
            <hr />
            {<Components meals={meals} deleteMealHandler={deleteMealHandler}/>}
        </div>
    )
}
export default Main
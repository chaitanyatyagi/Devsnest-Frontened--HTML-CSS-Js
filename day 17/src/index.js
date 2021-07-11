import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
import FoodCard from './components/foodCard.jsx';

const App=()=>{
    return(
        <div className="container">
            <FoodCard foodName="Momos" cal="54"/>
            <FoodCard foodName="Chhole Bhature" cal="400"/>
            <FoodCard foodName="Vada Pav" cal="250"/>
            <FoodCard foodName="Pizza" cal="69"/>
            <FoodCard foodName="Burger" cal="100"/>
            <FoodCard foodName="Maggie" cal="123"/>
            <FoodCard foodName="Coke" cal="200"/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));
import React from 'react'
import './style.css'

const Components = ({ meals, deleteMealHandler }) => {
    return (
        <div>
            {
                meals.map((meal, index) => (
                    <div key={index} className="maingrid">
                    <div className='itemname'><strong>{meal.itemname}</strong></div>
                    <div className='calorieamount'>You have consumed {meal.calorieamount} calories.</div>
                    <button className='delete' onClick={()=>{deleteMealHandler(meal.id)}}>Delete</button>
                    <button className='edit' onClick>Edit</button>
                    </div>
                ))
            }

        </div>
          )
}

export default Components

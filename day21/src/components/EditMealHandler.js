import React from 'react'

function EditMealHandler() {
    return (
        <div>
            <div key={index} className="maingridtwo">
                <input type="text"/>
                <input type="number"/>
                <button className='delete'>Delete</button>
                <button className='edit'>Done</button>
            </div>
        </div>
    )
}

export default EditMealHandler

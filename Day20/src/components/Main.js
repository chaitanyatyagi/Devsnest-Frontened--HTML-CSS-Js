import React from 'react'
import "./Style.css"

function Main(props) {
    let indx=props.key1;
    return (
        <div className="Main">
            <div className="title">{props.title}</div>
            <div className="body"><p>you have consumed {props.calorie} cals today</p><button onClick={()=>props.func(indx)}>Delete</button></div>
        </div>
    )
}

export default Main

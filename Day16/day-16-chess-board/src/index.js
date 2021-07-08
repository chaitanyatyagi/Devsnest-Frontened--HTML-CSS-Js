import React from "react"
import ReactDOM from "react-dom"
import Board from "./chess"
import "./style.css"

const App=()=>{
    return(
        <div className="container">
        <Board/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"));
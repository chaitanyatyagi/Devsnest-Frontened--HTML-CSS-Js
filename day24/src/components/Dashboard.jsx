import React from 'react'
import AppContext from "./context/ContextCreate";
import { useContext } from "react";
import './Style.css'

function Dashboard() {
    const {login} = useContext(AppContext);
    return (
        <div>
            {
                login?<div className='home'><h1>Dashboard: Private Route</h1></div>:"GO AND LOGGED IN FIRST"
            }
        </div>
    )
}

export default Dashboard

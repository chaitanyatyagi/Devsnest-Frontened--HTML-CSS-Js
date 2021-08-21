import React from 'react'
import AppContext from "./context/ContextCreate";
import { useContext } from "react";
import './Style.css'

function About() {
    const {login} = useContext(AppContext);
    return (
        <div>
            {
                login?<div className='home'><h1>About: Public Route</h1></div>:'GO AND LOGGED IN FIRST'
            }
        </div>
    )
}
export default About

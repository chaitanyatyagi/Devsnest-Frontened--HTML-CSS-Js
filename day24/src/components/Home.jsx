import React from 'react'
import AppContext from "./context/ContextCreate";
import {useContext} from "react";
import './Style.css'

function Home() {
    const {login,setLogin} = useContext(AppContext);
    return (
        <div>
            <div className='home'><h1>Home</h1></div> 
            <div className='instruction'><h3>If not logged in cant access, Profile & Dashboard</h3></div>
            <br />
            <div className='btn'><button onClick={()=>setLogin(!login)}>{login?'LOGOUT':'LOGIN'}</button></div>
        </div>
    )
}

export default Home
import React from 'react'
import './Style.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from './Home';
  import Profile from './Profile'
  import About from './About'
  import Dashboard from './Dashboard'

function NavBar() {
    return (
        <Router>
            <div className='navbar'>
            <div className='items'><Link to='/' style={{ textDecoration: "none" }}>HOME</Link></div>
            <div className='items'><Link to='/About' style={{ textDecoration: "none" }}>ABOUT</Link></div>
            <div className='items'><Link to='/Profile' style={{ textDecoration: "none" }}>PROFILE</Link></div>
            <div className='items'><Link to='/Dashboard' style={{ textDecoration: "none" }}>DASHBOARD</Link></div>
            </div>
            <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/Profile">
                <Profile />
            </Route>
            <Route path="/Dashboard">
                <Dashboard />
            </Route>
            <Route path="/">
                <Home />
            </Route>
            </Switch>
        </Router>
        
    )
}

export default NavBar

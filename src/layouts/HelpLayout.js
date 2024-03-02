import { NavLink, Outlet } from "react-router-dom";
import React from 'react';
import Timer from '../pages/Timer'; // ACHTUNG
import { EtherSymbol } from "ethers";


export default function HelpLayout() {
  return (
    <div className="help-layout">

        <h2>Connect.</h2>
        <h2> Earn.</h2>
        <h2>Checkout</h2>

        <div className="timer">
         { <p><Timer /></p> }
       </div>
        
    
        <nav>
            <NavLink to="/timer"><button>Start Timer</button></NavLink>
            <NavLink to="/faq"><button>Stop</button></NavLink>
        </nav>


        <Outlet />
    </div>
  )
}
import { NavLink, Outlet } from "react-router-dom";
import React from 'react';
import Timer from '../pages/Timer'; // ACHTUNG
import { EtherSymbol } from "ethers";


export default function HelpLayout() {
  return (
    <div className="help-layout">
      <center>

        <h2>Connected ✅</h2>

        <div className="timer">
         { <p><h1><Timer /></h1></p> }
       </div>
        
    
        <nav>
            <NavLink to="/contact"><button>Stop</button></NavLink>
        </nav>

</center>
        <Outlet />
    </div>
  )
}
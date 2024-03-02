import React from 'react';
import { NavLink } from 'react-router-dom';
import { ethers } from 'ethers';
import Connect from './Connect';


export default function Home() {
    return (
        <div className="home">
            <p>
                <h1>HourPay. </h1>
                <h1>MANAGE AND PAY YOUR TEAM IN REAL TIME. </h1>
            </p>
            <p>
                <div className="home-container">
                <NavLink to="/contact" className="earn-button"><button>Register</button></NavLink>
                <br></br>
                <NavLink to="/services" className="earn-button"><button>Pick Job</button></NavLink>
                <br></br>
                <NavLink to="/connect" className="earn-button"><button>Connect</button></NavLink>
        </div>
            {/*
                <h1>CLICK THIS BUTTON</h1>
                 <br></br>
                <h1>CLOCK STARTS COUNTING</h1>
                <br></br>
                <h1>GET $ PER HOUR</h1>
                <br></br>
                <h1>CHECK OUT AGAIN</h1>
      */}
            </p>
        </div>
    )
}
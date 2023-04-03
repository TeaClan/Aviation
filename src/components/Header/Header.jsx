import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/imgs/logo.svg";
import "./header.scss";

function Header() {
  return (
    <div>
      <div className="headerContainer">
        <div className="navbar">
          <div className="navContainer">
            <div className="logo">
              <img src={Logo} alt="Logo" width={120} />
            </div>
            <div className="navLink">
              <ul>
                <li>
                  <NavLink to="/About_us">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/Services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/Pricing">Pricing</NavLink>
                </li>
                <li>
                  <NavLink to="/Contact_us">Contact us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="textGroup">
            <h1>Travel With Comfort Flights</h1>
            <h4>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,{" "}
              <br />
              consectetur, adipisci velit...
            </h4>
            <div className="buttonGroup">
              <button className="firstFlight">Dirst Flight</button>
              <button className="bookNow">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

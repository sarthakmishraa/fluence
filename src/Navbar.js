// Navbar.js

import React from "react";
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="NavbarLeft">
        <nav>
          <img className="NavbarLogo" src={logo} alt="Fluence logo"/>
          <Link to="/">Home</Link>
          <Link to="/visualisations">Visualisations</Link>
          <Link to="/methodology">Methodology</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>

      <div className="NavbarRight">
        <nav>
          <button>Log In</button>
          <button>Sign Up</button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
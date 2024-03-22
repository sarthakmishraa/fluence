// Navbar.js

import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="NavbarLeft">
        <div className='FooterName'>
          <h1 className='FooterNameP1'>flu</h1>
          <h1 className='FooterNameP2'>ence</h1>
        </div>
        <nav className="NavbarLeftItems">
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
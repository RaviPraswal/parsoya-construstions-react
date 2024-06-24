import React from 'react';
import logo from '../images/Parsoya_Constructions_logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='logo-container'>
        <img src={logo} alt="Parsoya Constructions logo" className="logo" />
      </div>
      <div className=''>
        <div className="navbar-container">
          <ul className="navbar-items">
            <li className="navbar-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                Services
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
  <div className="container">
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
import React from 'react';
import logo from '../images/Parsoya_Constructions_logo.png'

const LogoContainer = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Parsoya Constructions logo" className="logo" />
      <div className="title-container">
        <h1>Welcome to Our Construction Site</h1>
        <p>We specialize in providing high-quality construction services.</p>
      </div>
    </div>
  );
};

export default LogoContainer;
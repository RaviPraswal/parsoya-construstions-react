import React, { useEffect } from 'react';
import Logo_Title from "./logo_title_component";
import Navbar from "./navbar_component";
import * as THREE from 'three';
import LivingRoom from '../3D_Models/bathroom_interior.glb';
import  { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Header = () => {
  return (
    <header>
      <section className="header">
        <div className="header-container">
          <Navbar />
          {/* <Logo_Title /> */}
          {/* <canvas ref={canvasRef} /> */}
        </div>
      </section>
    </header>
  );
};

export default Header;
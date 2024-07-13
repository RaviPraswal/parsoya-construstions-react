import React, { useEffect } from 'react';
import Logo_Title from "./logo_title_component";
import Navbar from "./navbar_component";
import * as THREE from 'three';
import LivingRoom from '../3D_Models/bathroom_interior.glb';
import  { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Home = () => {
  return (
    <header>
      <section className="header">
        <div className="header-container">
          <Navbar />
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-8">
              <h1 class="mbr-section-title mbr-fonts-style mb-3 display-2"><strong>Building Dreams with Quality.</strong></h1>
              <p class="mbr-text mbr-fonts-style display-7 home-banner-text">At Parsoya Constructions, we specialize in building houses, offices, schools, and renovations. Our mission is to deliver top-notch construction services with a commitment to quality and client satisfaction.</p>
              <div className='banner-btns'>
                <button type="button" class="btn btn-light banner-btn">Our Services</button>
                <span></span>
                <button type="button" class="btn btn-light banner-btn" style={{marginLeft:'1rem'}}>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Home;
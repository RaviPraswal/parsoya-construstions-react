import React from 'react';
import Apartment from '../images/apartment.jpg';
import PalampurHotel from '../images/Palampur_Hotel.png';
import ModernResidentialVilla2 from '../images/modern-residential-villa2.jpeg';
// import OverlaySVG from '../images/instagram-home-page-interface-with-smartphone.svg';
import '../LandmarkProjects.css';

const LandmarkProjects = () => {
    
    

  return (
    <section className="container mt-5 ">
      <h2>Landmark Projects</h2>
      <div className="carousel-overlay">
        {/* <img src={OverlaySVG} alt="Overlay" className="overlay-svg" /> */}
        {/* <OverlaySVG width="100" height="100" /> */}
      </div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ModernResidentialVilla2} className="d-block w-100" alt="High-quality work" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Construction Project 1</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={PalampurHotel} className="d-block w-100" alt="High-quality work" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Construction Project 2</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Apartment} className="d-block w-100" alt="High-quality work" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Construction Project 3</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default LandmarkProjects;
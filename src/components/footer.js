import React from 'react';
import indiaMap from "../images/india-map.png"

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              Construction Company is a leading provider of construction services in India. With over a decade of experience, we have built a strong reputation for delivering high-quality projects on time and within budget.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Our Locations</h5>
            <div className="map-container">
              <img src={indiaMap} alt="India Map" className="map-image" />
              <div className="location-dot" style={{ left: '38%', top: '33%' }}></div>
              <div className="location-dot" style={{ left: '40%', top: '29%' }}></div>
              <div className="location-dot" style={{ left: '42%', top: '33%' }}></div>
              <div className="location-dot" style={{ left: '42%', top: '20%' }}></div>
              <div className="location-dot" style={{ left: '45%', top: '27%' }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        &copy; {new Date().getFullYear()} Construction Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

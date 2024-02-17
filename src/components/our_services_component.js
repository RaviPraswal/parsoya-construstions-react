import React from 'react';
import ResidentialConstruction from '../images/residential_construction_image.jpg'
import CommercialConstruction from '../images/commercial_construction_image.jpg'
import RenovationAndRemodeling from '../images/renovation_remodeling_image.jpg'

const OurServices = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We provide high-quality construction services for all your needs.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 position-relative">
            <img src={CommercialConstruction} className="card-img-top" alt="Residential Construction" />
            <div className="card-body overlay">
              <h5 className="card-title">Residential Construction</h5>
              <p className="card-text">
                Whether you're building your dream home or renovating an existing property, our team specializes in residential construction. From foundation to finishing touches, we handle every aspect of the project with precision and care.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 position-relative">
            <img src={ResidentialConstruction} className="card-img-top" alt="Commercial Construction" />
            <div className="card-body overlay">
              <h5 className="card-title">Commercial Construction</h5>
              <p className="card-text">
                Need a new office space or retail establishment? Our commercial construction services are tailored to meet the unique needs of businesses. We focus on functionality, aesthetics, and efficiency to create spaces that inspire productivity and growth.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 position-relative">
            <img src={RenovationAndRemodeling} className="card-img-top" alt="Renovation and Remodeling" />
            <div className="card-body overlay">
              <h5 className="card-title">Renovation and Remodeling</h5>
              <p className="card-text">
                Transform your space with our renovation and remodeling services. Whether it's updating an outdated kitchen, adding a new room, or giving your entire property a facelift, our team has the expertise to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

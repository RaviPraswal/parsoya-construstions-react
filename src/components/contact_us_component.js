import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as MobileIcon } from '../images/mobile-solid.svg';
import { ReactComponent as LocationIcon } from '../images/location-dot-solid.svg';
import { ReactComponent as EmailIcon } from '../images/envelope-solid.svg';
const ContactUs = () => {

  const mobileUnicode = '\uF3CE';

  return (

    <section id="contact">
       <div class="container py-4">
           <h3 class="text-center text-uppercase">contact us</h3>
           {/* <p class="text-center w-75 m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum purus at sem ornare sodales. Morbi leo nulla, pharetra vel felis nec, ullamcorper condimentum quam.</p> */}
           <div class="row">
             <div class="col-sm-12 col-md-6 col-lg-4 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                  <MobileIcon style={{ width: 50, height: 50, fill: 'midnightblue' }}/>
                  
                    <h4 class="text-uppercase mb-5">call us</h4>
                    <p>+91-9467650878, +91-9818565302</p>
                  </div>
                </div>
             </div>
             <div class="col-sm-12 col-md-6 col-lg-4 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                  <LocationIcon style={{ width: 50, height: 50, fill: 'midnightblue' }}/>
                    <h4 class="text-uppercase mb-5">office loaction</h4>
                    <address>J-208, Palam Vihar Ext. Gurgaon, Haryana, 122001</address>
                  </div>
                </div>
             </div>
             <div class="col-sm-12 col-md-6 col-lg-4 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                  <EmailIcon style={{ width: 50, height: 50, fill: 'midnightblue' }}/>
                    <h4 class="text-uppercase mb-5">email</h4>
                    <p><a href="mailto:ravipraswal@outlook.com">ravipraswal@outlook.com</a></p>
                  </div>
                </div>
             </div>
           </div>
       </div>
    </section>

    // <section className="container mt-5 contact-section ">
    //   <h2 className="contact-title">Contact Us</h2>
    //   <div className="row">
    //     <div className="col-md-8">
    //       <form>
    //         <div className="form-group">
    //           <label htmlFor="name">Name</label>
    //           <input type="text" className="form-control" id="name" placeholder="Enter your name" />
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="email">Email</label>
    //           <input type="email" className="form-control" id="email" placeholder="Enter your email" />
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="message">Message</label>
    //           <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
    //         </div>
    //         <button type="submit" className="btn btn-primary">Submit</button>
    //       </form>
    //     </div>
    //     <div className="col-md-4 contact-info">
    //       <h5>Our Location</h5>
    //       <p>Parsoya Constructions</p>
    //       <p>J-208, Palam Vihar Ext.,</p>
    //       <p>Gurgaon, Haryana, 122001</p>
    //       <p>Phone: 9467650878, 9818565302</p>
    //       <p>Email: <a href="mailto:ravipraswal@outlook.com">ravipraswal@outlook.com</a></p>
    //       <div id="map"></div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default ContactUs;

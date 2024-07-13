import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Home from "./components/header";
import LandmarkProjects from "./components/landmark_projects";
import Our_Services from "./components/our_services_component";
import Footer from "./components/footer";
import Testimonials from "./components/testimonial";
import ContactUs from "./components/contact_us_component";
import AboutUs from "./components/about_us";
import AboutUs2 from "./components/about_us2";
import OurServices from "./components/our_services2";
import PlayerComponent from "./components/video_player";
import PalampurHotel from './images/Palampur_Hotel.png';
import bg_img2 from './images/bg_2.jpg.webp';

const videoSource = require('./images/construction-site-view.mp4').default; // Replace with your actual video URL
const HomePage = () => {
  return (
    <div>
      <section className="gradient-bg text-center background-image">
        <div className="mbr-overlay">
          <div class="container">
            <Home/>
          </div>
        </div>
      </section>
      <div class="header-banner-text">
        <p class="mbr-text mbr-fonts-style display-7">At Parsoya Constructions, we specialize in building houses, offices, schools, and renovations. Our mission is to deliver top-notch construction services with a commitment to quality and client satisfaction.</p>
          <div classname="banner-btns">
            <button type="button" class="btn btn-light banner-btn">Our Services</button>
            <span></span>
            <button type="button" class="btn btn-light banner-btn" style={{marginLeft:'1rem'}}>Contact Us</button>
          </div>
      </div>
      <main>
        {/* <section id="services" className="services py-5">
          <div className="container">
            <Our_Services />
          </div>
        </section> */}

        {/* <section id="services" className="services">
          <div className="container">
            <AboutUs />
          </div>
        </section> */}

        <section id="services" className="services">
          <div className="container">
            <AboutUs2 />
          </div>
        </section>

        <section id="services" className="services">
            <OurServices />
        </section>

        
        <section id="services" className="services">
            <PlayerComponent />
        </section>

        {/* <Testimonials /> */}
        {/* <LandmarkProjects /> */}
          <ContactUs />
       
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

import React from 'react';
import '../AboutUs.css'; // Make sure to adjust the CSS file path
import MultiStory from '../images/MultiStory.jpeg'
import Villa from '../images/Villa.jpeg'
import Residencial from '../images/Sector-23_ResidencialHouse.jpeg'

function AboutUs() {
  return (
    <div className="about-section">
      <h1>ABOUT US</h1>
      <div className="content-section">
        <div className="text-section">
          <h2>Company History</h2>
          <p>Since our founding in 1984, we've been dedicated to transforming spaces through innovative design.</p>
        </div>
        <div className="philosophy-section">
          <h2>Vision and Mission</h2>
          <p>Delivering sustainable construction with care. We prioritize quality and eco-friendly practices, ensuring beautiful, responsible spaces.</p>
        </div>
      </div>
      <div className="image-section">
        <img src={MultiStory} alt="Modern Living Room" />
        <img src={Villa} alt="" />
        <img src={Residencial} alt="" />
      </div>
      <div className="leadership-section">
        <h2>Founder</h2>
        <p>Our founder, is a visionary leader with a passion for innovative construction and a commitment to excellence.</p>
        <ul>
          <li style={{ fontVariant: 'petite-caps', fontSize: 'xx-large' }}>Kalyan Singh</li>
          <li>FOUNDER AND PRINCPAL</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;

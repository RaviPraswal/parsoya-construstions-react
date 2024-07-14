// ConstructionPage.js (React component)
import React from 'react';
import '../ConstructionPage.css'; // Import your CSS file
import PalampurHotel from '../images/portrait-engineers-job-site-work-hours.jpg';

const ConstructionPage = () => {
  return (
    <div className="construction-container">
      <div className="title-content">
        <h1>Crafting Dreams into Reality</h1>
        <p>
          At Parsoya Constructions, we don't just build structures; we sculpt dreams into tangible forms. Our passion for construction goes beyond bricks and mortar. With a team of visionary architects and skilled craftsmen, we turn blueprints into breathtaking realities that defy expectations. Join us on a journey where imagination meets craftsmanship, and every project is a masterpiece in the making.
        </p>
      </div>
      <div className="image-content">
        <img src={PalampurHotel} alt="PalampurHotel"/>
      </div>
    </div>
  );
};

export default ConstructionPage;

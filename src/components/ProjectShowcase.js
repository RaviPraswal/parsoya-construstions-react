import React from 'react';
import '../ProjectShowcase.css';
import Image1 from '../images/Corporate Office.jpg'
import Image2 from '../images/renovation_remodeling_image.jpg'
import Image3 from '../images/Residential Resort.jpg'

const ProjectShowcase = () => {
  const projects = [
    { id: 1, src: Image1, alt: 'Project 1' },
    { id: 2, src: Image2, alt: 'Project 2' },
    { id: 3, src: Image3, alt: 'Project 3' }
  ];

  return (
    <div className="project-showcase-container">
      <h2 className="text-center text-uppercase">Our Projects Showcase</h2>
      <p className="text-center">Explore our diverse range of completed construction projects.</p>
      <div className="project-images">
        {projects.map(project => (
          <div key={project.id} className="project-image">
            <img src={project.src} alt={project.alt} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;

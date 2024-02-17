import React from 'react';

const ToolsContainer = () => {
  return (
    <div className="tools-container">
      <div class="tools-container">
            <div class="tool-item">
                <img src="/static/media/hammer.svg" alt="hammer" class="tool-icon"/>
                <h3>Construction Tools</h3>
                <p>We have a wide range of construction tools to ensure the best results.</p>
            </div>
            <div class="tool-item">
                <img src="/static/media/wrench.svg" alt="wrench" class="tool-icon"/>
                <h3>Handyman Services</h3>
                <p>Our handyman services include plumbing, electrical, and general maintenance.</p>
            </div>
            <div class="tool-item">
                <img src="/static/media/crane.svg" alt="crane" class="tool-icon"/>
                <h3>Heavy Equipment</h3>
                <p>We have access to heavy equipment for large-scale projects.</p>
            </div>
        </div>
    </div>
  );
};

export default ToolsContainer;
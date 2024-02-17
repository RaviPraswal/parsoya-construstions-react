import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-5 ">
      <div className="container">
        <h2 className="text-center mb-5">Testimonials</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card testimonial-card">
              <div className="card-body">
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                <p className="testimonial-author">- John Doe</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card testimonial-card">
              <div className="card-body">
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                <p className="testimonial-author">- Jane Smith</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card testimonial-card">
              <div className="card-body">
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                <p className="testimonial-author">- Michael Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

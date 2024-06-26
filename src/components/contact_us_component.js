import React from 'react';

const ContactUs = () => {
  return (
    <section className="container mt-5 contact-section ">
      <h2 className="contact-title">Contact Us</h2>
      <div className="row">
        <div className="col-md-8">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-4 contact-info">
          <h5>Our Location</h5>
          <p>Parsoya Constructions</p>
          <p>J-208, Palam Vihar Ext.,</p>
          <p>Gurgaon, Haryana, 122001</p>
          <p>Phone: 9467650878, 9818565302</p>
          <p>Email: <a href="mailto:ravipraswal@outlook.com">ravipraswal@outlook.com</a></p>
          <div id="map"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

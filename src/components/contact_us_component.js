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
          <p>Construction Company</p>
          <p>1234 Main St.</p>
          <p>City, State Zip</p>
          <p>Phone: 555-555-5555</p>
          <p>Email: <a href="mailto:info@constructioncompany.com">info@constructioncompany.com</a></p>
          <div id="map"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

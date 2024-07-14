// src/components/Testimonials.js
import React from 'react';
import '../Testimonials2.css'; // Your CSS file
import { Carousel } from 'react-bootstrap';

import Image1 from '../images/Palampur_Hotel.png'; // Replace with actual image paths
import Image2 from '../images/Palampur_Hotel.png'; // Replace with actual image paths

const testimonials = [
    {
        image: Image1,
        name: 'Williamson',
        role: 'Web Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem. Est, exercitationem id ipsa ipsum laboriosam perferendis temporibus!'
    },
    {
        image: Image2,
        name: 'Kristiana',
        role: 'Web Designer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem. Est, exercitationem id ipsa ipsum laboriosam perferendis temporibus!'
    }
];

const Testimonials = () => {
    return (
        <div className="demo">
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-12">
                        <span className="top-icon"><i className="fa fa-quote-left"></i></span>
                        <Carousel>
                            {testimonials.map((testimonial, index) => (
                                <Carousel.Item key={index}>
                                    <div className="testimonial">
                                        <div className="pic">
                                            <img src={testimonial.image} alt={testimonial.name} />
                                        </div>
                                        <div className="testimonial-content">
                                            <h3 className="testimonial-title">{testimonial.name} - {testimonial.role}</h3>
                                            <p className="description">
                                                {testimonial.description}
                                            </p>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <span className="bottom-icon"><i className="fa fa-quote-right"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

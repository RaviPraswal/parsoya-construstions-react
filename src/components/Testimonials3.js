import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Testimonial3.css';

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <section className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-none d-lg-block">
                        <ol className="carousel-indicators tabs">
                            <li onClick={() => handleSelect(0)} className={activeIndex === 0 ? 'active' : ''}>
                                <figure>
                                    <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png" className="img-fluid" alt=""/>
                                </figure>
                            </li>
                            <li onClick={() => handleSelect(1)} className={activeIndex === 1 ? 'active' : ''}>
                                <figure>
                                    <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png" className="img-fluid" alt=""/>
                                </figure>
                            </li>
                            <li onClick={() => handleSelect(2)} className={activeIndex === 2 ? 'active' : ''}>
                                <figure>
                                    <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png" className="img-fluid" alt=""/>
                                </figure>
                            </li>
                        </ol>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={null}>
                            <Carousel.Item>
                                <div className="quote-wrapper">
                                    <p>I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!</p>
                                    <h3>peter lee</h3>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="quote-wrapper">
                                    <p>I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!</p>
                                    <h3>peter lee</h3>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="quote-wrapper">
                                    <p>I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!</p>
                                    <h3>peter lee</h3>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                        <ol className="carousel-indicators indicators">
                            <li onClick={() => handleSelect(0)} className={activeIndex === 0 ? 'active' : ''}></li>
                            <li onClick={() => handleSelect(1)} className={activeIndex === 1 ? 'active' : ''}></li>
                            <li onClick={() => handleSelect(2)} className={activeIndex === 2 ? 'active' : ''}></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;

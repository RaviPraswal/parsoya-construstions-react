// CarouselComponent.jsx
import React, { useState, useEffect } from 'react';
// import React from 'react';
import Slider from 'react-slick';
import '../OurServices2.css';
import { Carousel } from 'react-bootstrap';
import Drawing from '../images/Drawing.jpg'
import CommercialConstruction from '../images/Corporate Office.jpg'
import RenovationAndRemodeling from '../images/renovation_remodeling_image.jpg'
import ResidentialResort from '../images/Residential Resort.jpg'

const Counters = () => {
    const [counters, setCounters] = useState([
        { id: 'happy-clients', value: 0, target: 1000, label: 'Happy Clients' },
        { id: 'successful-projects', value: 0, target: 500, label: 'Successful Projects' },
        { id: 'customer-satisfaction', value: 0, target: 99, label: 'Customer Satisfaction' }
    ]);

    // Function to start counting animation
    const startCounter = (index, increment) => {
        let current = 0;
        const interval = setInterval(() => {
            setCounters(prevCounters => {
                const updatedCounters = [...prevCounters];
                updatedCounters[index].value = current;
                return updatedCounters;
            });
            current += increment;
            if (current >= counters[index].target) {
                setCounters(prevCounters => {
                    const updatedCounters = [...prevCounters];
                    updatedCounters[index].value = counters[index].target;
                    return updatedCounters;
                });
                clearInterval(interval);
            }
        }, 50); // Adjust interval speed as needed
    };

    // Function to check if counters section is in view
    const checkVisibilityAndStartCounters = () => {
        const countersSection = document.querySelector('.counters');
        const isVisible = () => {
            const rect = countersSection.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        // Start counters if section is visible
        if (isVisible()) {
            counters.forEach((counter, index) => {
                startCounter(index, Math.ceil(counter.target / 100)); // Increment speed
            });
        }
    };

    // useEffect to start counters on component mount and when counters section comes into view
    useEffect(() => {
        checkVisibilityAndStartCounters();
        window.addEventListener('scroll', checkVisibilityAndStartCounters);
        return () => {
            window.removeEventListener('scroll', checkVisibilityAndStartCounters);
        };
    }, []); // Empty dependency array to run effect only once on mount

    return (
        <div className="counters">
            <div className="row counter-items">
                {counters.map(counter => (
                    <div key={counter.id} className="col-3">
                        <h1>{counter.id === 'customer-satisfaction' ? `${counter.value}%` : `${counter.value}+`}</h1>
                        <p>{counter.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


const OurServices = () => {
  
    // Data for carousel items
    const carouselItems = [
        {
            image: Drawing,
            title: 'Our Comprehensive Construction Services',
            text: 'At Parsaya Constructions, we specialize in building houses, offices, schools, and renovations. Our commitment to quality and client satisfaction sets us apart.'
        },
        {
            image: CommercialConstruction,
            title: 'Commercial Construction',
            text: `Need a new office space or retail establishment? Our commercial construction services are tailored to meet the unique needs of businesses. We focus on functionality, aesthetics, and efficiency to create spaces that inspire productivity and growth.`
        },
        {
            image: RenovationAndRemodeling,
            title: 'Renovation and Remodeling',
            text: `Transform your space with our renovation and remodeling services. Whether it's updating an outdated kitchen, adding a new room, or giving your entire property a facelift, our team has the expertise to bring your vision to life.`
        },
        {
            image: ResidentialResort,
            title: 'Residential Construction',
            text: `Whether you're building your dream home or renovating an existing property, our team specializes in residential construction. From foundation to finishing touches, we handle every aspect of the project with precision and care.`
        }
    ];

    return (
        <div className="carousel-container">
            <h2 className="text-center text-uppercase">Our Construction Services</h2>
            <div className="d-relative">
                <Carousel>
                    {carouselItems.map((item, index) => (
                        <Carousel.Item key={index}>
                            <div className="row">
                                <div className="col-12 px-0">
                                    <div className="carousel-images">
                                        <div
                                            className="carousel-image"
                                            style={{
                                                backgroundImage: 'linear-gradient(40deg, #000000 0%, #ffffff 74%)',
                                            }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="img-fluid"
                                            />
                                            <div className="carousel-overlay">
                                                <div className="carousel-content">
                                                    <h1 className="mb-3">{item.title}</h1>
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
                
                <Counters/>

                {/* <div className="counters">
                    <div className="row counter-items">
                        <div className="col-3">
                            <h1>1000+</h1>
                            <p>Happy Clients</p>
                        </div>
                        <div className="col-3">
                            <h1>500+</h1>
                            <p>Successful Projects</p>
                        </div>
                        <div className="col-3">
                            <h1>99%</h1>
                            <p>Customer Satisfaction</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
    

};

export default OurServices;

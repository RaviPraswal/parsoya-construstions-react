import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Header from "./components/header";
import LandmarkProjects from "./components/landmark_projects";
import Our_Services from "./components/our_services_component";
import Footer from "./components/footer";
import Testimonials from "./components/testimonial";
import ContactUs from "./components/contact_us_component";
import AboutUs from "./components/about_us";
import PalampurHotel from './images/Palampur_Hotel.png';
import bg_img2 from './images/bg_2.jpg.webp';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial animation values
      animate={{ opacity: 1, y: 0 }} // Animation values to animate to
      exit={{ opacity: 0, y: -50 }} // Animation values when exiting the page
      transition={{ duration: 0.5 }} // Animation duration
      className="homepage"
    >
      <section className="gradient-bg text-center background-image" style={{backgroundimage: `url(${PalampurHotel})`, backgroundposition: `50% 0%`}}>
      <div className="mbr-overlay" style={{backgroundColor: "rgba(255, 193, 0, 0.3)"}}>
  <div class="container">

        <Header/>

          <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-8">
                    <h1 class="mbr-section-title mbr-fonts-style mb-3 display-2"><strong>PARSOYA CONSTRUCTIONS.</strong></h1>
                    
                    <p class="mbr-text mbr-fonts-style display-7">We provide high-quality construction services for all your needs.</p>
                    {/* <div class="mbr-section-btn mt-3"><a class="btn btn-lg btn-secondary display-4" href="https://mobiri.se">About Me</a> <a class="btn btn-lg btn-info display-4" href="https://mobiri.se">Read My Blog</a></div> */}
                </div>
            </div>
          </div>
        </div>

        </div>

      </section>
      <main>
        <section id="services" className="services py-5">
          <div className="container">
            <Our_Services />
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <AboutUs />
          </div>
        </section>

        {/* My Cards Dark */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="dark"
        >
          
        </motion.section>
        {/* My Cards Dark */}
        <Testimonials />
        <LandmarkProjects />
        {/*  */}

        {/*  */}

        {/* My Cards Light */}
        {/* <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="light"
        >
          <section class="light">
            <div class="container py-2">
              <div class="h1 text-center text-dark" id="pageHeaderTitle">
                My Cards Light
              </div>

              <article class="postcard light blue">
                <a class="postcard__img_link" href="#">
                  <img
                    class="postcard__img"
                    src="https://picsum.photos/1000/1000"
                    alt="Image Title"
                  />
                </a>
                <div class="postcard__text t-dark">
                  <h1 class="postcard__title blue">
                    <a href="#">Podcast Title</a>
                  </h1>
                  <div class="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                    </time>
                  </div>
                  <div class="postcard__bar"></div>
                  <div class="postcard__preview-txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, fugiat asperiores inventore beatae accusamus odit
                    minima enim, commodi quia, doloribus eius! Ducimus nemo
                    accusantium maiores velit corrupti tempora reiciendis
                    molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                    quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                    quidem excepturi, illum quos!
                  </div>
                  <ul class="postcard__tagbox">
                    <li class="tag__item">
                      <i class="fas fa-tag mr-2"></i>Podcast
                    </li>
                    <li class="tag__item">
                      <i class="fas fa-clock mr-2"></i>55 mins.
                    </li>
                    <li class="tag__item play blue">
                      <a href="#">
                        <i class="fas fa-play mr-2"></i>Play Episode
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
              <article class="postcard light red">
                <a class="postcard__img_link" href="#">
                  <img
                    class="postcard__img"
                    src="https://picsum.photos/501/500"
                    alt="Image Title"
                  />
                </a>
                <div class="postcard__text t-dark">
                  <h1 class="postcard__title red">
                    <a href="#">Podcast Title</a>
                  </h1>
                  <div class="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                    </time>
                  </div>
                  <div class="postcard__bar"></div>
                  <div class="postcard__preview-txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, fugiat asperiores inventore beatae accusamus odit
                    minima enim, commodi quia, doloribus eius! Ducimus nemo
                    accusantium maiores velit corrupti tempora reiciendis
                    molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                    quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                    quidem excepturi, illum quos!
                  </div>
                  <ul class="postcard__tagbox">
                    <li class="tag__item">
                      <i class="fas fa-tag mr-2"></i>Podcast
                    </li>
                    <li class="tag__item">
                      <i class="fas fa-clock mr-2"></i>55 mins.
                    </li>
                    <li class="tag__item play red">
                      <a href="#">
                        <i class="fas fa-play mr-2"></i>Play Episode
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
              <article class="postcard light green">
                <a class="postcard__img_link" href="#">
                  <img
                    class="postcard__img"
                    src="https://picsum.photos/500/501"
                    alt="Image Title"
                  />
                </a>
                <div class="postcard__text t-dark">
                  <h1 class="postcard__title green">
                    <a href="#">Podcast Title</a>
                  </h1>
                  <div class="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                    </time>
                  </div>
                  <div class="postcard__bar"></div>
                  <div class="postcard__preview-txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, fugiat asperiores inventore beatae accusamus odit
                    minima enim, commodi quia, doloribus eius! Ducimus nemo
                    accusantium maiores velit corrupti tempora reiciendis
                    molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                    quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                    quidem excepturi, illum quos!
                  </div>
                  <ul class="postcard__tagbox">
                    <li class="tag__item">
                      <i class="fas fa-tag mr-2"></i>Podcast
                    </li>
                    <li class="tag__item">
                      <i class="fas fa-clock mr-2"></i>55 mins.
                    </li>
                    <li class="tag__item play green">
                      <a href="#">
                        <i class="fas fa-play mr-2"></i>Play Episode
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
              <article class="postcard light yellow">
                <a class="postcard__img_link" href="#">
                  <img
                    class="postcard__img"
                    src="https://picsum.photos/501/501"
                    alt="Image Title"
                  />
                </a>
                <div class="postcard__text t-dark">
                  <h1 class="postcard__title yellow">
                    <a href="#">Podcast Title</a>
                  </h1>
                  <div class="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                    </time>
                  </div>
                  <div class="postcard__bar"></div>
                  <div class="postcard__preview-txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, fugiat asperiores inventore beatae accusamus odit
                    minima enim, commodi quia, doloribus eius! Ducimus nemo
                    accusantium maiores velit corrupti tempora reiciendis
                    molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                    quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                    quidem excepturi, illum quos!
                  </div>
                  <ul class="postcard__tagbox">
                    <li class="tag__item">
                      <i class="fas fa-tag mr-2"></i>Podcast
                    </li>
                    <li class="tag__item">
                      <i class="fas fa-clock mr-2"></i>55 mins.
                    </li>
                    <li class="tag__item play yellow">
                      <a href="#">
                        <i class="fas fa-play mr-2"></i>Play Episode
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </section>
        </motion.section> */}
        {/* My Cards Light */}
        {/* <section className="gradient-bg container bg-img2" style={{backgroundimage: `url(${bg_img2})`, backgroundposition: `50% 0%`}}> */}
          <ContactUs />
        {/* </section> */}
      </main>
      <Footer />
    </motion.div>
  );
};

export default HomePage;

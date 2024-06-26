import React from 'react';
import "../Testimonials.css";


const Testimonials = () => {
  return (

    <section class="dark">
            <div class="container py-4">
              <h1 class="h1 text-center" id="pageHeaderTitle">
                Testimonials
              </h1>

              <article class="postcard dark blue">
                <a class="postcard__img_link" href="#">
                  <img
                    class="postcard__img"
                    src="https://picsum.photos/1000/1000"
                    alt="Image Title"
                  />
                </a>
                <div class="postcard__text">
                  <h1 class="postcard__title blue">
                    <a href="#">SK Jain</a>
                  </h1>
                  {/* <div class="postcard__subtitle small">
                    {/* <time datetime="2020-05-25 12:00:00">
                      <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                    </time> 
                  </div> */}
                  <div class="postcard__bar"></div>
                  <div class="postcard__preview-txt">
                    Amazing service! They exceeded my expectations and delivered results beyond belief. From the initial consultation to the final deliverable, every step was handled with precision and expertise. Their proactive approach and attention to detail made a significant impact on our project’s success. I look forward to working with them again in the future.
                  </div>
                  {/* <ul class="postcard__tagbox">
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
                  </ul> */}
                </div>
              </article>
              <article class="postcard dark red">
                <a class="postcard__img_link" href="#">
                  <img
                    class="postcard__img"
                    src="https://picsum.photos/501/500"
                    alt="Image Title"
                  />
                </a>
                <div class="postcard__text">
                  <h1 class="postcard__title red">
                    <a href="#">Ramesh Ahuja</a>
                  </h1>
                  {/* <div class="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                    </time>
                  </div> */}
                  <div class="postcard__bar"></div>
                  <div class="postcard__preview-txt">
                    I highly recommend Parsoya Constructions. They are reliable, responsive, and truly care about their clients. From the outset, they listened attentively to our concerns and objectives, tailoring their approach accordingly. Their transparent communication and proactive problem-solving ensured a smooth and successful collaboration. They are committed to delivering value and building long-term relationships.
                  </div>
                  {/* <ul class="postcard__tagbox">
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
                  </ul> */}
                </div>
              </article>
              <article class="postcard dark green">
                <a class="postcard__img_link" href="#">
                  <img
                    class="postcard__img"
                    src="https://picsum.photos/500/501"
                    alt="Image Title"
                  />
                </a>
                <div class="postcard__text">
                  <h1 class="postcard__title green">
                    <a href="#">Varun Batra</a>
                  </h1>
                  {/* <div class="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                    </time>
                  </div> */}
                  <div class="postcard__bar"></div>
                  <div class="postcard__preview-txt">
                    I wouldn't hesitate to recommend Parsoya Constructions to anyone looking for top-notch service. Their professionalism and integrity shine through in everything they do. They are responsive, reliable, and always willing to go the extra mile. Working with them has been a pleasure, and I have full confidence in their ability to deliver outstanding results.
                  </div>
                  {/* <ul class="postcard__tagbox">
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
                  </ul> */}
                </div>
              </article>
              <article class="postcard dark yellow">
                <a class="postcard__img_link" href="#">
                  <img
                    class="postcard__img"
                    src="https://picsum.photos/501/501"
                    alt="Image Title"
                  />
                </a>
                <div class="postcard__text">
                  <h1 class="postcard__title yellow">
                    <a href="#">Rajeev Kumar</a>
                  </h1>
                  {/* <div class="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                    </time>
                  </div> */}
                  <div class="postcard__bar"></div>
                  <div class="postcard__preview-txt">
                    Choosing Parsoya Constructions was one of the best decisions we've made. They are simply the best. Their exceptional service and unwavering dedication were evident from day one. They took the time to understand our unique challenges and goals, providing tailored solutions that drove tangible results. Working with them has been a rewarding experience, and I wouldn’t hesitate to recommend them.
                  </div>
                  {/* <ul class="postcard__tagbox">
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
                  </ul> */}
                </div>
              </article>
            </div>
          </section>

    // <section className="py-5 ">
    //   <div className="container">
    //     <h2 className="text-center mb-5">Testimonials</h2>
    //     <div className="row">
    //       <div className="col-md-4">
    //         <div className="card testimonial-card">
    //           <div className="card-body">
    //             <p className="testimonial-text">
    //               Amazing service! They exceeded my expectations and delivered results beyond belief. From the initial consultation to the final deliverable, every step was handled with precision and expertise. Their proactive approach and attention to detail made a significant impact on our project’s success. I look forward to working with them again in the future.
    //             </p>
    //             <p className="testimonial-author">- SK Jain</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-4">
    //         <div className="card testimonial-card">
    //           <div className="card-body">
    //             <p className="testimonial-text">
    //               I highly recommend [Company Name]. They are reliable, responsive, and truly care about their clients. From the outset, they listened attentively to our concerns and objectives, tailoring their approach accordingly. Their transparent communication and proactive problem-solving ensured a smooth and successful collaboration. They are committed to delivering value and building long-term relationships.
    //             </p>
    //             <p className="testimonial-author">- Ramesh Ahuja</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-4">
    //         <div className="card testimonial-card">
    //           <div className="card-body">
    //             <p className="testimonial-text">
    //             I wouldn't hesitate to recommend [Company Name] to anyone looking for top-notch service. Their professionalism and integrity shine through in everything they do. They are responsive, reliable, and always willing to go the extra mile. Working with them has been a pleasure, and I have full confidence in their ability to deliver outstanding results.
    //             </p>
    //             <p className="testimonial-author">- Varun Batra</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-4">
    //         <div className="card testimonial-card">
    //           <div className="card-body">
    //             <p className="testimonial-text">
    //               Choosing Parsoya Constructions was one of the best decisions we've made. They are simply the best. Their exceptional service and unwavering dedication were evident from day one. They took the time to understand our unique challenges and goals, providing tailored solutions that drove tangible results. Working with them has been a rewarding experience, and I wouldn’t hesitate to recommend them.
    //             </p>
    //             <p className="testimonial-author">- Rajeev Kumar</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Testimonials;

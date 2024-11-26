import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

export default class Testimonials extends Component {
  
  testimonials = [
    {
      name: "Shirley Fultz",
      role: "Designer",
      image: "https://t4.ftcdn.net/jpg/03/83/25/83/240_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg", // Replace with actual image URL
      testimonial: "It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site."
    },
    {
      name: "Daniel Keystone",
      role: "Designer",
      image: "https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg", // Replace with actual image URL
      testimonial: "The simple and intuitive design makes it easy for me to use. I highly recommend Fetch to my peers."
    },
    {
      name: "Theo Sorel",
      role: "Designer",
      image: "https://t3.ftcdn.net/jpg/02/99/04/20/240_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg", // Replace with actual image URL
      testimonial: "I enjoy catching up with Fetch on my laptop, or on my phone when I'm on the go!"
    }
  ];

  
  componentDidMount() {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }

  render() {
    return (
      <section className="py-20 bg-gray-100 " id="testimonials">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800" data-aos="fade-up">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto px-4" data-aos="fade-up" data-aos-delay="200">
            Hear from our clients about how we have helped them achieve their goals with our services.
          </p>
        </div>

        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5100}
          className="max-w-screen-lg mx-auto px-6"
        >
          {this.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={index * 200} 
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-44 w-44 rounded-full mb-4 object-contain border-4 border-gray-200"
                data-aos="zoom-in" 
                data-aos-duration="500"
              />
              <div className="myCarousel">
                <h3 className="text-2xl font-semibold text-gray-800">{testimonial.name}</h3>
                <h4 className="text-xl font-medium text-gray-600 mb-4">{testimonial.role}</h4>
                <p className="text-lg text-gray-600">{testimonial.testimonial}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    );
  }
}

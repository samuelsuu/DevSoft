import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

function About() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for smooth animation
      once: true, // Animation will happen only once
    });
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-100" id="about">
     
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-semibold text-gray-800">About DevSoft</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          At DevSoft, we are passionate about helping businesses grow through custom software development, training, consulting, and hardware solutions.
        </p>
      </div>

      
      <div className="max-w-screen-lg mx-auto px-6 md:flex items-center justify-between">
        
        <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h3>
          <p className="text-lg text-gray-600 mb-6">
            DevSoft is a cutting-edge software development company focused on delivering high-quality, scalable, and robust solutions. We work with businesses of all sizes, helping them innovate and succeed in the digital era.
          </p>
          <h4 className="text-2xl font-medium text-gray-700 mb-2">Our Mission</h4>
          <p className="text-lg text-gray-600">
            Our mission is to empower businesses with the latest technology solutions and training, enabling them to reach their full potential and stay ahead in a competitive market.
          </p>
        </div>

        
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl" data-aos="fade-left">
          <img
            src="https://cdn.businessday.ng/2019/11/Technology-industry.jpg" // Replace with your actual image URL
            alt="DevSoft Team"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

     
      <div className="mt-12 text-center" data-aos="fade-up">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We envision a future where businesses leverage the power of technology to drive innovation, improve efficiency, and create positive change across industries. Our goal is to be the leading partner in technology solutions.
        </p>
      </div>
    </section>
  );
}

export default About;

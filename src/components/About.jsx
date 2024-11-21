import React from 'react';

function About() {
  return (
    <section className="py-16 bg-gray-100" id="about">
      {/* About Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800">About DevSoft</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          At DevSoft, we are passionate about helping businesses grow through custom software development, training, consulting, and hardware solutions.
        </p>
      </div>

      {/* Image and Text Section */}
      <div className="max-w-screen-lg mx-auto px-6 md:flex items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h3>
          <p className="text-lg text-gray-600 mb-6">
            DevSoft is a cutting-edge software development company focused on delivering high-quality, scalable, and robust solutions. We work with businesses of all sizes, helping them innovate and succeed in the digital era.
          </p>
          <h4 className="text-2xl font-medium text-gray-700 mb-2">Our Mission</h4>
          <p className="text-lg text-gray-600">
            Our mission is to empower businesses with the latest technology solutions and training, enabling them to reach their full potential and stay ahead in a competitive market.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://cdn.businessday.ng/2019/11/Technology-industry.jpg" // Replace with your actual image URL
            alt="DevSoft Team"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="mt-12 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We envision a future where businesses leverage the power of technology to drive innovation, improve efficiency, and create positive change across industries. Our goal is to be the leading partner in technology solutions.
        </p>
      </div>
    </section>
  );
}

export default About;

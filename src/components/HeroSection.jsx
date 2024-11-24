import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

function HeroSection() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for smooth animation
      once: true, // Animation will happen only once
    });
  }, []);

  return (
    <section 
      className="relative bg-cover bg-center text-white text-center min-h-screen flex items-center justify-center" 
      style={{ backgroundImage: "url('https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65dd33d49a346d9be0b075ea_65dd12fa299e167d189f00f7-fed9c2116dfcf56370cea3063f4e88fa.jpeg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 text-center">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-shadow-md"
          data-aos="fade-up" // Add AOS animation to the heading
        >
          Welcome to DevSoft
        </h2>
        <p
          className="text-lg sm:text-xl mb-8 font-semibold leading-relaxed text-shadow-md"
          data-aos="fade-up" // Add AOS animation to the paragraph
          data-aos-delay="200" // Add a delay to make the paragraph fade in slightly after the heading
        >
          Your trusted partner in software development, training, and more. Let's build the future together.
        </p>
        <button
          className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-400 transition duration-300 shadow-lg"
          data-aos="zoom-in" // Add AOS zoom-in animation to the button
          data-aos-delay="400" // Add a delay for the button to appear after the text
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default HeroSection;

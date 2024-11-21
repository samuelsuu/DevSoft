import React from 'react';

function HeroSection() {
  return (
    <section 
      className="relative bg-cover bg-center text-white text-center min-h-screen flex items-center justify-center" 
      style={{ backgroundImage: "url('https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65dd33d49a346d9be0b075ea_65dd12fa299e167d189f00f7-fed9c2116dfcf56370cea3063f4e88fa.jpeg')" }} // Replace with your actual image URL
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-shadow-md">
          Welcome to DevSoft
        </h2>
        <p className="text-lg sm:text-xl mb-8 font-semibold leading-relaxed text-shadow-md">
          Your trusted partner in software development, training, and more. Let's build the future together.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-400 transition duration-300 shadow-lg">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default HeroSection;

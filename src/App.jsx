import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Suspense fallback={<div>Loading...</div>}>
        <TestimonialsCarousel />
      </Suspense>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

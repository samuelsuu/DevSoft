import React, { useState, useEffect } from 'react';
import { handleFormSubmission } from '../api/formHandler';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await handleFormSubmission(formData); 
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-20" id="contact">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8" data-aos="fade-up">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="200">
          We'd love to hear from you! Please fill out the form below to contact us.
        </p>
        <form
          className="bg-white p-8 shadow-lg rounded-lg"
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.name}
              onChange={handleChange}
              required
              data-aos="zoom-in"
              data-aos-duration="500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.email}
              onChange={handleChange}
              required
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="200"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formData.message}
              onChange={handleChange}
              required
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="400"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 rounded-md font-semibold text-white transition duration-300 ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'
            }`}
            disabled={isSubmitting}
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="500"
          >
            {isSubmitting ? 'Submitting...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
        {isSubmitted && (
          <p className="text-center text-green-500 mt-4" data-aos="fade-up" data-aos-duration="500">
            Thank you for your message!
          </p>
        )}
      </div>
    </section>
  );
}

export default ContactForm;

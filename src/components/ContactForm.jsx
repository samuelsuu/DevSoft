import React, { useState } from 'react';
import { handleFormSubmission } from '../api/formHandler';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await handleFormSubmission(formData); // Assuming this function is asynchronous
      setIsSubmitted(true); // Set form as submitted
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16" id="contact">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-6">We'd love to hear from you! Please fill out the form below to contact us.</p>
        <form className="bg-white p-8 shadow-lg rounded-lg" onSubmit={handleSubmit}>
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
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 rounded-md font-semibold text-white transition duration-300 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
        {/* Optionally, display a success message or animation */}
        {isSubmitted && (
          <p className="text-center text-green-500 mt-4">Thank you for your message!</p>
        )}
      </div>
    </section>
  );
}

export default ContactForm;

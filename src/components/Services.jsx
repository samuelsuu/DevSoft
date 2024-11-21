import React from 'react';

function Services() {
  const services = [
    { title: 'Software Development', icon: '💻', description: 'Custom software solutions tailored to your business needs.' },
    { title: 'Training', icon: '📚', description: 'Expert-led courses and hands-on training for your team.' },
    { title: 'Consulting', icon: '🧠', description: 'Strategic IT consulting services to optimize your business processes.' },
    { title: 'Hardware Supplies', icon: '🖥️', description: 'Reliable hardware sourcing for all your technical needs.' },
  ];

  return (
    <section className="bg-gray-100 py-16" id="services">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800">Our Services</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          We offer a range of services designed to help your business grow, from custom software development to expert training and consulting.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-5xl mb-4 text-orange-500">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

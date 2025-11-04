import React, { useState } from 'react';
import { FacebookIcon } from '../components/icons/FacebookIcon';
import { TwitterIcon } from '../components/icons/TwitterIcon';
import { InstagramIcon } from '../components/icons/InstagramIcon';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
  };

  return (
    <div className="bg-white py-12 animate-fade-in">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Get In Touch</h1>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you! Whether you have a question about our products, delivery, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-gray-700">123 Fresh Lane, Foodie City, 12345</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="text-gray-700">(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span className="text-gray-700">support@freshcart.demo</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors"><FacebookIcon /></a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors"><TwitterIcon /></a>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors"><InstagramIcon /></a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            {submitted ? (
              <div className="text-center p-4 bg-green-100 text-green-800 rounded-lg">
                <p className="font-semibold">Thank you!</p>
                <p>Your message has been sent successfully.</p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Send Message
                </button>
              </div>
            </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

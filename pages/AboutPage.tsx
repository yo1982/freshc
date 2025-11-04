import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-12 animate-fade-in">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About FreshCart</h1>
            <p className="text-lg text-gray-600 mb-6">
              Welcome to FreshCart, where our passion for fresh, high-quality food meets the convenience of modern technology. 
              Founded in 2024, our mission has always been simple: to make healthy and delicious groceries accessible to everyone, right at their fingertips.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Commitment</h2>
            <p className="text-gray-600 mb-4">
              We believe that what you eat matters. That's why we partner with trusted local farmers and suppliers who share our commitment to sustainable and ethical practices. 
              From crisp, organic vegetables to premium cuts of meat, every item in our selection is carefully curated to ensure it meets our high standards of quality and freshness.
            </p>
             <p className="text-gray-600">
              But we're more than just a grocery store. We're innovators, using AI to help you discover new recipes and make meal planning effortless. We're a community, dedicated to supporting our local producers and providing our customers with an exceptional shopping experience.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1543083477-4f785aeafaa9?q=80&w=2070" 
              alt="Friendly grocer" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
import React from 'react';
import { Page } from '../types';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
            Quality Groceries, Delivered Fresh
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
            Your one-stop shop for fresh produce, pantry staples, and everything in between.
          </p>
          <button
            onClick={() => setCurrentPage('products')}
            className="bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-transform transform hover:scale-105 duration-300 text-lg"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Shop With FreshCart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6">
              <div className="text-green-500 mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 10.5V7.5a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25H18a2.25 2.25 0 002.25-2.25v-3.75m-9.75-5.25h.008v.008H10.5v-.008zm0 3h.008v.008H10.5v-.008zm0 3h.008v.008H10.5v-.008z" />
                 </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Farm Fresh Quality</h3>
              <p className="text-gray-600">We source directly from local farms to bring you the freshest, highest-quality produce available.</p>
            </div>
            <div className="p-6">
              <div className="text-green-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2.14-1.55a.5.5 0 01.62 0l1.17 1.17a.5.5 0 00.62 0l.9-1.12a.5.5 0 01.62 0L13 16zm-5-5h2.5a1.5 1.5 0 001.5-1.5V6.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h5l-2.5-4zM22 9h-5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast & Reliable Delivery</h3>
              <p className="text-gray-600">Get your groceries delivered right to your doorstep with our convenient and timely delivery service.</p>
            </div>
            <div className="p-6">
               <div className="text-green-500 mb-4">
                    <SparklesIcon className="h-16 w-16 mx-auto"/>
               </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Suggestions</h3>
              <p className="text-gray-600">Don't know what to cook? Our AI recipe suggester helps you find inspiration based on your cart.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple SparklesIcon for use within this component
const SparklesIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 14l-4 4 2.293 2.293a1 1 0 010 1.414L8 22m11-11l2.293 2.293a1 1 0 010 1.414L16 18l-4 4 2.293 2.293a1 1 0 010 1.414L12 22" />
    </svg>
);


export default HomePage;
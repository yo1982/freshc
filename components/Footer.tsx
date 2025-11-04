import React from 'react';
import { FacebookIcon } from './icons/FacebookIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { InstagramIcon } from './icons/InstagramIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <FacebookIcon />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <TwitterIcon />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <InstagramIcon />
            </a>
        </div>
        &copy; {new Date().getFullYear()} FreshCart. All rights reserved. A demo project.
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { useCart } from '../hooks/useCart';
import { Page } from '../types';
import { CartIcon } from './icons/CartIcon';
import { LoginIcon } from './icons/LoginIcon';
import { LogoutIcon } from './icons/LogoutIcon';

interface HeaderProps {
  setCurrentPage: (page: Page) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage, isLoggedIn, onLogout }) => {
  const { totalItems } = useCart();

  const navLinkClasses = "text-gray-600 hover:text-green-600 transition-colors px-3 py-2 rounded-md text-sm font-medium";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div 
          className="text-2xl font-bold text-green-600 cursor-pointer"
          onClick={() => setCurrentPage('home')}
        >
          FreshCart
        </div>
        <nav className="flex items-center space-x-2 md:space-x-4">
          <button
            onClick={() => setCurrentPage('home')}
            className={navLinkClasses}
          >
            Home
          </button>
           <button
            onClick={() => setCurrentPage('about')}
            className={navLinkClasses}
          >
            About
          </button>
          <button
            onClick={() => setCurrentPage('products')}
            className={navLinkClasses}
          >
            Products
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className={navLinkClasses}
          >
            Contact
          </button>
          
          <button 
            onClick={() => setCurrentPage('cart')}
            className="relative text-gray-600 hover:text-green-600 transition-colors"
          >
            <CartIcon />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          
          {isLoggedIn ? (
            <button 
              onClick={onLogout}
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              <LogoutIcon />
            </button>
          ) : (
            <button 
              onClick={() => setCurrentPage('login')}
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              <LoginIcon />
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { CartProvider } from './context/CartContext';
import { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = useCallback(() => {
    setIsLoggedIn(true);
    setCurrentPage('products');
  }, []);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'products':
        return <ProductsPage />;
      case 'cart':
        return <CartPage />;
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen font-sans">
        <Header 
          setCurrentPage={setCurrentPage} 
          isLoggedIn={isLoggedIn} 
          onLogout={handleLogout}
        />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
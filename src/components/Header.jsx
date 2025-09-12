import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Why Us', path: '/why-us', isBlinking: true },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className={`container mx-auto px-6 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold gradient-text">
            GROWLOUDER
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-white hover:text-[var(--gold)] transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-[var(--gold)]' : ''
                } ${item.isBlinking && location.pathname !== item.path ? 'blink' : ''}`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--gold)]"
                  />
                )}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-white z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl"
            >
              <div className="flex flex-col space-y-1 p-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block py-3 px-4 text-center text-white hover:text-[var(--gold)] transition-colors duration-300 rounded-md hover:bg-gray-800 ${
                      location.pathname === item.path ? 'text-[var(--gold)] bg-gray-900' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
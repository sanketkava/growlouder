import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start text-gray-400">
                <Mail size={16} className="mr-3 text-[var(--gold)]" />
                <span>hr@growlouder.in</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-gray-400">
                <Phone size={16} className="mr-3 text-[var(--gold)]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-gray-400">
                <MapPin size={16} className="mr-3 text-[var(--gold)]" />
                <span>Surat, IN</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[var(--gold)] transition-colors duration-300 underline-on-hover"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Follow Us</span>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white ${social.color} hover:text-white transition-colors duration-300`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <Link to="/" className="text-2xl font-bold gradient-text mb-4 inline-block">
            GROWLOUDER
          </Link>
          <p className="text-gray-500">
            © 2025 GROWLOUDER. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
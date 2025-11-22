import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#reservation' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-serif font-bold text-brand-gold tracking-widest uppercase">
              Romeo Lane
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white hover:text-brand-gold transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919520934111"
              className="inline-flex items-center px-4 py-2 border border-brand-gold text-sm font-medium text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-colors duration-300 rounded-sm uppercase tracking-widest"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-gold transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-xl absolute top-full left-0 w-full border-t border-gray-800">
          <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif text-white hover:text-brand-gold uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919520934111"
              className="mt-4 inline-flex items-center px-6 py-3 bg-brand-gold text-brand-dark font-bold tracking-wider uppercase rounded-sm"
            >
              Reserve Table
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
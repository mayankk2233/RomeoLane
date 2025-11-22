import React from 'react';
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold text-brand-gold tracking-widest uppercase mb-6">
              Romeo Lane
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Experience the finest flavors in an ambiance designed for unforgettable moments in the heart of Meerut.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start justify-center md:justify-start text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-brand-gold flex-shrink-0" />
                <span>2nd Floor, Downtown,<br/>Opp. Defence Colony,<br/>Mawana Road, Meerut</span>
              </li>
              <li className="flex items-center justify-center md:justify-start text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-3 text-brand-gold flex-shrink-0" />
                <span>+91-9520934111 / +91-9520924111</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Opening Hours</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-center md:justify-between border-b border-gray-800 pb-2">
                <span>Mon - Sun (Lunch)</span>
                <span className="text-white ml-4">11:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-center md:justify-between border-b border-gray-800 pb-2 pt-2">
                <span>Mon - Sun (Dinner)</span>
                <span className="text-white ml-4">6:00 PM - 11:00 PM</span>
              </li>
            </ul>
            <p className="text-xs text-brand-gold mt-4 italic">* Buffet available for both lunch & dinner</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-600 text-xs uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Romeo Lane Meerut. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
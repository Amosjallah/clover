import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <span className="serif text-3xl font-bold text-white tracking-wider block mb-6">
              CLOVERMADE<span className="text-emerald-500">.</span>
            </span>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Where imagination becomes visuals—and visuals become style. A multi-disciplinary studio for the modern creator.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors border border-slate-800">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors border border-slate-800">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors border border-slate-800">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Services</a></li>
              <li><a href="#store" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Shop</a></li>
              <li><a href="#portfolio" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Portfolio</a></li>
              <li><a href="#booking" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Book Now</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-slate-400 text-sm">
                <Mail className="w-5 h-5 mr-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>hello@clovermadestudio.com</span>
              </li>
              <li className="flex items-start text-slate-400 text-sm">
                <Phone className="w-5 h-5 mr-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start text-slate-400 text-sm">
                <MapPin className="w-5 h-5 mr-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>123 Creative Ave,<br />Design District, NY 10012</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-1">
             <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
             <p className="text-slate-400 text-sm mb-4">Subscribe for drop alerts and studio news.</p>
             <form className="flex flex-col space-y-3">
                <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
                <Button size="sm" className="w-full">
                    Subscribe
                </Button>
             </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 text-center flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Clovermade Studio. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-slate-400">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <MessageSquare className="h-8 w-8 text-blue-700" />
          <span className={`text-xl font-bold ${isScrolled ? 'text-blue-700' : 'text-blue-700'}`}>
            ClinicConnect
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-700 hover:text-blue-700 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-slate-700 hover:text-blue-700 transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-slate-700 hover:text-blue-700 transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-slate-700 hover:text-blue-700 transition-colors">
            Pricing
          </a>
          <a href="#contact" className="btn btn-primary">
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-700 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-slate-700 py-2 px-4 hover:bg-slate-50 rounded"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-slate-700 py-2 px-4 hover:bg-slate-50 rounded"
              onClick={toggleMenu}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-slate-700 py-2 px-4 hover:bg-slate-50 rounded"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-slate-700 py-2 px-4 hover:bg-slate-50 rounded"
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="btn btn-primary mt-4"
              onClick={toggleMenu}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
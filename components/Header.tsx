'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-royal/30 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <Link 
            href="#home" 
            className="flex items-center space-x-3 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-royal to-royal-dark rounded-xl opacity-20 animate-pulse-glow"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-royal to-royal-dark text-white rounded-xl flex items-center justify-center font-display font-bold text-lg group-hover:scale-110 transition-all duration-300 shadow-lg shadow-royal/25">
                MS
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Mulia Simanjuntak
              </span>
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-royal to-royal-light transition-all duration-300 rounded-full"></div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-royal/20 to-royal-light/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 backdrop-blur-sm"></div>
                <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-royal to-royal-light group-hover:w-6 group-hover:left-5 transition-all duration-300 rounded-full"></div>
              </Link>
            ))}
          </nav>

          {/* Enhanced Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl text-gray-300 hover:text-white transition-all duration-300 group relative overflow-hidden"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-royal/20 to-royal-light/20 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 rounded-xl"></div>
            <div className="relative z-10">
              <svg
                className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-royal/30 bg-black/95 backdrop-blur-xl animate-fade-in-up">
            <nav className="flex flex-col space-y-2 px-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative px-4 py-3 text-gray-300 hover:text-white font-medium transition-all duration-300 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-royal/10 to-royal-light/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg scale-95 group-hover:scale-100"></div>
                  <span className="relative z-10 flex items-center">
                    {item.name}
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
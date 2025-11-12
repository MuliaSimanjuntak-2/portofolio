'use client';

import Link from 'next/link';

const PhotographyButton = () => {
  return (
    <div className="flex justify-center mt-12">
      <Link
        href="/photography"
        className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-royal to-royal-dark text-white font-bold rounded-2xl hover:from-royal-dark hover:to-royal transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-royal/25 hover:shadow-royal/40 overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-royal/50 to-royal-dark/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10"></div>
        
        {/* Camera Icon */}
        <svg 
          className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" 
          />
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" 
          />
        </svg>
        
        {/* Button Text */}
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
          View Photography Portfolio
        </span>
        
        {/* Arrow Icon */}
        <svg 
          className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 7l5 5m0 0l-5 5m5-5H6" 
          />
        </svg>
        
        {/* Sparkle Animation */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-royal-light rounded-full opacity-0 group-hover:opacity-100 animate-ping animation-delay-150"></div>
      </Link>
    </div>
  );
};

export default PhotographyButton;
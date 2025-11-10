'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 lg:py-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-royal/20 to-royal/10 border border-royal/30 rounded-full backdrop-blur-sm hover:from-royal/30 hover:to-royal/20 transition-all duration-300 group">
                  <span className="text-royal font-semibold text-lg">👋 Hello, I'm</span>
                  <div className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                  <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                    Mulia
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-royal via-blue-400 to-royal-light bg-clip-text text-transparent">
                    Simanjuntak
                  </span>
                </h1>
                
                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-royal to-royal-light bg-clip-text text-transparent">
                    Student & Web Developer
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-royal to-royal-light rounded-full"></div>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                I am a Software Engineering student focused on web development with a strong 
                interest in <span className="text-royal font-semibold">fintech</span> and leveraging technology to improve business efficiency. 
                I enjoy building <span className="text-royal font-semibold">digital solutions</span> that are user-friendly, 
                well-structured, and high-performance. Let's collaborate to bring impactful innovation to life!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-royal to-royal-dark text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-royal/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-royal-dark to-royal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">View Projects</span>
                <svg className="relative z-10 ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-royal/50 text-royal font-semibold rounded-xl backdrop-blur-sm bg-royal/5 hover:bg-royal hover:text-white hover:border-royal transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Get In Touch</span>
                <svg className="relative z-10 ml-2 w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-6">
              <span className="text-gray-400 font-medium">Connect with me:</span>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/MuliaSimanjuntak-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 text-gray-400 hover:text-royal hover:bg-royal/20 rounded-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </Link>
                
                <Link
                  href="https://linkedin.com/in/muliasimanjuntak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 text-gray-400 hover:text-royal hover:bg-royal/20 rounded-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                
                <Link
                  href="mailto:muliachristiangomgompsimanjuntak@mail.ugm.ac.id"
                  className="p-3 bg-gray-800/50 text-gray-400 hover:text-royal hover:bg-royal/20 rounded-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Modern Profile Card */}
          <div className="relative">
            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-royal/20 to-royal-dark/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
            <div className="relative bg-gradient-to-br from-card-bg via-gray-900/60 to-black/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-card-border hover:border-royal/40 transition-all duration-300 group">
              {/* Profile Image */}
              <div className="relative mx-auto w-72 h-72 mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-royal via-blue-400 to-royal-light rounded-3xl opacity-20 animate-pulse blur-sm"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl flex items-center justify-center overflow-hidden border border-royal/30 group-hover:border-royal/50 transition-all duration-300">
                  {/* Enhanced placeholder */}
                  <div className="w-56 h-56 bg-gradient-to-br from-royal/40 via-blue-500/30 to-royal-dark/40 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
                    <svg className="w-32 h-32 text-royal/90 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Status & Info */}
              <div className="text-center space-y-6">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/40 text-green-400 rounded-2xl text-sm font-semibold backdrop-blur-sm">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse shadow-lg shadow-green-400/50"></div>
                  Available for opportunities
                </div>
                
                <div className="space-y-3">
                  <p className="text-gray-400 font-medium">Currently studying at</p>
                  <p className="font-display font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Universitas Gadjah Mada
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-royal to-royal-light rounded-full mx-auto"></div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-royal rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-royal-dark rounded-full opacity-40 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
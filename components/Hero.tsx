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
              <div className="space-y-2">
                <p className="text-royal font-medium text-lg">
                  Halo, saya
                </p>
                <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                  Mulia Simanjuntak
                </h1>
                <p className="text-xl md:text-1.5xl text-gray-300 font-medium">
                  Student, Web Developer, and Project Manager
                </p>
              </div>
              
              <p className="text-lg text-gray-400 leading-relaxed max-w-md">
                I am a Software Engineering student focused on web development with a strong 
                interest in fintech and leveraging technology to improve business efficiency. 
                I have experience as a Web Developer and Project Manager in various application-based 
                and collaborative projects. I enjoy building digital solutions that are user-friendly, 
                well-structured, and high-performance. Let’s collaborate to bring impactful innovation to life!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-royal text-white font-semibold rounded-lg hover:bg-royal-dark transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Lihat Projects
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-royal text-royal font-semibold rounded-lg hover:bg-royal hover:text-white transition-all duration-200 hover:scale-105"
              >
                Download CV
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <span className="text-gray-400 font-medium">Follow me:</span>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/MuliaSimanjuntak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-royal transition-colors"
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
                  className="text-gray-400 hover:text-royal transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                
                <Link
                  href="mailto:mulia@email.com"
                  className="text-gray-400 hover:text-royal transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Card */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-card-bg to-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-card-border">
              {/* Profile Image */}
              <div className="relative mx-auto w-64 h-64 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-royal to-royal-dark rounded-full opacity-20 animate-pulse-glow"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center overflow-hidden border border-royal/30">
                  {/* Placeholder for profile image */}
                  <div className="w-48 h-48 bg-gradient-to-br from-royal/30 to-royal-dark/30 rounded-full flex items-center justify-center">
                    <svg className="w-24 h-24 text-royal/80" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-green-900/30 border border-green-500/30 text-green-400 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for opportunities
                </div>
                
                <div className="space-y-2">
                  <p className="text-gray-400 font-medium">Currently studying at</p>
                  <p className="font-display font-semibold text-white">Universitas Sumatera Utara</p>
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
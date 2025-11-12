'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Photo {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  location?: string;
  date: string;
}

// Data photography portfolio
const photos: Photo[] = [
  {
    id: "1",
    title: "Urban Landscape",
    description: "Capturing the beauty of city architecture during golden hour",
    image: "/images/photography/urban-landscape.jpg",
    category: "Architecture",
    location: "Jakarta, Indonesia",
    date: "2024-10-15"
  },
  {
    id: "2",
    title: "Portrait Session",
    description: "Professional portrait photography with natural lighting",
    image: "/images/photography/portrait.jpg",
    category: "Portrait",
    location: "Studio",
    date: "2024-09-20"
  },
  {
    id: "3",
    title: "Nature's Beauty",
    description: "Stunning landscape photography capturing nature's essence",
    image: "/images/photography/nature.jpg",
    category: "Nature",
    location: "Bali, Indonesia",
    date: "2024-08-12"
  },
  {
    id: "4",
    title: "Street Photography",
    description: "Candid moments of daily life in the bustling streets",
    image: "/images/photography/street.jpg",
    category: "Street",
    location: "Bandung, Indonesia",
    date: "2024-07-05"
  },
  {
    id: "5",
    title: "Event Coverage",
    description: "Professional event photography capturing special moments",
    image: "/images/photography/event.jpg",
    category: "Event",
    location: "Convention Center",
    date: "2024-06-18"
  },
  {
    id: "6",
    title: "Product Photography",
    description: "Commercial product shots with creative lighting setup",
    image: "/images/photography/product.jpg",
    category: "Commercial",
    location: "Studio",
    date: "2024-05-22"
  }
];

const categories = ["All", "Architecture", "Portrait", "Nature", "Street", "Event", "Commercial"];

// Helper function to format date consistently
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

export default function PhotographyPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = selectedCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="relative z-10 pt-8 pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center text-white hover:text-royal-light transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6">
            Photography
            <span className="block text-2xl md:text-3xl text-royal-light font-normal mt-2">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Capturing moments, telling stories through the lens. 
            Explore my collection of photography work spanning various genres and styles.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-royal text-white shadow-lg shadow-royal/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-royal/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                {/* Photo Placeholder */}
                <div className="relative h-80 bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal/30 to-royal-dark/20 flex items-center justify-center">
                    <div className="text-center text-royal/90">
                      <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-sm font-medium">{photo.category}</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <p className="font-medium">View Details</p>
                    </div>
                  </div>
                </div>

                {/* Photo Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-royal/25 text-royal-light text-sm font-medium rounded-full">
                      {photo.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {formatDate(photo.date)}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">
                    {photo.description}
                  </p>
                  {photo.location && (
                    <div className="flex items-center text-gray-400 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {photo.location}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedPhoto(null)}>
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white hover:text-royal-light transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Photo */}
              <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                <div className="text-center text-royal/90">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-lg font-medium">{selectedPhoto.title}</p>
                </div>
              </div>
              
              {/* Details */}
              <div className="space-y-4">
                <div>
                  <span className="px-4 py-2 bg-royal/25 text-royal-light text-sm font-medium rounded-full">
                    {selectedPhoto.category}
                  </span>
                </div>
                <h2 className="font-display font-bold text-2xl text-white">
                  {selectedPhoto.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {selectedPhoto.description}
                </p>
                <div className="space-y-2 text-sm">
                  {selectedPhoto.location && (
                    <div className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Location: {selectedPhoto.location}</span>
                    </div>
                  )}
                  <div className="flex items-center text-gray-400">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Date: {formatDate(selectedPhoto.date)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
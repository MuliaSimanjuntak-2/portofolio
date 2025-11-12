'use client';

import Image from 'next/image';
import { useState } from 'react';
import ScreenshotPlaceholder from './ScreenshotPlaceholder';

interface ProjectImageProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const ProjectImage = ({ 
  src, 
  alt, 
  title, 
  description, 
  size = 'medium',
  className = "" 
}: ProjectImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Debug: Log the src path
  console.log('ProjectImage src:', src);

  const handleImageError = (e: any) => {
    console.log('Image error for:', src, e);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log('Image loaded successfully:', src);
    setImageLoaded(true);
  };

  return (
    <div className={`relative ${className}`}>
      {!imageError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-xl"
          onError={handleImageError}
          onLoad={handleImageLoad}
          unoptimized={true}
        />
      ) : (
        <ScreenshotPlaceholder 
          title={title || alt}
          description={description || `Image not found: ${src}`}
          size={size}
        />
      )}
    </div>
  );
};

export default ProjectImage;
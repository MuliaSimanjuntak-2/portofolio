'use client';

interface ScreenshotPlaceholderProps {
  title?: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
  projectSlug?: string;
  screenshotType?: 'main' | 'features';
  expectedPath?: string;
  className?: string;
}

const ScreenshotPlaceholder = ({ 
  title,
  description,
  size = 'medium',
  projectSlug, 
  screenshotType, 
  expectedPath,
  className = "" 
}: ScreenshotPlaceholderProps) => {
  const getDefaultPath = () => {
    const basePath = `/images/projects/${projectSlug}`;
    switch (screenshotType) {
      case 'main':
        return `${basePath}/main-interface.jpg`;
      case 'features':
        return `${basePath}/features.jpg`;
      default:
        return `${basePath}/${screenshotType}.jpg`;
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 'w-8 h-8';
      case 'large':
        return 'w-20 h-20';
      default:
        return 'w-16 h-16';
    }
  };

  const getIconForType = () => {
    const iconSize = getIconSize();
    
    if (screenshotType === 'main') {
      return (
        <svg className={`${iconSize} mx-auto mb-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2M9 7v10" />
        </svg>
      );
    } else if (screenshotType === 'features') {
      return (
        <svg className={`${iconSize} mx-auto mb-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    } else {
      // Default generic icon for screenshots
      return (
        <svg className={`${iconSize} mx-auto mb-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    }
  };

  const getTitle = () => {
    if (title) return title;
    
    switch (screenshotType) {
      case 'main':
        return 'Main Interface';
      case 'features':
        return 'Features';
      default:
        return 'Screenshot';
    }
  };

  const getDescription = () => {
    if (description) return description;
    return 'Project screenshot placeholder';
  };

  const getTextSize = () => {
    switch (size) {
      case 'small':
        return 'text-xs';
      case 'large':
        return 'text-lg';
      default:
        return 'text-sm';
    }
  };

  const pathToDisplay = expectedPath || (projectSlug && screenshotType ? getDefaultPath() : '');

  return (
    <div className={`absolute inset-0 bg-gradient-to-br from-royal/20 to-royal-dark/10 flex items-center justify-center ${className}`}>
      <div className="text-center text-royal/90 px-4">
        <div className="animate-pulse-glow">
          {getIconForType()}
        </div>
        <p className={`font-semibold bg-gradient-to-r from-royal-light to-royal bg-clip-text text-transparent ${getTextSize()}`}>
          {getTitle()}
        </p>
        {size !== 'small' && (
          <p className="text-xs text-royal/70 mt-1">
            {getDescription()}
          </p>
        )}
        {projectSlug && pathToDisplay && (
          <div className={`mt-2 p-2 bg-black/20 rounded-lg ${size === 'small' ? 'text-xs' : 'text-sm'}`}>
            <p className="text-royal/70 font-mono">Upload image to:</p>
            <p className="text-royal/90 font-mono break-all">/public{pathToDisplay}</p>
          </div>
        )}
        {process.env.NODE_ENV === 'development' && size !== 'small' && (
          <div className="mt-2 text-xs text-royal/50">
            <p>📁 Development Mode</p>
            <p>Screenshot will appear automatically after file upload</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenshotPlaceholder;
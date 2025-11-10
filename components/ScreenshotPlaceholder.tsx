'use client';

interface ScreenshotPlaceholderProps {
  projectSlug: string;
  screenshotType: 'main' | 'features';
  expectedPath?: string;
  className?: string;
}

const ScreenshotPlaceholder = ({ 
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

  const getIconForType = () => {
    switch (screenshotType) {
      case 'main':
        return (
          <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2M9 7v10" />
          </svg>
        );
      case 'features':
        return (
          <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
    }
  };

  const getTitle = () => {
    switch (screenshotType) {
      case 'main':
        return 'Main Interface';
      case 'features':
        return 'Features';
    }
  };

  const pathToDisplay = expectedPath || getDefaultPath();

  return (
    <div className={`absolute inset-0 bg-gradient-to-br from-royal/20 to-royal-dark/10 flex items-center justify-center ${className}`}>
      <div className="text-center text-royal/90 px-4">
        <div className="animate-pulse-glow">
          {getIconForType()}
        </div>
        <p className={`font-semibold bg-gradient-to-r from-royal-light to-royal bg-clip-text text-transparent ${screenshotType === 'main' ? 'text-lg' : 'text-sm'}`}>
          {getTitle()}
        </p>
        <div className={`mt-2 p-2 bg-black/20 rounded-lg ${screenshotType === 'main' ? 'text-sm' : 'text-xs'}`}>
          <p className="text-royal/70 font-mono">Upload image to:</p>
          <p className="text-royal/90 font-mono break-all">/public{pathToDisplay}</p>
        </div>
        {process.env.NODE_ENV === 'development' && (
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
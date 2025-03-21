
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoaded: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 2500);

    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 2;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-helvetica font-bold uppercase mb-6">Hervé Larren</h1>
      <div className="w-40 h-px bg-black/10 relative overflow-hidden">
        <div 
          className="h-full bg-black"
          style={{ width: `${progress}%`, transition: 'width 0.2s ease-out' }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;


import { useState, useEffect } from 'react';
import Header from '../components/Header';
import VideoBackground from '../components/VideoBackground';
import LoadingScreen from '../components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setFadeIn(true);
      }, 100);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoaded={() => setIsLoading(false)} />
      ) : (
        <main className={`relative h-screen w-full overflow-hidden ${fadeIn ? 'animate-fade-in' : 'opacity-0'}`}>
          <VideoBackground />
          <Header />
          <div className="absolute bottom-10 left-0 right-0 text-center z-10">
            <p className="text-white text-sm opacity-70 tracking-wider">
              &copy; {new Date().getFullYear()} Hervé Larren
            </p>
          </div>
        </main>
      )}
    </>
  );
};

export default Index;

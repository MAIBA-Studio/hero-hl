
import React, { useRef, useEffect } from 'react';

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slightly slower playback for aesthetic effect
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="object-cover w-full h-full"
      >
        <source src="/HEVC2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>
  );
};

export default VideoBackground;

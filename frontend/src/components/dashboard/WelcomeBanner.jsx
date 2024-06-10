import React, { useEffect, useState } from 'react'
import { images } from '../../utils/assets';

export default function WelcomeBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  useEffect(() => {
    if (hasInteracted) return;
    const timer = setTimeout(
      () => setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1)),
      7000
    );

    return () => clearInterval(timer);
  }, [currentImageIndex, hasInteracted]);
  return (
    <div className="mb-4">
     
      <div className="relative opacity-60">
        <div
          key={currentImageIndex}
          className="relative w-full h-[350px] animate-fade-in"
        >
          <img
            src={images[currentImageIndex]}
            alt="Welcome Banner"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentImageIndex(i);
                setHasInteracted(true);
              }}
            >
              <WelcomeBanner.Indicator
                filled={currentImageIndex === i ? true : false}
              />
            </button>
          ))}
        </div>
    </div>
  );
}

const Indicator = ({ filled }) => {
  return (
    <div
      className={`w-3 h-3 rounded-full border-slate-600 border-2 mt-2 ${filled ? 'bg-slate-900' : ''}`}
    />
  );
};

WelcomeBanner.Indicator = Indicator;

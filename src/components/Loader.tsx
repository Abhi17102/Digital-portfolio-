import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 1800); // 1.8s loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 animate-fade-in-up">
          Abhishek Dhabhai
        </h1>
        <svg width="320" height="18" viewBox="0 0 320 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-2">
          <path>
            <animate attributeName="d" dur="1.5s" repeatCount="indefinite"
              values="M0,10 Q80,0 160,10 T320,10; M0,10 Q80,18 160,10 T320,10; M0,10 Q80,0 160,10 T320,10" />
          </path>
          <path d="M0,10 Q80,0 160,10 T320,10" stroke="url(#grad)" strokeWidth="4" fill="none">
            <animate attributeName="d" dur="1.5s" repeatCount="indefinite"
              values="M0,10 Q80,0 160,10 T320,10; M0,10 Q80,18 160,10 T320,10; M0,10 Q80,0 160,10 T320,10" />
          </path>
          <defs>
            <linearGradient id="grad" x1="0" y1="10" x2="320" y2="10" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a78bfa" />
              <stop offset="0.5" stopColor="#60a5fa" />
              <stop offset="1" stopColor="#c084fc" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Loader; 
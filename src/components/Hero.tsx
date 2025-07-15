import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import abhiImage from '../assets/abhi_image.jpg';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Full Stack Developer", "ML Engineer", "DevOps Engineer", "Tech Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600">
                Abhishek Dhabhai
              </span>
            </h1>
            
            <div className="text-2xl lg:text-3xl text-gray-300 h-12 flex items-center">
              <span className="mr-2">I'm a</span>
              <span className="text-[#2c1281] font-semibold animate-pulse">
                {roles[currentRole]}
              </span>
            </div>
          </div>

          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            I like to learn and build new technology
          </p>

          <div className="space-y-4 text-gray-300">
            <p className="text-lg leading-relaxed">
              I'm Abhishek Dhabhai, a curious mind who enjoys designing and developing innovative solutions. 
              I graduated from Vivekananda Global University and I'm passionate about full stack development, 
              ML, and DevOps. Always exploring, always building.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-[#2c1281] to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-[#2c1281] text-[#2c1281] rounded-lg font-medium hover:bg-[#2c1281] hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Side - Photo */}
        <div className="flex justify-center lg:justify-end animate-slide-in-right">
          <div className="relative group">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <img 
                  src={abhiImage} 
                  alt="Abhishek Dhabhai" 
                  className="w-48 h-48 object-cover rounded-full border-4 border-purple-500 shadow-lg mx-auto mb-4" 
                />
                {/* <div className="text-center text-gray-400">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">AD</span>
                  </div>
                  <p className="text-sm">Photo Coming Soon</p>
                </div> */}
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
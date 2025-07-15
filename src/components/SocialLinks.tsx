import React from 'react';
import { Linkedin, MessageCircle } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/abhishek-dhabhai-452a9a29a',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      url: 'https://discord.gg/ZJV5dSDs',
      color: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section id="let's-connect" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Follow me on social media and let's build something amazing together
          </p>
        </div>

        <div className="flex justify-center space-x-8">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${link.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/25`}>
                <link.icon className="w-8 h-8 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
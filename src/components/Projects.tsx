import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      type: 'Major Project',
      title: 'Event Pass Project',
      description: 'A comprehensive event management system with secure pass generation, QR code integration, and real-time event tracking capabilities.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'QR Code API'],
      githubUrl: 'https://github.com/Abhi17102/event-pass-project.git',
      liveUrl: null,
      image: '/api/placeholder/600/400'
    },
    {
      type: 'Mini Project',
      title: 'Google Location Project',
      description: 'A location-based application integrating Google Maps API for real-time location tracking, geofencing, and location-based services.',
      techStack: ['JavaScript', 'Google Maps API', 'HTML', 'CSS', 'Geolocation API'],
      githubUrl: 'https://github.com/Abhi17102/Google-Base-Project.git',
      liveUrl: null,
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating problem-solving skills and innovative solutions
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group animate-fade-in-up ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-[#2c1281] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                <div className="lg:flex">
                  {/* Project Image */}
                  <div className="lg:w-1/2">
                    <div className="h-64 lg:h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                      <Folder className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-1/2 p-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-[#2c1281] text-white text-sm rounded-full">
                          {project.type}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white group-hover:text-[#2c1281] transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-white">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-purple-900/50 text-purple-300 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4 pt-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 group/link"
                        >
                          <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                          <span>GitHub</span>
                        </a>
                        
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 bg-[#2c1281] text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 group/link"
                          >
                            <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { Server, Wrench, Code } from 'lucide-react';

const TechnicalSkills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Technologies',
      icon: Code,
      skills: ['Linux', 'Full Stack', 'Machine Learning', 'Agentic AI', 'DevOps'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Jenkins', 'Docker', 'Kubernetes'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Libraries',
      icon: Server,
      skills: ['Python', 'Streamlit'],
      color: 'from-indigo-500 to-indigo-700'
    }
  ];

  return (
    <section id="technical-skills" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="space-y-6 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="group p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-[#2c1281] transition-all duration-300 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-purple-500/10"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s` }}
                  >
                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
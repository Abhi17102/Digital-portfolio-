import React from 'react';
import { Server, Wrench, Code } from 'lucide-react';
import { FaLinux, FaPython, FaDocker, FaGithub, FaGitAlt, FaJenkins } from 'react-icons/fa';
import { SiKubernetes, SiStreamlit, SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';
import { MdOutlineWeb } from 'react-icons/md';

const skillIconMap: Record<string, JSX.Element> = {
  'Linux': <FaLinux className="w-7 h-7 text-[#FCC624]" />,
  'Full Stack': <MdOutlineWeb className="w-7 h-7 text-[#2c1281]" />,
  'Machine Learning': <SiReact className="w-7 h-7 text-[#61DAFB]" />,
  'Agentic AI': <SiReact className="w-7 h-7 text-[#61DAFB]" />,
  'DevOps': <FaDocker className="w-7 h-7 text-[#2496ED]" />,
  'Git': <FaGitAlt className="w-7 h-7 text-[#F05032]" />,
  'GitHub': <FaGithub className="w-7 h-7 text-white" />,
  'Jenkins': <FaJenkins className="w-7 h-7 text-[#D24939]" />,
  'Docker': <FaDocker className="w-7 h-7 text-[#2496ED]" />,
  'Kubernetes': <SiKubernetes className="w-7 h-7 text-[#326CE5]" />,
  'Python': <FaPython className="w-7 h-7 text-[#3776AB]" />,
  'Streamlit': <SiStreamlit className="w-7 h-7 text-[#FF4B4B]" />,
};

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
                    className="group p-4 rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-800/80 border border-purple-700/30 hover:border-[#2c1281] transition-all duration-300 hover:bg-gray-800/80 hover:shadow-2xl hover:scale-105 backdrop-blur-md"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s` }}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border border-purple-700/30">
                        {skillIconMap[skill] || <div className="w-2 h-2 rounded-full bg-white"></div>}
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
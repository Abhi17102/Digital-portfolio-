import React from 'react';
import { Github } from 'lucide-react';

const pythonProjects = [
  { name: 'Email', github: 'https://github.com/Abhi17102/python_project.git' },
  { name: 'Phone call', github: 'https://github.com/Abhi17102/python_project.git' },
  { name: 'Instapost', github: 'https://github.com/Abhi17102/python_project.git' },
  { name: 'Sms', github: 'https://github.com/Abhi17102/python_project.git' },
  { name: 'whatsapp', github: 'https://github.com/Abhi17102/python_project.git' },
  { name: 'Python Menu base', github: 'https://github.com/Abhi17102/python_project.git' },
];

const jsProjects = [
  { name: 'Email-sender(Text And Images)', github: 'https://github.com/Abhi17102/java_projects.git' },
  { name: 'Google Live Location(find location and share location)', github: 'https://github.com/Abhi17102/java_projects.git' },
  { name: 'Photo And Video Click Function', github: 'https://github.com/Abhi17102/java_projects.git' },
  { name: 'Whatsapp', github: 'https://github.com/Abhi17102/java_projects.git' },
  { name: 'Menus base project', github: 'https://github.com/Abhi17102/java_projects.git' },
];

type Project = {
  name: string;
  github: string;
};

interface SectionBoxProps {
  title: string;
  projects: Project[];
}

const SectionBox: React.FC<SectionBoxProps> = ({ title, projects }) => (
  <div className="backdrop-blur-md bg-gray-900/60 border border-gray-800 rounded-xl p-6 mb-8 shadow-lg">
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <div className="grid md:grid-cols-2 gap-4">
      {projects.map((proj, idx) => (
        <div key={idx} className="flex items-center justify-between bg-gray-800/60 rounded-lg px-4 py-3">
          <span className="text-white font-medium">{proj.name}</span>
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-purple-300 hover:text-white transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      ))}
    </div>
  </div>
);

const ProgrammingProjects = () => (
  <section id="programming-projects" className="py-20 px-6 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Programming Projects</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore my Python and JavaScript projects, each with code and GitHub links.
        </p>
      </div>
      <SectionBox title="Python Projects" projects={pythonProjects} />
      <SectionBox title="JavaScript Projects" projects={jsProjects} />
    </div>
  </section>
);

export default ProgrammingProjects; 
import React, { useState } from 'react';
import { Award, X, ExternalLink } from 'lucide-react';

const Certificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const certificates = [
    {
      title: 'My Basic Statistics for Data Science',
      issuer: 'Skill Academy',
      image: '/api/placeholder/400/300',
      description: 'Comprehensive course covering fundamental statistical concepts essential for data science, including probability, descriptive statistics, hypothesis testing, and statistical inference.',
      skills: ['Statistics', 'Data Science', 'Probability', 'Hypothesis Testing'],
      completedDate: '2024'
    }
  ];

  const openModal = (certificate: any) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certificates" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Certificates
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => openModal(cert)}
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-[#2c1281] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <Award className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#2c1281] transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {cert.issuer} • {cert.completedDate}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedCertificate.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="w-full flex items-center justify-center">
                    <img 
                      src={selectedCertificate.image} 
                      alt={selectedCertificate.title} 
                      className="max-h-64 max-w-full rounded-lg shadow-lg border border-purple-700/30 object-contain bg-white" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-gray-300">
                      <strong>Issuer:</strong> {selectedCertificate.issuer}
                    </p>
                    <p className="text-gray-300">
                      <strong>Completed:</strong> {selectedCertificate.completedDate}
                    </p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {selectedCertificate.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-900/50 text-purple-300 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
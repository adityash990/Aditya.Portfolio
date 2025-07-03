import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Technology & Business Solutions Intern',
      company: 'Shakalya Enterprises Pvt Ltd.',
      location: 'Gurgaon, Haryana',
      period: 'Jan, 2025 - July, 2025',
      description: [
        ' Supported cross-functional teams in project execution and business solutions.',
        'Assisted in process analysis to enhance efficiency and product outcomes.',
        'Contributed to troubleshooting, cloud deployment, and basic automation.',
        'Handled data and reports to aid decision-making in ongoing projects.'
      ],
      technologies: ['Python', 'SQL', 'AWS', 'Docker', 'Excel']
    }
  ];

  const education = [
    {
      degree: 'BACHELOR OF Technology IN COMPUTER SCIENCE',
      school: 'Bennett University',
      location: 'Greater Noida, Uttar Pradesh',
      period: '2022 - 2026',
      description: 'Pursuing B.Tech in Cloud Computing with focus on Product, Data, and Business Solutions.'
    }
  ];

  return (
    <section id="experience" className="py-12 bg-white bg-neural-pattern relative overflow-hidden">
      {/* Enhanced background lighting with bubbles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-bl from-black/2 via-transparent to-black/1 rounded-full blur-3xl animate-morphing-blob animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-black/3 via-black/1 to-transparent rounded-full blur-3xl animate-morphing-blob animation-delay-5000"></div>
        
        {/* Geometric elements */}
        <div className="absolute top-1/3 left-1/3 w-20 h-20 border border-black/5 rotate-12 animate-geometric-rotate"></div>
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 border border-black/10 animate-geometric-rotate animation-delay-2000"></div>
        
        {/* Neural network pattern */}
        <svg className="absolute top-1/2 right-1/4 w-24 h-24 opacity-5" viewBox="0 0 100 100">
          <circle cx="20" cy="20" r="3" fill="currentColor" className="animate-pulse" />
          <circle cx="80" cy="80" r="3" fill="currentColor" className="animate-pulse animation-delay-1000" />
          <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="1" className="animate-neural-network" />
        </svg>
        
        {/* Floating particles */}
        <div className="particle particle-1" style={{ top: '30%', left: '80%' }}></div>
        <div className="particle particle-3" style={{ top: '65%', left: '20%' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Positioned heading in top left corner */}
          <div className="relative mb-12">
            <div className="absolute top-0 left-0">
              <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight animate-fade-in-up">
                EXPERIENCE & EDUCATION
              </h2>
              <div className="w-28 h-0.5 bg-black mt-4 ml-2 animate-expand"></div>
            </div>
            <div className="pt-10 text-right pr-4">
              <p className="text-lg text-gray-600 max-w-2xl ml-auto font-light">
                My professional journey and educational background
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-black mb-10 text-black flex items-center gap-4 tracking-wider">
              <Building className="text-black" size={28} />
              PROFESSIONAL EXPERIENCE
            </h3>
            
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-50 border border-gray-200 hover:border-black p-8 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up glass-effect overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 relative z-10">
                    <div>
                      <h4 className="text-xl font-bold text-black mb-2 tracking-wide">
                        {exp.title}
                      </h4>
                      <p className="text-gray-700 font-semibold mb-2 text-base">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col lg:text-right text-gray-600 space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="font-light tracking-wide text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span className="font-light tracking-wide text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="text-gray-700 mb-6 space-y-2 relative z-10">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-black mt-1 text-base">•</span>
                        <span className="font-light leading-relaxed text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 border border-gray-300 text-gray-700 text-xs font-light tracking-wider hover:border-black hover:text-black transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-black mb-8 text-black tracking-wider">
              EDUCATION
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 p-8 animate-fade-in-up glass-effect relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/3 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 relative z-10">
                    <div>
                      <h4 className="text-xl font-bold text-black mb-2 tracking-wide">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-700 font-semibold text-base">
                        {edu.school}
                      </p>
                    </div>
                    <div className="flex flex-col lg:text-right text-gray-600 space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="font-light tracking-wide text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span className="font-light tracking-wide text-sm">{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 font-light leading-relaxed text-sm relative z-10">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
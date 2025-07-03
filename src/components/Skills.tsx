import React, { useState } from 'react';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: [
        { name: 'PYTHON', level: 95 },
        { name: 'HTML&CSS', level: 90 },
        { name: 'JAVASCRIPT', level: 85 },
        { name: 'MYSQL', level: 92 },
        { name: 'C++', level: 80 },
      ]
    },
    {
      title: 'Business & Product Skills',
      skills: [
        { name: 'Business Analytics', level: 88 },
        { name: 'MS-EXCEL', level: 85 },
        { name: 'Agile processes', level: 82 },
        { name: 'Stakeholder Communication', level: 80 },
        { name: 'Product Development Mindset', level: 78 },
      ]
    },
    {
      title: 'Cloud & Data Expertise',
      skills: [
        { name: 'Docker & Kubernetes', level: 92 },
        { name: 'Power BI and Tableau', level: 75 },
        { name: 'Jenkins', level: 70 },
        { name: 'AWS Cloud Fundamentals', level: 85 },
        { name: 'Linux', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 bg-white bg-gradient-mesh relative overflow-hidden">
      {/* Enhanced background lighting */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-gradient-to-bl from-black/2 via-transparent to-black/1 rounded-full blur-3xl animate-morphing-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-black/3 via-black/1 to-transparent rounded-full blur-3xl animate-morphing-blob animation-delay-6000"></div>
        
        {/* Neural network pattern */}
        <svg className="absolute top-1/4 left-1/3 w-32 h-32 opacity-10" viewBox="0 0 100 100">
          <path d="M20,20 L80,80 M80,20 L20,80 M50,10 L50,90 M10,50 L90,50" 
                stroke="currentColor" 
                strokeWidth="1" 
                fill="none" 
                className="animate-neural-network" />
        </svg>
        
        {/* Floating particles */}
        <div className="particle particle-1" style={{ top: '15%', left: '85%' }}></div>
        <div className="particle particle-3" style={{ top: '75%', left: '15%' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Positioned heading in top right corner */}
          <div className="relative mb-12">
            <div className="absolute top-0 right-0">
              <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight animate-fade-in-up">
                SKILLS & EXPERTISE
              </h2>
              <div className="w-28 h-0.5 bg-black mt-4 mr-2 animate-expand"></div>
            </div>
            <div className="pt-12 text-left pl-4">
              <p className="text-lg text-gray-600 max-w-2xl font-light">
                Technologies and tools I work with to bring ideas to life
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="group bg-gray-50 border border-gray-200 hover:border-black transition-all duration-500 p-8 transform hover:-translate-y-2 animate-fade-in-up cursor-pointer glass-effect relative overflow-hidden"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
                onMouseEnter={() => setHoveredCategory(categoryIndex)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Enhanced hover effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="text-xl font-black mb-8 text-center text-black tracking-wider relative z-10">
                  {category.title}
                </h3>
                <div className="space-y-6 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium tracking-wide text-sm">
                          {skill.name}
                        </span>
                        <span className="text-black text-xs font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 h-1 overflow-hidden relative">
                        {/* Enhanced skill bar with gradient */}
                        <div
                          className={`h-full bg-gradient-to-r from-black to-gray-700 transition-all duration-1000 ease-out relative ${
                            hoveredCategory === categoryIndex 
                              ? 'animate-skill-bar-hover' 
                              : 'w-0'
                          }`}
                          style={{ 
                            width: hoveredCategory === categoryIndex ? `${skill.level}%` : '0%',
                            animationDelay: `${skillIndex * 150}ms`
                          }}
                        >
                          {/* Shimmer effect on skill bar */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-light-beam"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Corner decorative elements */}
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center relative">
            <p className="text-gray-600 text-base font-light relative z-10">
              Always learning and exploring new technologies to stay at the forefront of development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
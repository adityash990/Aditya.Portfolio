import React from 'react';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'CLEAN CODE',
      description: 'Writing maintainable, scalable code following industry best practices and modern standards'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'DESIGN FOCUSED',
      description: 'Creating beautiful, intuitive user interfaces that prioritize user experience'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'PERFORMANCE',
      description: 'Optimizing applications for maximum speed, efficiency, and scalability'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'COLLABORATION',
      description: 'Working effectively in team environments with strong communication skills'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 bg-geometric-pattern relative overflow-hidden">
      {/* Enhanced background lighting */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-black/2 via-transparent to-black/1 rounded-full blur-3xl animate-morphing-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-tl from-black/3 via-black/1 to-transparent rounded-full blur-3xl animate-morphing-blob animation-delay-4000"></div>
        
        {/* Geometric elements */}
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-black/10 rotate-45 animate-geometric-rotate"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border border-black/5 animate-geometric-rotate animation-delay-3000"></div>
        
        {/* Light beams */}
        <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-transparent via-black/5 to-transparent animate-light-beam animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Positioned heading in left corner */}
          <div className="relative mb-12">
            <div className="absolute top-0 left-0">
              <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight animate-fade-in-up">
                ABOUT ME
              </h2>
              <div className="w-28 h-0.5 bg-black mt-4 ml-2 animate-expand"></div>
            </div>
            <div className="pt-12 text-center">
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Get to know more about my journey and what drives me
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-left">
              <div className="relative group">
                {/* Enhanced photo container with glass effect */}
                <div className="w-80 h-80 mx-auto border-2 border-gray-300 relative overflow-hidden group-hover:border-black transition-all duration-500 glass-effect">
                  <img 
                    src="https://i.ibb.co/gbrqgQ3d/upscalemedia-transformed.jpg" 
                    alt="Aditya Sharma - About" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-4 bg-gradient-to-br from-gray-100 to-white flex items-center justify-center" style={{display: 'none'}}>
                    <span className="text-6xl font-black text-gray-400 group-hover:text-black transition-colors duration-500">AS</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-black/5 rounded-full animate-float-slow"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-black/10 rounded-full animate-float-reverse"></div>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in-right">
              <div className="relative">
                <p className="text-base text-gray-700 leading-relaxed font-light relative z-10">
                  I'm a passionate tech enthusiast with expertise in driving solutions across Product, Project, and Data domains. My journey started with curiosity for how technology shapes businesses, evolving into a love for building data-driven, impactful solutions.
                </p>
              </div>
              <p className="text-base text-gray-700 leading-relaxed font-light">
               I specialize in cloud platforms, business analytics, and data insights, with practical skills in Python, SQL, and AWS. I believe in combining technical knowledge with strategic thinking to create meaningful outcomes that solve real-world problems.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-light">
               When I'm not working, you'll find me exploring business trends, refining my analytics skills, or collaborating on projects that blend technology with impact.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group text-center p-6 border border-gray-200 hover:border-black transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10 animate-fade-in-up bg-white glass-effect relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="text-gray-600 group-hover:text-black mb-4 flex justify-center transition-all duration-500 transform group-hover:scale-110 relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-black tracking-wider relative z-10">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-sm relative z-10">
                  {item.description}
                </p>
                
                {/* Decorative corner elements */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
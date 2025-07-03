import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white bg-neural-pattern">
      {/* Enhanced Dynamic lighting effects */}
      <div className="absolute inset-0">
        {/* Morphing blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-black/3 via-black/1 to-transparent rounded-full blur-3xl animate-morphing-blob"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-black/2 via-transparent to-black/1 rounded-full blur-3xl animate-morphing-blob animation-delay-3000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-black/4 via-black/1 to-transparent rounded-full blur-3xl animate-morphing-blob animation-delay-6000"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-black/5 animate-geometric-rotate"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-black/3 rotate-45 animate-geometric-rotate animation-delay-4000"></div>
        
        {/* Floating particles */}
        <div className="particle particle-1" style={{ top: '20%', left: '10%' }}></div>
        <div className="particle particle-2" style={{ top: '60%', left: '80%' }}></div>
        <div className="particle particle-3" style={{ top: '40%', left: '60%' }}></div>
        <div className="particle particle-4" style={{ top: '80%', left: '20%' }}></div>
        <div className="particle particle-5" style={{ top: '10%', left: '90%' }}></div>
        
        {/* Central gradient mesh */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-mesh rounded-full animate-pulse-slow"></div>
      </div>

      {/* Enhanced Corner lighting with ripple effects */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-black/8 via-black/3 to-transparent animate-corner-light overflow-hidden">
        <div className="absolute inset-0 bg-black/5 rounded-full animate-ripple"></div>
      </div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-black/8 via-black/3 to-transparent animate-corner-light-delay overflow-hidden">
        <div className="absolute inset-0 bg-black/5 rounded-full animate-ripple animation-delay-1500"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-black/8 via-black/3 to-transparent animate-corner-light-reverse overflow-hidden">
        <div className="absolute inset-0 bg-black/5 rounded-full animate-ripple animation-delay-3000"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-black/8 via-black/3 to-transparent animate-corner-light-delay-reverse overflow-hidden">
        <div className="absolute inset-0 bg-black/5 rounded-full animate-ripple animation-delay-4000"></div>
      </div>

      {/* Light beam effects */}
      <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black/10 to-transparent animate-light-beam"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black/5 to-transparent animate-light-beam animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Photo with enhanced effects */}
            <div className="flex justify-center lg:justify-start animate-fade-in-left">
              <div className="relative group">
                {/* Glowing ring effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black/10 via-transparent to-black/10 animate-gradient-shift blur-sm"></div>
                
                <div className="w-80 h-80 rounded-full border-4 border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center group-hover:border-black transition-all duration-500 shadow-2xl relative z-10 glass-effect">
                  <img 
                    src="https://i.ibb.co/bsh1F4M/Whats-App-Image-2024-12-25-at-6-37-32-PM.jpg" 
                    alt="Aditya Sharma" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center" style={{display: 'none'}}>
                    <span className="text-6xl font-black text-gray-400 group-hover:text-black transition-colors duration-500">AS</span>
                  </div>
                </div>
                
                {/* Floating elements around photo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-black/10 rounded-full animate-float-slow"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-black/5 rounded-full animate-float-reverse"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-black/8 rounded-full animate-float-diagonal"></div>
                
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Right side - Content with enhanced styling */}
            <div className="text-left animate-fade-in-right">
              <div className="mb-8 relative">
                <h1 className="text-4xl md:text-5xl font-black mb-4 text-black tracking-tight relative z-10">
                  ADITYA SHARMA
                </h1>
                <div className="text-lg md:text-xl text-gray-600 mb-6 font-light tracking-wide relative">
                  <span className="typing-animation-enhanced">Building impactful solutions with tech leadership.</span>
                  {/* Decorative line */}
                  <div className="absolute -bottom-2 left-0 w-24 h-0.5 bg-gradient-to-r from-black to-transparent animate-expand animation-delay-2000"></div>
                </div>
                <p className="text-base text-gray-700 max-w-xl leading-relaxed font-light relative z-10">
                  Passionate about bridging technology, data, and business to deliver real-world impact. Certified in AWS Cloud, Business Analytics, and Data Science with hands-on skills in Python, SQL, and cloud platforms. Focused on driving solutions across Product Management, Project Leadership, and Data Analytics.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => {
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group px-8 py-3 bg-black text-white hover:bg-gray-800 font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Sparkles size={18} />
                    LET'S COLLABORATE
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  {/* Enhanced shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-light-beam"></div>
                </button>
                <button 
                  onClick={() => {
                    const projectsSection = document.querySelector('#projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white font-semibold transition-all duration-500 transform hover:scale-105 relative overflow-hidden glass-effect-dark"
                >
                  <span className="relative z-10">VIEW MY WORK</span>
                  <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </div>

              <div className="flex space-x-6">
                <a 
                  href="https://github.com/adityash990" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 border border-gray-300 hover:border-black transition-all duration-300 transform hover:scale-110 hover:rotate-3 glass-effect relative overflow-hidden"
                >
                  <Github size={24} className="text-gray-600 group-hover:text-black transition-colors duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="https://www.linkedin.com/in/aditya-sharma-6a3b44281/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-3 border border-gray-300 hover:border-black transition-all duration-300 transform hover:scale-110 hover:-rotate-3 glass-effect relative overflow-hidden"
                >
                  <Linkedin size={24} className="text-gray-600 group-hover:text-black transition-colors duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="mailto:aksharma8933@gmail.com" 
                  className="group p-3 border border-gray-300 hover:border-black transition-all duration-300 transform hover:scale-110 hover:rotate-3 glass-effect relative overflow-hidden"
                >
                  <Mail size={24} className="text-gray-600 group-hover:text-black transition-colors duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-black transition-all duration-300 animate-bounce-slow group"
        >
          <div className="relative">
            <ChevronDown size={40} className="relative z-10" />
            <div className="absolute inset-0 bg-black/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ripple"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ShopHub',
      description: '💡 Developed a dynamic E-Commerce platform integrating Python-powered backend logic with advanced business analytics, enabling real-time insights via Power BI and Tableau visualizations. The system delivers scalable, data-driven product performance and decision intelligence.',
      image: 'https://i.ibb.co/JRm2wN9t/Screenshot-2025-07-02-232144.png',
      tech: ['HTML&Js', 'Python', 'PowerBi', 'Tableau', 'Tailwind CSS'],
      github: 'https://github.com/adityash990/ShopHub',
      live: 'https://shop-hub-six.vercel.app/',
      featured: true
    },
    {
      title: 'TASK MANAGER',
      description: '🚀 Engineered a full-stack Task Manager leveraging a Python backend, containerized with Docker and orchestrated via Kubernetes for scalable, production-grade deployment. The platform ensures reliable task operations with modern DevOps architecture and responsive frontend integration.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Docker', 'Kubernetes', 'HTML-CSS-JS'],
      github: 'https://github.com/adityash990/Task-Manager',
      live: 'https://github.com/adityash990/Task-Manager',
      featured: true
    },
    {
      title: 'CollegeInsights India',
      description: 'Developed an interactive college insights platform enabling students to explore institutes, compare options, and access real-time reviews to make informed academic decisions.',
      image: 'https://i.ibb.co/zhR0vvBN/Screenshot-2025-07-05-121301.png',
      tech: ['TypeScript', 'React.js', 'Chart.js', 'SQL',],
      github: 'https://github.com/adityash990/College_Insight_India',
      live: 'https://college-insight-india.vercel.app/',
      featured: false
    },
    {
      title: 'TechMart Analytics',
      description: 'Designed an AI-enhanced Business Intelligence platform delivering predictive insights through interactive, real-time dashboards. Leveraged structured Data Models to streamline complex datasets.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Data Modeling', 'Typescript', 'Power BI & Tableau', 'React'],
      github: 'https://github.com/adityash990/TechMartAnalytics1',
      live: 'https://tech-mart-analytics1.vercel.app/',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-12 bg-gray-50 bg-geometric-pattern relative overflow-hidden">
      {/* Enhanced background lighting with bubbles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-br from-black/2 via-transparent to-black/1 rounded-full blur-3xl animate-morphing-blob"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-tl from-black/3 via-black/1 to-transparent rounded-full blur-3xl animate-morphing-blob animation-delay-4000"></div>
        
        {/* Geometric elements */}
        <div className="absolute top-1/4 right-1/3 w-24 h-24 border border-black/5 rotate-45 animate-geometric-rotate"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-black/10 animate-geometric-rotate animation-delay-3000"></div>
        
        {/* Floating particles */}
        <div className="particle particle-2" style={{ top: '25%', left: '75%' }}></div>
        <div className="particle particle-4" style={{ top: '70%', left: '25%' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Positioned heading in bottom left corner */}
          <div className="relative mb-12">
            <div className="absolute bottom-0 left-0">
              <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight animate-fade-in-up">
                FEATURED PROJECTS
              </h2>
              <div className="w-28 h-0.5 bg-black mt-4 ml-2 animate-expand"></div>
            </div>
            <div className="pb-10 text-right pr-4">
              <p className="text-lg text-gray-600 max-w-2xl ml-auto font-light">
                A showcase of my recent work and passion projects
              </p>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-20 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-fade-in-up`}>
                  <div className="relative group overflow-hidden border border-gray-200 hover:border-black transition-all duration-500 glass-effect">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} animate-fade-in-up animation-delay-300`}>
                  <h3 className="text-3xl font-black mb-4 text-black tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 border border-gray-300 text-gray-700 text-xs font-light tracking-wider hover:border-black hover:text-black transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-gray-800 font-semibold transition-all duration-300 transform hover:scale-105 text-sm glass-effect-dark relative overflow-hidden"
                    >
                      <Github size={18} className="relative z-10" />
                      <span className="relative z-10">CODE</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-light-beam"></div>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white font-semibold transition-all duration-300 transform hover:scale-105 text-sm glass-effect relative overflow-hidden"
                    >
                      <ExternalLink size={18} className="relative z-10" />
                      <span className="relative z-10">LIVE DEMO</span>
                      <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-xl font-black mb-8 text-black text-center tracking-wider">
              OTHER NOTABLE PROJECTS
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 hover:border-black transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10 animate-fade-in-up glass-effect relative overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="p-5 relative z-10">
                    <h4 className="text-lg font-bold mb-2 text-black tracking-wide">
                      {project.title}
                    </h4>
                    <p className="text-gray-700 mb-3 leading-relaxed font-light text-xs">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 border border-gray-300 text-gray-600 text-xs tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-black transition-colors duration-300 transform hover:scale-110"
                          title="View Source Code"
                        >
                          <Github size={16} />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-black transition-colors duration-300 transform hover:scale-110"
                          title="View Live Demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-black hover:text-gray-600 transition-colors duration-300 text-xs font-light tracking-wider"
                      >
                        LEARN MORE
                        <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

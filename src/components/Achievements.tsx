import React from 'react';
import { Award } from 'lucide-react';

const Achievements = () => {
  // Placeholder certificate images - replace with your actual certificate images
  const certificates = [
    {
      id: 1,
      title: 'AWS Certified Cloud Practitioner',
      image: 'https://i.ibb.co/3W2fvN0/Screenshot-2024-12-24-135432.png',
      issuer: 'Amazon Web Services'
    },
    {
      id: 2,
      title: 'Startup Meetup WASME',
      image: 'https://i.ibb.co/8dYS3dC/Screenshot-2024-12-24-141055.png',
      issuer: 'IIT KANPUR'
    },
    {
      id: 3,
      title: 'Professional Business Analyst',
      image: 'https://i.ibb.co/Zzr7rjnq/Screenshot-2025-07-03-204520.png',
      issuer: 'MicroSoft'
    },
    {
      id: 4,
      title: 'SQL and Databases in Python',
      image: 'https://i.ibb.co/whJcwrc5/Screenshot-2025-07-03-204940.png',
      issuer: 'IBM'
    },
    {
      id: 5,
      title: 'Professional Data Analytics',
      image: 'https://i.ibb.co/MDXbM6Hq/Screenshot-2025-07-03-204539.png',
      issuer: 'GOOGLE'
    }
  ];

  // Duplicate the certificates array to create seamless loop
  const duplicatedCertificates = [...certificates, ...certificates];

  return (
    <section id="achievements" className="py-12 bg-gray-50 bg-gradient-mesh relative overflow-hidden">
      {/* Enhanced background lighting with bubbles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-bl from-black/2 via-transparent to-black/1 rounded-full blur-3xl animate-morphing-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-tr from-black/3 via-black/1 to-transparent rounded-full blur-3xl animate-morphing-blob animation-delay-6000"></div>
        
        {/* Geometric elements */}
        <div className="absolute top-1/4 left-1/4 w-28 h-28 border border-black/5 rotate-45 animate-geometric-rotate animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border border-black/10 animate-geometric-rotate animation-delay-4000"></div>
        
        {/* Light beams */}
        <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black/5 to-transparent animate-light-beam animation-delay-3000"></div>
        
        {/* Floating particles */}
        <div className="particle particle-2" style={{ top: '20%', left: '70%' }}></div>
        <div className="particle particle-4" style={{ top: '75%', left: '30%' }}></div>
        <div className="particle particle-5" style={{ top: '50%', left: '85%' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Positioned heading in bottom right corner */}
          <div className="relative mb-12">
            <div className="absolute bottom-0 right-0">
              <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight animate-fade-in-up">
                ACHIEVEMENTS
              </h2>
              <div className="w-28 h-0.5 bg-black mt-4 mr-2 animate-expand"></div>
            </div>
            <div className="pb-10 text-left pl-4">
              <p className="text-lg text-gray-600 max-w-2xl font-light">
                Certifications and recognitions that showcase my expertise
              </p>
            </div>
          </div>

          {/* Rolling certificates section */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <Award className="text-black" size={28} />
              <h3 className="text-2xl font-black text-black tracking-wider">
                CERTIFICATIONS & AWARDS
              </h3>
            </div>

            {/* Horizontal scrolling container */}
            <div className="relative overflow-hidden">
              {/* Gradient overlays for smooth edges */}
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
              
              {/* Rolling animation container */}
              <div className="flex animate-scroll-horizontal">
                {duplicatedCertificates.map((cert, index) => (
                  <div
                    key={`${cert.id}-${index}`}
                    className="flex-shrink-0 w-72 mx-3 group"
                  >
                    <div className="bg-white border border-gray-200 hover:border-black transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl overflow-hidden glass-effect relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative overflow-hidden">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-40 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="p-5 relative z-10">
                        <h4 className="text-lg font-bold text-black mb-2 tracking-wide">
                          {cert.title}
                        </h4>
                        <p className="text-gray-600 font-light text-sm">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
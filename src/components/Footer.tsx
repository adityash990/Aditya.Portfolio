import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-black mb-6 text-black tracking-wider">
                ADITYA SHARMA
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Passionate Full Stack Developer creating exceptional digital experiences 
                through clean code and innovative design.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-black tracking-wider">
                QUICK LINKS
              </h4>
              <ul className="space-y-3">
                {['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(`#${item.toLowerCase()}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-600 hover:text-black transition-colors duration-300 font-light tracking-wide"
                    >
                      {item.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-black tracking-wider">
                LET'S CONNECT
              </h4>
              <p className="text-gray-600 mb-4 font-light">
                Open to new opportunities and collaborations
              </p>
              <a
                href="mailto:aksharma8933@gmail.com"
                className="text-black hover:text-gray-600 transition-colors duration-300 font-light tracking-wide"
              >
                aksharma8933@gmail.com
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm mb-4 md:mb-0 font-light tracking-wide">
                © 2024 ADITYA SHARMA. ALL RIGHTS RESERVED.
              </p>
              <p className="text-gray-600 text-sm flex items-center gap-2 font-light">
                MADE WITH <Heart className="text-red-500 w-4 h-4 animate-pulse" /> AND LOTS OF COFFEE
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
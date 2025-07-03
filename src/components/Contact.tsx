import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'EMAIL',
      value: 'aksharma8933@gmail.com',
      link: 'mailto:aksharma8933@gmail.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'LOCATION',
      value: 'Greater Noida, Uttar Pradesh',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/adityash990',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aditya-sharma-6a3b44281/',
    }
  ];

  return (
    <section id="contact" className="py-12 bg-gray-50 bg-neural-pattern relative overflow-hidden">
      {/* Enhanced background lighting with bubbles */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-br from-black/2 via-transparent to-black/1 rounded-full blur-3xl animate-morphing-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-black/3 via-black/1 to-transparent rounded-full blur-3xl animate-morphing-blob animation-delay-4000"></div>
        
        {/* Geometric elements */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 border border-black/5 rotate-12 animate-geometric-rotate"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 border border-black/10 animate-geometric-rotate animation-delay-3000"></div>
        
        {/* Light beams */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black/5 to-transparent animate-light-beam animation-delay-2000"></div>
        
        {/* Floating particles */}
        <div className="particle particle-1" style={{ top: '25%', left: '15%' }}></div>
        <div className="particle particle-3" style={{ top: '70%', left: '80%' }}></div>
        <div className="particle particle-5" style={{ top: '45%', left: '60%' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Positioned heading in bottom right corner */}
          <div className="relative mb-12">
            <div className="absolute bottom-0 right-0">
              <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight animate-fade-in-up">
                GET IN TOUCH
              </h2>
              <div className="w-28 h-0.5 bg-black mt-4 mr-2 animate-expand"></div>
            </div>
            <div className="pb-10 text-left pl-4">
              <p className="text-lg text-gray-600 max-w-2xl font-light">
                Have a project in mind or want to collaborate? I'd love to hear from you!
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-black mb-8 text-black tracking-wider">
                LET'S CONNECT
              </h3>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="group flex items-center gap-4 p-5 bg-white border border-gray-200 hover:border-black transition-all duration-500 transform hover:-translate-y-1 glass-effect relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="text-gray-600 group-hover:text-black transition-colors duration-300 relative z-10">
                      {info.icon}
                    </div>
                    <div className="relative z-10">
                      <p className="text-gray-500 text-xs font-light tracking-wider mb-1">
                        {info.title}
                      </p>
                      <p className="text-black font-medium text-base">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6 text-black tracking-wider">
                  FOLLOW ME
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 bg-white border border-gray-200 hover:border-black hover:bg-black transition-all duration-300 transform hover:-translate-y-1 glass-effect relative overflow-hidden"
                      aria-label={social.name}
                    >
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="text-gray-600 group-hover:text-white transition-colors duration-300 relative z-10">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-black mb-8 text-black tracking-wider">
                SEND A MESSAGE
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium tracking-wide text-sm">
                      NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors duration-300 font-light text-sm glass-effect"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium tracking-wide text-sm">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors duration-300 font-light text-sm glass-effect"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium tracking-wide text-sm">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors duration-300 font-light text-sm glass-effect"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium tracking-wide text-sm">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors duration-300 resize-vertical font-light text-sm glass-effect"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="group w-full px-8 py-4 bg-black text-white hover:bg-gray-800 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-black/20 flex items-center justify-center gap-2 relative overflow-hidden text-sm glass-effect-dark"
                >
                  <span className="relative z-10 flex items-center gap-2 tracking-wider">
                    <Send size={18} />
                    SEND MESSAGE
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-light-beam"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
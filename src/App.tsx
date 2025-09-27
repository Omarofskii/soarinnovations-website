import {
  BarChart3,
  Brain,
  ChevronUp,
  Globe,
  Lightbulb,
  Mail,
  Menu,
  Smartphone,
  Target,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: Lightbulb,
      title: "Consultancy & Technological Innovation",
      description: "Strategic guidance and cutting-edge solutions to drive your business forward with innovative technologies."
    },
    {
      icon: Smartphone,
      title: "Application Development & Management",
      description: "Full-cycle mobile and web application development with ongoing maintenance and optimization."
    },
    {
      icon: Globe,
      title: "Website & Software Design",
      description: "Beautiful, functional websites and software interfaces that deliver exceptional user experiences."
    },
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description: "Intelligent solutions that automate processes and unlock insights from your data."
    },
    {
      icon: BarChart3,
      title: "Data Collection, Processing & Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization tools."
    },
    {
      icon: Target,
      title: "Digital Strategy & Technology Advisory",
      description: "Comprehensive digital transformation strategies aligned with your business objectives."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img
                src="pictures\Logo_Transparent_1.png"
                alt="SoarInnovations"
                className="h-8 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-12 animate-fadeIn">
            <img
              src="pictures\Logo_Transparent_1.png"
              alt="SoarInnovations"
              className="h-32 sm:h-40 md:h-48 w-auto mx-auto mb-8"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 animate-slideUp">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Shaping Tomorrow, Today
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 animate-slideUp animation-delay-200">
            Innovative digital solutions for the future of business
          </p>

          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-slideUp animation-delay-400"
          >
            Get in Touch
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-float animation-delay-2000"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to propel your business into the digital future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-8 hover:border-gray-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-gray-600 to-gray-500 p-3 rounded-lg group-hover:from-gray-500 group-hover:to-gray-400 transition-all duration-300">
                    <service.icon size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-gray-100 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About Soarinnovations
            </span>
          </h2>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8 md:p-12">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Soar Innovations is a forward-thinking company driving digital transformation. Inspired by the idea of soaring, our name reflects both our ambition to help businesses rise above challenges and the initials of our founders Sam, Omar, Andre, and Ruslan, united by a shared vision to shape the future of technology.

              Guided by our motto “Shaping tomorrow, today”, we help organizations navigate the digital era with tailored solutions that deliver measurable impact across industries.

              Our Mission

              At Soar Innovations, our mission is to empower businesses with cutting-edge technology. We design and implement intelligent solutions that harness the power of data, automation, and innovation. By blending strategic insight with technical expertise, we transform complexity into clarity and opportunity.

              We believe the future is not something to wait for. It is something we build today.
            </p>
          </div>
          {/* Cofounders Cards */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Meet the Founders
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: "Sam", role: "Co-Founder", img: "pictures/sam1.jpg", link: "https://www.linkedin.com/in/sam-singh-49ba85196/" },
              { name: "Omar", role: "Co-Founder", img: "pictures/omar.png", link: "https://www.linkedin.com/in/omar-rahman-b9897320b/" },
              { name: "Andre", role: "Co-Founder", img: "pictures/andre.jpeg", link: "https://www.linkedin.com/in/aevogel/" },
              { name: "Ruslan", role: "Co-Founder", img: "pictures/ruslan.png", link: "https://www.linkedin.com/in/ruslan-barshigov-999401265/" },
            ].map((founder, index) => (
              <a
                key={index}
                href={founder.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-gradient-to-br from-gray-800/70 to-gray-700/70 border border-gray-600/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
                  <img
                    src={founder.img}
                    alt={founder.name}
                    className="w-full h-80 object-cover group-hover:opacity-90 transition duration-300"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-semibold text-white mb-2">{founder.name}</h3>
                    <p className="text-gray-400 text-lg">{founder.role}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8 md:p-12">
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your business with innovative technology solutions?
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="bg-gradient-to-r from-gray-600 to-gray-500 p-3 rounded-lg">
                <Mail size={24} className="text-white" />
              </div>
              <a
                href="mailto:info@soarinnovations.be"
                className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors duration-300"
              >
                info@soarinnovations.be
              </a>
            </div>
            <p className="text-gray-400">
              We'd love to hear about your project and explore how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <img
                src="pictures\Logo_Transparent_1.png"
                alt="SoarInnovations"
                className="h-8 w-auto"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <a
                href="mailto:info@soarinnovations.be"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                info@soarinnovations.be
              </a>
              <p className="text-gray-500 text-sm">
                © 2025 SoarInnovations. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white p-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
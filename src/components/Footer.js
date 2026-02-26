import { Phone, Mail, MapPin, Facebook, Twitter, Send, Linkedin, Instagram, Youtube, PhoneCall, Settings, Headphones, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VoIPFooter = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { name: 'Call Center Solutions', icon: Headphones, desc: 'Advanced call center management' },
    { name: 'CLI Services', icon: PhoneCall, desc: 'Caller Line Identification' },
    { name: 'Dialer Solutions', icon: Settings, desc: 'Automated dialing systems' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/mariyaamtelecom?rdid=a09H8QZ4bBYr27LW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Hx4ZydpPs%2F#', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arshad-khan-7481482b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' },
    { icon: Send, href: "https://t.me/mariyaamtelecom", color: "hover:text-cyan-400" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900">


        {/* Floating Particles */}


        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-400/30 transform hover:rotate-6 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">VoIPConnect</h3>
                <p className="text-emerald-400 text-sm font-semibold">Global Solutions</p>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Revolutionizing communication with cutting-edge VoIP technology. Connect globally, communicate effortlessly.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-blue-200 hover:text-emerald-400 transition-colors group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-400/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+44 7476680398</span>
              </div>
              <div className="flex items-center gap-3 text-blue-200 hover:text-emerald-400 transition-colors group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-400/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>sales@mariyaamtelecom.com</span>
              </div>
              <div className="flex items-center gap-3 text-blue-200 hover:text-emerald-400 transition-colors group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-400/20 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>San Francisco, CA 94102</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="group flex items-center gap-2 text-blue-200 hover:text-emerald-400 transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                    <span className="font-medium">{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>

          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full"></div>
              Our Services
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-4 hover:bg-white/10 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white font-bold mb-1 group-hover:text-emerald-400 transition-colors">
                          {service.name}
                        </h5>
                        <p className="text-blue-300 text-sm">{service.desc}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white/5 backdrop-blur-sm border-2 border-emerald-400/30 rounded-3xl p-8 mb-12 hover:border-emerald-400 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Stay Updated</h4>
              <p className="text-blue-200">Subscribe to our newsletter for the latest updates and offers.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto justify-center md:justify-end">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-emerald-400/30 rounded-xl px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-emerald-400 transition-colors"
              />

              <button className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl text-white font-bold hover:shadow-lg hover:shadow-emerald-400/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">

            {/* Copyright */}
            <div className="text-blue-300 text-sm">
              © {currentYear} <span className="font-bold text-white">VoIPConnect</span>. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 justify-center">
              <span className="text-blue-300 text-sm font-semibold mr-2">Follow Us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm border border-emerald-400/30 rounded-xl flex items-center justify-center text-white ${social.color} hover:border-emerald-400 hover:scale-110 transition-all duration-300`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center justify-center gap-6 text-sm">
              <a href="/" className="text-blue-300 hover:text-emerald-400 transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="/" className="text-blue-300 hover:text-emerald-400 transition-colors font-medium">
                Terms of Service
              </a>
            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          50% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0.5;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </footer>
  );
};

export default VoIPFooter;
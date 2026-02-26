import { useState, useEffect } from 'react';
import { Radio, Headphones, Network, Globe } from 'lucide-react';

export default function TelecomServices() {
  const [activeCard, setActiveCard] = useState(0);

  const services = [
    {
      icon: Radio,
      title: "CC Routes",
      description: "Premium carrier-grade voice routes with high ASR and ACD ratios for crystal clear communication",
      features: ["24/7 Monitoring", "99.9% Uptime", "Global Coverage"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Network,
      title: "CLI Routes",
      description: "Caller Line Identification routing solutions with full number display capabilities worldwide",
      features: ["Verified Numbers", "Real-time Routing", "Custom CLI"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Headphones,
      title: "Dialer Solution",
      description: "Advanced auto-dialer systems with predictive algorithms for maximum productivity and efficiency",
      features: ["Auto Dialer", "Analytics Dashboard", "CRM Integration"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services?.length]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-4">
            <Globe className="w-16 h-16 text-cyan-400 animate-pulse" />
          </div>
          <h1 className="text-5xl font-default text-yellow-500 mb-4">
            Telecom Services
          </h1>
          <p className="text-xl text-blue-200">
            Enterprise-grade communication solutions for your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeCard === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                className={`relative group cursor-pointer transition-all duration-500 transform ${
                  isActive ? 'scale-105 -translate-y-2' : 'scale-100'
                }`}
              >
                <div className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-500 ${
                  isActive ? 'border-cyan-400 shadow-2xl shadow-cyan-500/50' : 'border-white/20'
                }`}>
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transition-all duration-500 ${
                    isActive ? 'animate-bounce' : ''
                  }`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-blue-200 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center space-x-2 transition-all duration-300 ${
                          isActive ? 'translate-x-2' : ''
                        }`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                        <span className="text-blue-100 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>
                    <div className="w-3 h-3 rounded-full bg-cyan-400 absolute top-0"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeCard === index ? 'bg-cyan-400 w-8' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-purple-400/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
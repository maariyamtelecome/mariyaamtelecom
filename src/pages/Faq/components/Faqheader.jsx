import { useState, useEffect } from 'react';
import { HelpCircle, Search, Lightbulb, BookOpen, Zap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FAQHeader({onContactClick}) {
    const navigate = useNavigate();
  const [particles, setParticles] = useState([]);
  const [pulseScale, setPulseScale] = useState(1);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);

    // Pulse animation
    const pulseInterval = setInterval(() => {
      setPulseScale(prev => prev === 1 ? 1.05 : 1);
    }, 2000);

    return () => clearInterval(pulseInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden relative">
      {/* Animated Background Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(20px); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:px-8 relative z-10 mt-[-60px] ml-0 lg:ml-[60px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side Content */}
          <div style={{marginLeft:"21px"}} className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-purple-200 font-medium">Knowledge Base</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-[35px] lg:text-4xl font-light text-white leading-tight text-center lg:text-left">
                Got<span style={{ marginLeft: "10px" }} className=" bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Questions?
                </span>
              </h1>
            <p
              className="mb-4 text-[17px] leading-relaxed text-gray-300 text-justify"
              style={{ textAlign: "justify" }}
            >                Have questions? We’ve gathered everything you need to know about our VoIP platform.
                From setup to calling features, you’ll find clear and helpful answers here.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative group w-[325px] sm:w-[440px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400 z-10" />
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">

              <button onClick={onContactClick} className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold squared-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Browse All FAQs
                  <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>

              <button
                      onClick={() => navigate("/contact")}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold squared-full border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  Contact Support
                  <Zap className="w-5 h-5 group-hover:animate-pulse" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Side Animated Design */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Large Question Mark Circle */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80"
              style={{
                transform: `translate(-50%, -50%) scale(${pulseScale})`,
                transition: 'transform 2s ease-in-out'
              }}
            >
              <div className="relative w-full h-full ml-[100px]">
                {/* Rotating rings */}
                <div className="absolute inset-0 border-4 border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-8 border-4 border-pink-400/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                <div className="absolute inset-16 border-4 border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '10s' }} />

                {/* Center glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-3xl opacity-40" />

                {/* Question mark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <HelpCircle className="w-40 h-40 text-white drop-shadow-2xl" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Floating Feature Cards */}
            {[
              { Icon: BookOpen, label: 'Guides', pos: 'top-16 left-8', delay: '0s' },
              { Icon: Shield, label: 'Security', pos: 'top-16 right-[-80px]', delay: '0.5s' },
              { Icon: Lightbulb, label: 'Tips', pos: 'bottom-24 left-12', delay: '1s' },
              { Icon: Zap, label: 'Quick Start', pos: 'bottom-24 right-[-80px]', delay: '1.5s' }
            ].map((item, i) => {
              const IconComponent = item.Icon;
              return (
                <div
                  key={i}
                  className={`absolute ${item.pos} group cursor-pointer`}
                  style={{
                    animation: `float 3s ease-in-out infinite`,
                    animationDelay: item.delay
                  }}
                >
                  <div className="relative ml-[80px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 shadow-2xl">
                      <IconComponent className="w-8 h-8 text-white mb-2" />
                      <div className="text-sm text-white font-semibold whitespace-nowrap">{item.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Decorative Elements */}
            <div className="absolute top-1/3 -right-12 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-1/3 -left-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
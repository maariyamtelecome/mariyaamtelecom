import { useState, useEffect } from 'react';
import { Send, Globe, Zap, Mail, MessageSquare, Phone, Users, Rocket, Heart } from 'lucide-react';

export default function ContactHeader({onContactClick}) {
  const [float, setFloat] = useState(0);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const floatInterval = setInterval(() => {
      setFloat(prev => (prev + 0.5) % 360);
    }, 20);

    const rotateInterval = setInterval(() => {
      setRotate(prev => (prev + 0.3) % 360);
    }, 30);

    return () => {
      clearInterval(floatInterval);
      clearInterval(rotateInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden ml-0 lg:ml-[-100px]">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div className="space-y-8 z-10">
            <div className="space-y-4">
              <h1 className="text-[35px] lg:text-4xl font-light text-white leading-tight text-center lg:text-left">
                Let’s Start The
                <span className="ml-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Conversation
                </span>
              </h1>

            <p
              className="mb-4 text-[17px] leading-relaxed text-gray-300 text-justify"
              style={{ textAlign: "justify" }}
            >                Empowering businesses with cutting-edge VoIP solutions that transform communication, enhance collaboration, and drive growth in the digital age.
                With scalable infrastructure, crystal-clear call quality, advanced analytics, and seamless integrations, we deliver a communication experience designed for speed, reliability, and global reach.              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                style={{ width: "202px" }} onClick={onContactClick}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold squared-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2" >
                  Get Started
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button onClick={onContactClick} className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold squared-full border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2" >
                  Get Connected
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 text-blue-200">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm">Projects Delivered</div>
              </div>

              <div className="w-px h-12 bg-blue-400/30" />

              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>

          </div>

          {/* Right Side Animated Design */}
          <div className="relative h-[600px] hidden lg:block ml-[100px] mt-[-80px]">
            {/* Central Orb */}
            <div
              className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(-50%, calc(-50% + ${Math.sin(float * Math.PI / 180) * 20}px))`
              }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-3xl opacity-60 animate-pulse" />
                <div className="absolute inset-8 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl">
                  <Globe className="w-24 h-24 text-white" style={{
                    transform: `rotate(${rotate}deg)`
                  }} />
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            {[
              { Icon: Mail, color: 'text-cyan-300' },
              { Icon: MessageSquare, color: 'text-blue-300' },
              { Icon: Phone, color: 'text-indigo-300' },
              { Icon: Users, color: 'text-purple-300' },
              { Icon: Rocket, color: 'text-pink-300' },
              { Icon: Heart, color: 'text-rose-300' }
            ].map((item, i) => {
              const angle = (i * 60 + rotate * 0.5) * Math.PI / 180;
              const radius = 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const IconComponent = item.Icon;

              return (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                >
                  <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg">
                    <IconComponent className={`w-8 h-8 ${item.color}`} />
                  </div>
                </div>
              );
            })}

            {/* Decorative Circles */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-32 left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}
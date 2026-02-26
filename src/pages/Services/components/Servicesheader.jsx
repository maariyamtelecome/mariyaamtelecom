import { useState } from 'react';
import { Phone, Wifi } from 'lucide-react';

export default function VoIPHeader({ onContactClick }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative min-h-screen w-full bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden "
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }}
    >

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute w-96 h-96 bg-cyan-400 blur-3xl transition-all duration-1000"
          style={{
            top: '10%',
            left: '60%',
            transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
          }}
        />
        <div
          className="absolute w-96 h-96 bg-purple-500 blur-3xl transition-all duration-1000"
          style={{
            bottom: '10%',
            right: '70%',
            transform: `translate(${-mousePos.x * 0.03}px, ${-mousePos.y * 0.03}px)`
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8 z-10 ml-0 lg:ml-[82px]">

            {/* Top Label (same style as second section) */}
            <div style={{ display: "block" }} className="inline-block text-center lg:text-left">
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/30">
                Welcome to Our Service
              </span>
            </div>

            {/* Heading */}
            <h1 style={{ fontWeight: "300" }} className="text-5xl lg:text-4xl text-white leading-relaxing text-center lg:text-left">
              Let’s Start The
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                Conversation
              </span>
            </h1>

            {/* Description */}
            <p
              className="mb-4 text-[17px] leading-relaxed text-gray-300 text-justify"
              style={{ textAlign: "justify" }}
            >
              Empowering businesses with cutting-edge VoIP solutions that transform communication,
              enhance collaboration, and drive growth in the digital age. With scalable infrastructure,
              crystal-clear call quality, advanced analytics, and seamless integrations, we deliver a
              communication experience designed for speed, reliability, and global reach.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button onClick={onContactClick} className="group relative px-8 py-4 bg-cyan-500 text-white font-semibold overflow-hidden transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <button
                onClick={onContactClick}
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105">
                Get Connected
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 text-blue-200">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-blue-300 text-sm">Projects Delivered</div>
              </div>

              <div className="w-px h-12 bg-blue-400/30" />

              <div>
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-blue-300 text-sm">Client Satisfaction</div>
              </div>
            </div>

          </div>


          {/* Right Animated Design - Phone Dialer */}
          <div className="relative h-96 lg:h-full hidden lg:flex items-center justify-center mt-[-70px]">
            <div className="relative perspective-1000">
              {/* Phone Device Mockup */}
              <div className="relative w-80 h-[600px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] shadow-2xl border-8 border-gray-800 overflow-hidden transform rotate-y-5">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20"></div>

                {/* Status Bar */}
                <div className="absolute top-2 left-0 right-0 flex justify-between items-center px-8 text-white text-xs z-10">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-3 bg-white rounded"></div>
                    <div className="w-1 h-3 bg-white rounded"></div>
                    <div className="w-1 h-3 bg-white rounded opacity-60"></div>
                    <div className="w-1 h-3 bg-white rounded opacity-30"></div>
                  </div>
                </div>

                {/* Screen Content */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 pt-10">
                  {/* Call Interface */}
                  <div className="flex flex-col items-center justify-between h-full py-8 px-6">

                    {/* Contact Info */}
                    <div className="text-center space-y-3 animate-slideDown">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto flex items-center justify-center animate-pulse">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white text-xl font-semibold">John Smith</h3>
                        <p className="text-gray-400 text-sm">+44 7476680398</p>
                      </div>
                    </div>

                    {/* Call Status Card */}
                    <div className="w-full bg-gray-700/50 backdrop-blur-sm rounded-2xl p-4 space-y-3 border border-gray-600">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Duration</span>
                        <span className="text-emerald-400 font-mono text-lg font-semibold">00:47</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">Quality</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className={`w-2 h-4 rounded-full ${i <= 3 ? 'bg-emerald-400' : 'bg-gray-600'}`}
                              style={{ height: `${i * 4 + 8}px` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CLI Verified Badge */}
                    <div className="w-full bg-emerald-500/20 backdrop-blur-sm rounded-2xl p-4 border border-emerald-500/50 animate-fadeIn">
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-semibold">CLI Verified</p>
                          <p className="text-emerald-300 text-xs">Caller identity confirmed</p>
                        </div>
                      </div>
                    </div>

                    {/* Call Control Buttons */}
                    <div className="grid grid-cols-3 gap-4 w-full">
                      <button className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors mx-auto">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      </button>
                      <button className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg shadow-red-500/50 animate-pulse mx-auto">
                        <Phone className="w-6 h-6 text-white transform rotate-135" />
                      </button>
                      <button className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors mx-auto">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone Glare Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Signal Indicators */}
              <div className="absolute -left-12 top-20 animate-float">
                <div className="bg-cyan-500/20 backdrop-blur-sm border-2 border-cyan-400 rounded-xl p-3">
                  <Wifi className="w-8 h-8 text-cyan-400" />
                </div>
              </div>

              <div className="absolute -right-12 top-32 animate-float" style={{ animationDelay: '1s' }}>
                <div className="bg-emerald-500/20 backdrop-blur-sm border-2 border-emerald-400 rounded-xl p-3">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>

              <div className="absolute -left-12 bottom-24 animate-float" style={{ animationDelay: '2s' }}>
                <div className="bg-purple-500/20 backdrop-blur-sm border-2 border-purple-400 rounded-xl p-3">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              {/* Particle Effects */}
              <div className="absolute -inset-32 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.4}s`,
                      opacity: 0.4
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-24 fill-white/5">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-5 {
          transform: rotateY(-5deg) rotateX(5deg);
        }
        .rotate-135 {
          transform: rotate(135deg);
        }
      `}</style>
    </div>
  );
}
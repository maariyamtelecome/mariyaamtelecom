import { useState, useEffect } from 'react';
import { Phone, Radio, Wifi } from 'lucide-react';

export default function VoIPHeader({ onContactClick }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [pulseStates, setPulseStates] = useState([true, false, true]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseStates(prev => [
        !prev[0],
        !prev[1],
        !prev[2]
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left Content */}
          <div className="space-y-8 z-10 ml-0 lg:ml-[82px]">
            <div style={{ display: "block" }} className="inline-block text-center lg:text-left">
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/30">
                About Our Company
              </span>
            </div>

            <h1 className="text-[35px] lg:text-4xl font-light text-white leading-tight text-center lg:text-left">
              Connecting <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300"> conversations worldwide
              </span>
            </h1>

            <p
              className="mb-4 text-[17px] leading-relaxed text-gray-300 text-justify"
              style={{ textAlign: "justify" }}
            >              Maryaam Telecom is committed to redefining the future of business communication. We combine powerful VoIP technology with world-class reliability to help companies connect with customers and teams effortlessly. Our mission is to provide secure, scalable, and high-quality voice solutions backed by 24/7 expert support.            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button onClick={onContactClick} className="group relative px-8 py-4 bg-cyan-500 text-white font-semibold overflow-hidden transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2" >
                  Get Started
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
                onClick={onContactClick}
              >
                Get Connected
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 text-blue-200">
              <div className="text-white">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-300 text-sm">Global Clients</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-blue-300 text-sm">Uptime</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-blue-300 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Right Animated Design */}
          <div className="hidden lg:flex relative h-96 mt-[-50px] lg:h-full items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Glassmorphic Container */}
              <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl">

                {/* Central Hub with Glow Effect */}
                <div className="relative flex items-center justify-center mb-8">
                  {/* Outer Glow Rings */}
                  <div className="absolute w-48 h-48 rounded-full bg-cyan-500/20 animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute w-40 h-40 rounded-full bg-cyan-400/30 animate-pulse" />

                  {/* Main Hub */}
                  <div className="relative w-32 h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                    <div className="absolute inset-2 bg-gradient-to-br from-cyan-300 to-blue-600 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
                    <Phone className="relative z-10 w-16 h-16 text-white drop-shadow-lg" strokeWidth={2} />
                  </div>
                </div>

                {/* Network Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Wifi, color: 'from-purple-400 to-indigo-500', delay: '0s' },
                    { icon: Radio, color: 'from-pink-400 to-rose-500', delay: '0.2s' },
                    { icon: Phone, color: 'from-emerald-400 to-teal-500', delay: '0.4s' },
                    { icon: Wifi, color: 'from-orange-400 to-red-500', delay: '0.6s' },
                    { icon: Radio, color: 'from-cyan-400 to-blue-500', delay: '0.8s' },
                    { icon: Phone, color: 'from-violet-400 to-purple-500', delay: '1s' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`relative group cursor-pointer transition-all duration-500 hover:scale-110`}
                      style={{ animationDelay: item.delay }}
                    >
                      {/* Card Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />

                      {/* Card */}
                      <div className={`relative h-24 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg transform transition-all duration-500 ${pulseStates[i % 3] ? 'scale-105' : 'scale-100'}`}>
                        <item.icon className="w-8 h-8 text-white drop-shadow" />
                      </div>

                      {/* Connection Dots */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: item.delay }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Status Bar */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Network Status</span>
                    <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      Active
                    </span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-pulse" style={{ width: '85%' }} />
                  </div>

                  <div className="flex justify-between text-xs text-blue-300">
                    <span>Bandwidth</span>
                    <span>85% Available</span>
                  </div>
                </div>

                {/* Floating Orbs */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 rounded-full animate-pulse"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        background: `radial-gradient(circle, ${['#06b6d4', '#a855f7', '#ec4899', '#10b981'][i % 4]} 0%, transparent 70%)`,
                        animationDelay: `${i * 0.4}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* External Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/50 animate-bounce" style={{ animationDuration: '3s' }}>
                <Radio className="w-8 h-8 text-white" />
              </div>

              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/50 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
                <Wifi className="w-8 h-8 text-white" />
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
    </div>
  );
}
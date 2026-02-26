import { Phone, Wifi, Signal, Globe2, Radio, Headphones, User } from 'lucide-react';

const VoIPLandingHeader = ({onContactClick }) => {

  const countries = [
    { code: "us", name: "United States" },
    { code: "gb", name: "United Kingdom" },
    { code: "ca", name: "Canada" },
    { code: "au", name: "Australia" },
    { code: "de", name: "Germany" },
    { code: "fr", name: "France" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-600/30 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Floating Feature Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[80px] right-32 animate-float" style={{ animationDelay: '1s' }}>
          <Signal className="w-6 h-6 text-blue-400/40" fill="currentColor" />
        </div>
        <div className="absolute bottom-32 left-40 animate-float" style={{ animationDelay: '2s' }}>
          <Wifi className="w-7 h-7 text-purple-400/40" fill="currentColor" />
        </div>
        <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '1.5s' }}>
          <Radio className="w-6 h-6 text-pink-400/40" fill="currentColor" />
        </div>
        <div className="absolute bottom-40 right-[580px] animate-float" style={{ animationDelay: '0.5s' }}>
          <Headphones className="w-8 h-8 text-cyan-400/40" fill="currentColor" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 mt-[-40px] ml-0 md:ml-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

          {/* Left Side Content */}
          <div style={{ marginLeft: "21px" }} className="space-y-8 animate-slideInLeft mt-6 text-center lg:text-left">

            <h1 className="text-4xl md:text-3xl font-default text-white leading-tight whitespace-normal" style={{ fontSize: "35px", fontWeight: "300" }}>
              The Future Of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow to-yellow-400">
                Communication
              </span>
            </h1>

            <p className="mb-4 text-[17px] leading-relaxed text-gray-300 text-justify" style={{ textAlign: "justify" }}>
              Maryaam Telecom delivers crystal-clear VoIP calling built for modern businesses. Our platform makes it easy to connect teams across locations with HD voice quality, smart call routing, and effortless scalability.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <button className="group px-8 py-4 bg-gradient-to-r from-emerald-400 to-teal-400 
                       text-blue-950 font-semibold text-lg 
                       hover:shadow-2xl hover:shadow-emerald-400/50 
                       transition-all duration-300 hover:scale-105 
                       flex items-center gap-2"
                onClick={onContactClick}
              >
                Get Connected
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm 
                       border-2 border-emerald-400 text-white 
                       font-semibold text-lg 
                       hover:bg-white/20 transition-all duration-300 
                       hover:scale-105 w-[214px]"
                onClick={onContactClick}
              >
                Request Test
              </button>
            </div>

            {/* Country Flags */}
            <div className="pt-18">
              <p className="text-blue-300 text-sm font-semibold mb-6">
                Available in 30+ Countries
              </p>

              <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className="w-[72px] h-[48px] bg-white/10 backdrop-blur-sm 
                     border border-emerald-400/30 rounded-lg 
                     flex items-center justify-center cursor-pointer
                     hover:scale-110 hover:border-emerald-400 
                     transition-all duration-300
                     hover:shadow-lg hover:shadow-emerald-400/30"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    title={country.name}
                  >
                    <img
                      src={`https://flagcdn.com/w80/${country.code}.png`}
                      alt={country.name}
                      className="w-[64px] h-[40px] object-cover rounded"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>


          {/* Right Side - Interactive Infographic */}
          <div className="
  hidden 
  lg:flex 
  relative h-[500px] animate-slideInRight items-center justify-center 
  mt-[50px] ml-[80px]
">
            <div className="relative w-[500px] h-[550px]">

              {/* Main Visual - Wave Communication Flow */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">

                {/* Top Section - User/Source */}
                <div className="relative z-20">
                  <div className="bg-gradient-to-br from-emerald-400 to-teal-500 w-[100px] h-[100px] flex items-center justify-center shadow-2xl shadow-emerald-400/50 relative overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <User className="w-16 h-16 text-white" />
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full animate-ping"></div>
                  <p className="text-center text-white font-bold mt-4 text-lg">Your Voice</p>
                </div>

                {/* Connection Flow Visualization */}
                <div className="relative w-full h-48 flex items-center justify-center">
                  {/* Vertical Flow Lines */}
                  <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-emerald-400 via-cyan-400 to-purple-400 transform -translate-x-1/2 animate-pulse"></div>

                  {/* Data Packets Flowing */}
                  <div className="absolute left-1/2 top-0 w-4 h-4 bg-emerald-400 rounded-full transform -translate-x-1/2 animate-flow-down shadow-lg shadow-emerald-400/50"></div>
                  <div className="absolute left-1/2 top-0 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 animate-flow-down shadow-lg shadow-cyan-400/50" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute left-1/2 top-0 w-4 h-4 bg-purple-400 rounded-full transform -translate-x-1/2 animate-flow-down shadow-lg shadow-purple-400/50" style={{ animationDelay: '2s' }}></div>

                  {/* Process Steps */}
                  <div
                    className="absolute left-[50px] top-[10px] transform -translate-y-1/2"
                    style={{ animationDelay: '0.5s' }}
                  >
                    <div className="bg-white/10 backdrop-blur-xl border-2 border-emerald-400 
                  rounded-xl p-3 w-36 shadow-xl 
                  hover:scale-105 transition-transform">

                      <Signal className="w-6 h-6 text-emerald-400 mb-1.5" />

                      <p className="text-white font-bold text-[11px]">Signal Processing</p>
                      <p className="text-emerald-400 text-[11px] mt-0.5">Converting audio</p>
                    </div>
                  </div>


                  <div
                    className="absolute right-0 top-1/2 transform -translate-y-1/2"
                    style={{ animationDelay: '0.8s' }}
                  >
                    <div className="bg-white/10 backdrop-blur-xl border-2 border-cyan-400 
                  rounded-xl p-3 w-36 shadow-xl 
                  hover:scale-105 transition-transform">

                      <Wifi className="w-6 h-6 text-cyan-400 mb-1.5" />

                      <p className="text-white font-bold text-[11px]">Network Transfer</p>
                      <p className="text-cyan-400 text-[11px] mt-0.5">&lt;20ms latency</p>
                    </div>
                  </div>


                  <div
                    className="absolute left-[50px] bottom-[20%] transform translate-y-1/2"
                    style={{ animationDelay: '1.1s' }}
                  >
                    <div className="bg-white/10 backdrop-blur-xl border-2 border-purple-400 
                  rounded-xl p-3 w-36 shadow-xl 
                  hover:scale-105 transition-transform">

                      <Radio className="w-6 h-6 text-purple-400 mb-1.5" />

                      <p className="text-white font-bold text-[11px]">HD Quality</p>
                      <p className="text-purple-400 text-[11px] mt-0.5">Crystal clear</p>
                    </div>
                  </div>

                </div>

                {/* Bottom Section - Recipient */}
                <div className="relative z-20">
                  <p className="text-center text-white font-bold mb-4 text-lg">Global Reach</p>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-[100px] h-[100px] flex items-center justify-center shadow-2xl shadow-purple-400/50 relative overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                    <Globe2 className="w-16 h-16 text-white" />
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-400 rounded-full animate-ping"></div>
                </div>

              </div>

              {/* Floating Stats Boxes */}
              <div className="absolute -left-[-350px] top-[100px]" style={{ animationDelay: '1.1s' }}>
                <div className="bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 backdrop-blur-xl 
                  border-2 border-emerald-400 rounded-xl 
                  p-3 shadow-2xl hover:scale-105 transition-transform">

                  <p className="text-emerald-400 text-3xl font-bold">99.9%</p>
                  <p className="text-white text-xs font-semibold mt-0.5">Uptime</p>

                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div
                        key={i}
                        className="w-1.5 bg-emerald-400 rounded-full"
                        style={{ height: `${i * 4}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>


              <div className="absolute -right-[120px] top-[160px]" style={{ animationDelay: '1s' }}>
                <div className="bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 backdrop-blur-xl 
                  border-2 border-cyan-400 rounded-xl 
                  p-3 shadow-2xl hover:scale-105 transition-transform">

                  <p className="text-cyan-400 text-3xl font-bold">20ms</p>
                  <p className="text-white text-xs font-semibold mt-0.5">Latency</p>

                  <div className="w-10 h-0.5 bg-cyan-400 rounded-full mt-1.5 animate-pulse"></div>
                </div>
              </div>


              <div className="absolute -left-[-340px] bottom-[120px]" style={{ animationDelay: '2s' }}>
                <div className="bg-gradient-to-br from-purple-400/20 to-purple-600/20 backdrop-blur-xl 
                  border-2 border-purple-400 rounded-xl 
                  p-3 shadow-2xl hover:scale-105 transition-transform">

                  <p className="text-purple-400 text-3xl font-bold">150+</p>
                  <p className="text-white text-xs font-semibold mt-0.5">Countries</p>

                  <div className="flex gap-1 mt-1">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"></div>
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>
              </div>


              <div className="absolute -right-[100px] bottom-[160px]" style={{ animationDelay: '1.5s' }}>
                <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-xl 
                  border-2 border-yellow-400 rounded-xl 
                  p-3 shadow-2xl hover:scale-105 transition-transform">

                  <p className="text-yellow-400 text-3xl font-bold">HD</p>
                  <p className="text-white text-xs font-semibold mt-0.5">Quality</p>

                  <Headphones className="w-6 h-6 text-yellow-400 mt-1.5" />
                </div>
              </div>


              {/* Decorative Elements */}
              <div className="absolute top-10 left-10 w-20 h-20 border-4 border-emerald-400/30 transform rotate-45 animate-spin-slow"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border-4 border-purple-400/30 transform rotate-12 animate-spin-slow" style={{ animationDelay: '1s' }}></div>

              {/* Particle Effects */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/50 rounded-full animate-ping"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: '3s'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        @keyframes flow-down {
          0% {
            top: 0;
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 1s ease-out;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-flow-down {
          animation: flow-down 3s ease-in-out infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default VoIPLandingHeader;
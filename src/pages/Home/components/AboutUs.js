import { Globe, Users, Zap } from "lucide-react";

export default function AboutUs() {
  const cards = [
    {
      icon: <Globe size={24} className="text-yellow-400" />,
      title: "Our Mission",
      content:
        "To provide seamless, reliable, and secure VoIP communication solutions globally, empowering businesses to connect efficiently.",
    },
    {
      icon: <Users size={24} className="text-yellow-400" />,
      title: "Our Vision",
      content:
        "To be the most trusted and innovative VoIP provider, delivering crystal-clear communication with cutting-edge technology.",
    },
    {
      icon: <Zap size={24} className="text-yellow-400" />,
      title: "Our Values",
      content:
        "Innovation, reliability, transparency, and a customer-first approach drive everything we do.",
    },
  ];

  return (
    <section className="bg-white py-16 font-inter">
      <div className="max-w-7xl mx-auto px-6 space-y-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-[300] mb-6 leading-tight">
              <span className="text-gray-800">About Our </span>
              <span className="text-orange-500">VoIP Services</span>
            </h2>

            <p className="mb-4 text-[17px] leading-relaxed text-gray-700 text-justify" style={{ textAlign: "justify" }}>             
              We provide enterprise-grade VoIP communication solutions designed
              to deliver exceptional call quality, high reliability, and secure
              global connectivity for modern businesses. Our advanced network
              infrastructure supports low-latency routing, intelligent traffic
              management, and carrier-grade redundancy to ensure uninterrupted
              communication across regions. Whether you operate a growing
              startup, an established enterprise, or a telecom reseller, our
              scalable VoIP services adapt seamlessly to your operational needs,
              enabling efficient collaboration, cost optimization, and
              consistent performance while maintaining complete transparency
              and control.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src="/assets/7055152.jpg"
              alt="VoIP Illustration"
              className="w-full rounded-xl"
            />
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border-2 border-yellow-400 rounded-xl p-6 space-y-4 hover:shadow-lg transition"
            >
              <div className="bg-yellow-50 p-3 rounded-full w-fit">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.content}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

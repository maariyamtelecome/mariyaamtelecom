import { Settings, ShieldCheck, Globe } from "lucide-react";

export default function Servicescontent() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-32">

        {/* Section 1: CLI Routes */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-12">
          
          {/* Content */}
          <div className="space-y-6 max-w-xl order-1">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-50 p-3 rounded-lg inline-flex">
                <Globe className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl text-gray-900">
                CLI Routes
              </h3>
            </div>

            <p className="mb-4 text-[17px] leading-relaxed text-gray-700 text-justify">
              Our CLI routes ensure accurate caller ID delivery with consistently
              high answer rates and excellent call clarity across multiple
              destinations. By providing verified and trusted CLI routing,
              businesses can build credibility with customers and significantly
              improve engagement levels. These routes are ideal for organizations
              that depend on strong caller identity to enhance connection success
              and brand recognition.
            </p>

            <p className="mb-4 text-[17px] leading-relaxed text-gray-700 text-justify">
              Leveraging optimized carrier paths, intelligent routing logic, and
              real-time performance monitoring, we maintain stable connections
              with minimal call failures. Continuous quality checks and traffic
              balancing allow us to deliver dependable performance even during
              peak call volumes. Our CLI routes are well-suited for enterprises,
              call centers, and service providers seeking reliable outbound voice
              communication at scale.
            </p>
          </div>

          {/* Image */}
          <div className="w-full order-2 md:order-2">
            <img
              src="/assets/5159816.jpg"
              alt="CLI Routes"
              className="rounded-2xl w-full object-cover mt-6 md:mt-0"
            />
          </div>
        </div>

        {/* Section 2: CC Routes */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-12">
          
          {/* Content */}
          <div className="space-y-6 max-w-xl order-1 md:order-2">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-3 rounded-lg inline-flex">
                <ShieldCheck className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl text-gray-900">
                CC Routes
              </h3>
            </div>

            <p className="mb-4 text-[17px] leading-relaxed text-gray-700 text-justify">
              Our CC routes are specifically designed to support high-volume
              calling environments with stable connectivity and low latency.
              Built on carrier-grade infrastructure, these routes deliver
              consistent audio quality and reliable performance for contact
              centers, BPOs, and enterprise-level communication operations.
            </p>

            <p className="mb-4 text-[17px] leading-relaxed text-gray-700 text-justify">
              We prioritize route optimization, redundancy planning, and strict
              quality control to minimize call drops and maximize completion
              rates. Continuous testing, traffic analysis, and proactive
              monitoring allow us to maintain dependable performance across all
              supported regions. This ensures uninterrupted communication and
              operational efficiency even during heavy call traffic periods.
            </p>
          </div>

          {/* Image */}
          <div className="w-full order-2 md:order-1">
            <img
              src="/assets/7055173.jpg"
              alt="CC Routes"
              className="rounded-2xl w-full object-cover mt-6 md:mt-0"
            />
          </div>
        </div>

        {/* Section 3: Dialer Solutions */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-12">
          
          {/* Content */}
          <div className="space-y-6 max-w-xl order-1">
            <div className="flex items-center gap-3">
              <div className="bg-purple-50 p-3 rounded-lg inline-flex">
                <Settings className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl text-gray-900">
                Dialer Solutions
              </h3>
            </div>

            <p className="mb-4 text-[17px] leading-relaxed text-gray-700 text-justify">
              Our advanced dialer solutions are built to maximize agent
              productivity and improve overall call efficiency. Supporting
              predictive, progressive, and manual dialing modes, our platforms
              adapt to a wide range of business use cases. These solutions help
              reduce idle time, improve contact rates, and enhance campaign
              performance.
            </p>

            <p className="mb-4 text-[17px] leading-relaxed text-gray-700 text-justify">
              Equipped with real-time analytics, flexible configuration options,
              and seamless VoIP integration, our dialer systems provide full
              operational visibility and control. Businesses can easily scale
              their calling operations while maintaining compliance, call
              quality, and performance standards. This enables efficient growth
              without compromising customer experience or operational stability.
            </p>
          </div>

          {/* Image */}
          <div className="w-full order-2 md:order-2">
            <img
              src="/assets/6247730.jpg"
              alt="Dialer Solutions"
              className="rounded-2xl w-full object-cover mt-6 md:mt-0"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
import { PhoneCall, ShieldCheck, Globe } from "lucide-react";

export default function AboutUsSections() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-32">

        {/* Section 1: About Us & Working Pattern */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-12">
          
          {/* Content */}
          <div className="space-y-6 max-w-xl order-1">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-50 p-3 rounded-lg inline-flex">
                <Globe className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl text-gray-900">
                About Us & Our Working Pattern
              </h3>
            </div>

            <p className="mb-4 text-[17px] leading-relaxed text-gray-700 text-justify">
              We are a leading VoIP solutions provider, dedicated to connecting
              businesses and individuals across the globe with reliable,
              high-performance communication services. Our working pattern is
              built around efficiency, innovation, and operational precision,
              ensuring that every call, message, and connection meets modern
              business demands. By combining advanced VoIP infrastructure with
              intelligent routing technologies, we help organizations maintain
              seamless communication across multiple regions and platforms.
            </p>

            <p className="mb-4 text-[17px] leading-relaxed text-gray-700 text-justify">
              Through streamlined workflows, automated monitoring, and proactive
              system optimization, we maintain consistent service quality at all
              times. Our team continuously evaluates performance metrics,
              network health, and customer feedback to refine processes and
              eliminate disruptions. This structured approach allows us to
              deliver scalable, dependable communication solutions that evolve
              alongside our clients’ growing business needs.
            </p>
          </div>

          {/* Image */}
          <div className="w-full order-2 md:order-2">
            <img
              src="/assets/6180780.jpg"
              alt="About Us"
              className="rounded-2xl w-full object-cover mt-6 md:mt-0"
            />
          </div>
        </div>

        {/* Section 2: Service Quality */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-12">
          
          {/* Content */}
          <div className="space-y-6 max-w-xl order-1 md:order-2">
            <div className="flex items-center gap-3">
              <div className="bg-blue-50 p-3 rounded-lg inline-flex">
                <ShieldCheck className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl text-gray-900">
                Service Quality
              </h3>
            </div>

            <p className="mb-4 text-[17px] leading-relaxed text-gray-700 text-justify">
              Our VoIP services are engineered to deliver crystal-clear call
              quality with minimal latency, even during peak usage periods.
              By leveraging carrier-grade infrastructure, optimized regional
              routing, and redundant network paths, we ensure stable and
              uninterrupted communication for businesses of all sizes. Every
              call is supported by real-time performance monitoring to maintain
              consistent audio clarity and reliability.
            </p>

            <p className="mb-4 text-[17px] leading-relaxed text-gray-700 text-justify">
              From high-volume customer service operations to internal team
              collaboration and conference calling, our solutions adapt to
              diverse communication needs. Continuous platform updates,
              routine quality audits, and proactive troubleshooting help us
              identify potential issues before they impact users. This
              commitment to excellence enables us to deliver superior service
              quality and a dependable communication experience across every
              interaction.
            </p>
          </div>

          {/* Image */}
          <div className="w-full order-2 md:order-1">
            <img
              src="/assets/5_communication02.jpg"
              alt="Service Quality"
              className="rounded-2xl w-full object-cover mt-6 md:mt-0"
            />
          </div>
        </div>

        {/* Section 3: Support & Assistance */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-12">
          
          {/* Content */}
          <div className="space-y-6 max-w-xl order-1">
            <div className="flex items-center gap-3">
              <div className="bg-purple-50 p-3 rounded-lg inline-flex">
                <PhoneCall className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl text-gray-900">
                Support & Assistance
              </h3>
            </div>

            <p className="mb-4 text-[17px] leading-relaxed text-gray-700 text-justify">
              We provide round-the-clock customer support to ensure uninterrupted
              communication and complete peace of mind for our clients. Our
              dedicated support teams and account managers are available 24/7
              to handle technical issues, configuration requests, and service
              inquiries with speed and precision. This proactive support model
              minimizes downtime and keeps business operations running smoothly.
            </p>

            <p className="mb-4 text-[17px] leading-relaxed text-gray-700 text-justify">
              Whether addressing routine questions or managing critical service
              incidents, our experts deliver clear guidance and effective
              solutions tailored to each client’s environment. We focus on
              long-term partnerships by offering consistent assistance,
              transparent communication, and ongoing optimization support.
              This commitment helps clients achieve reliable performance and
              a seamless VoIP experience at every stage of their journey.
            </p>
          </div>

          {/* Image */}
          <div className="w-full order-2 md:order-2">
            <img
              src="/assets/6247730.jpg"
              alt="Support & Assistance"
              className="rounded-2xl w-full object-cover mt-6 md:mt-0"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
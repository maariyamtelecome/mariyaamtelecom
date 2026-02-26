export default function ContentSection2() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">

        {/* MAIN HEADING */}
        <div className="text-center">
          <h2 className="text-4xl md:text-3xl font-default text-black leading-tight whitespace-normal" style={{ fontSize: "35px" }}>
            Advanced Dialer Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-blue-700">
              Modern Businesses
            </span>
          </h2>
        </div>
        {/* SERVICE 1 — IMAGE LEFT, CONTENT RIGHT */}
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="md:w-1/2">
            <img
              src="/assets/5132732.jpg"
              alt="Predictive Dialer Solutions"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>

          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl mb-4 text-gray-900" style={{fontWeight:"300" }}>
              Predictive Dialer Solutions
            </h3>

            <p className="mb-5 text-[17px] leading-relaxed text-justify">
              Our predictive dialer solutions are designed to dramatically
              increase outbound calling efficiency by intelligently dialing
              multiple numbers at once and connecting agents only to live,
              answered calls. By eliminating time spent on unanswered calls,
              busy tones, and voicemails, agents remain consistently engaged,
              resulting in higher contact rates and improved campaign outcomes.
              This approach allows organizations to reach more customers in
              less time while maintaining operational control.
            </p>

            <p className="text-[17px] leading-relaxed text-justify">
              Advanced predictive algorithms continuously adapt dialing speeds
              based on real-time call results, agent availability, and campaign
              objectives. This ensures balanced workloads, regulatory
              compliance, and optimal call pacing even during peak hours.
              Integrated analytics, CRM synchronization, and call monitoring
              provide full visibility into performance trends, enabling teams
              to refine strategies, improve agent efficiency, and maximize
              overall return on investment.
            </p>
          </div>
        </div>

        {/* SERVICE 2 — CONTENT LEFT, IMAGE RIGHT */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-14">
          <div className="md:w-1/2">
            <img
              src="/assets/3704249.jpg"
              alt="Auto Dialer Solutions"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>

          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl mb-4 text-gray-900" style={{fontWeight:"300" }}>
              Auto Dialer Solutions
            </h3>

            <p className="mb-5 text-[17px] leading-relaxed text-justify">
              Our auto dialer solutions streamline outbound calling by
              automatically dialing numbers from predefined contact lists and
              connecting agents only when calls are successfully answered.
              This removes manual dialing inefficiencies, reduces agent fatigue,
              and ensures a smooth, uninterrupted calling workflow throughout
              each campaign. Businesses benefit from improved consistency and
              predictable outreach performance.
            </p>

            <p className="text-[17px] leading-relaxed text-justify">
              Designed for flexibility and ease of use, auto dialers support
              multiple dialing modes, real-time monitoring, and supervisor
              controls to maintain call quality and compliance standards.
              Integrated CRM tools, call disposition tracking, and detailed
              reporting dashboards provide actionable insights that help
              organizations optimize scripts, improve conversion rates, and
              continuously enhance customer engagement strategies.
            </p>
          </div>
        </div>

        {/* SERVICE 3 — IMAGE LEFT, CONTENT RIGHT */}
        <div className="flex flex-col md:flex-row items-center gap-14">
          <div className="md:w-1/2">
            <img
              src="/assets/8836574.jpg"
              alt="Call Center Dialer Solutions"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>

          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl mb-4 text-gray-900" style={{fontWeight:"300" }}>
              Call Center Dialer Solutions
            </h3>

            <p className="mb-5 text-[17px] leading-relaxed text-justify">
              Our call center dialer solutions deliver a powerful and unified
              platform for managing inbound and outbound communications with
              accuracy and efficiency. Intelligent call routing, IVR systems,
              and advanced queue management ensure customers are connected to
              the right agents quickly, reducing wait times and improving
              overall service quality across all touchpoints.
            </p>

            <p className="text-[17px] leading-relaxed text-justify">
              Built to scale alongside growing operations, the platform
              supports multiple campaigns, blended calling environments, and
              distributed agent teams. Real-time analytics, call recording,
              quality monitoring, and comprehensive reporting enable
              organizations to optimize workflows, enhance agent performance,
              strengthen customer relationships, and maintain consistent
              service standards as business demands evolve.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
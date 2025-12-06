import HeroVideo from "@/components/HeroVideo";
import FloatingLogo from "@/components/FloatingLogo";

export default function HomePage() {
  return (
    <main>
      <h1 className="sr-only">
        Affordable AI, Cloud, Automation & DevSecOps Consulting
      </h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Daryl Smith Consulting",
            url: "https://darylsmithconsulting.com",
            image: "https://darylsmithconsulting.com/FullLogo.png",
            description:
              "Affordable AI, Cloud, Automation, DevSecOps, Release Management and CMS/Medicaid modernization consulting.",
            areaServed: "United States",
            founder: "Daryl G. Smith",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Brandon",
              addressRegion: "MS",
            },
          }),
        }}
      />
      {/* Floating logo & tagline (fixed + clickable) */}
      <FloatingLogo />

      <HeroVideo />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-10 space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          AI, Cloud, and DevSecOps Consulting for Small Businesses
        </h2>
        <div className="space-y-4">
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            Daryl Smith Consulting partners with small to mid-sized businesses
            to make AI practical and measurable. I help owners clarify the
            problems AI should solve, map data readiness, and design affordable
            AI solutions that automate support, streamline back-office tasks,
            and surface insights your team can trust. From picking the right
            models to building guardrails and human-in-the-loop workflows, I
            translate hype into usable tooling that fits your budget, security
            posture, and pace of change. The goal is to let your people focus on
            customers while automation takes care of repeatable work.
          </p>
          <div
            className="h-px max-w-3xl"
            style={{ backgroundColor: "#37CC97" }}
          />
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            Cloud migration consulting is often less about tools and more about
            sequencing. I assess what should move, what should stay, and how to
            modernize without disrupting revenue. We design landing zones, IaC
            patterns, and cost controls that keep operations lean. Paired with
            DevSecOps consulting, I help you standardize pipelines, embed
            security scanning, and tighten release management so changes ship
            faster with fewer surprises. Whether you&apos;re adopting
            containers, serverless, or managed services, I guide teams through
            runbooks, playbooks, and dashboards that make your environments
            observable and resilient.
          </p>
          <div
            className="h-px max-w-3xl"
            style={{ backgroundColor: "#37CC97" }}
          />
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            My background includes delivering CMS, Medicaid, and other federal
            program platforms, so compliance and auditability come baked in. I
            can help you navigate data handling standards, vendor reviews, and
            risk assessments while keeping delivery schedules realistic. If you
            need lightweight governance, I set up clear release gates, artifact
            traceability, and incident response rituals that match the size of
            your team. The result is a practical operating model: AI and cloud
            capabilities you can afford today, a DevSecOps foundation that
            scales, and a partner who has shipped in regulated environments and
            knows how to keep stakeholders confident.
          </p>
        </div>
      </section>

      <section className="container py-20 space-y-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight"></h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto"></p>
      </section>
    </main>
  );
}

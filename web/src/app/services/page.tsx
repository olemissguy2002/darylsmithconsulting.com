import Link from "next/link";
import PageHeroVideo from "@/components/PageHeroVideo";
import FloatingLogo from "@/components/FloatingLogo";

const serviceTiles = [
  {
    title: "AI & Machine Learning",
    summary: "Strategy, data readiness, and production-grade applied AI that respects governance from day one.",
    bullets: [
      "Responsible AI assessments & guardrail design",
      "Domain-tuned copilots, RAG, and agentic workflows",
      "Model observability, prompt management, and evals",
    ],
    href: "/services/ai",
  },
  {
    title: "Cloud & Platform",
    summary: "Landing zones, modernization, and SRE operations tailored for regulated teams.",
    bullets: [
      "Migrations with cost and compliance controls",
      "Kubernetes, serverless, and edge architectures",
      "24/7 observability, incident response, and FinOps",
    ],
    href: "/services/cloud",
  },
  {
    title: "Web Experience",
    summary: "High-performing marketing sites and web apps that weave brand, accessibility, and conversion.",
    bullets: [
      "Custom Next.js / React builds with CMS integrations",
      "Design systems, localization, and SEO baked in",
      "Secure hosting, analytics, and growth experiments",
    ],
    href: "/services/web",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Floating logo & tagline (fixed + clickable) */}
      <FloatingLogo />

      <PageHeroVideo
        folder="services"
        title="Services"
        subtitle="AI/ML • Cloud • Automation — delivered with discipline and speed."
        fullScreen={false}
      />

      <section className="container mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 text-gray-200">
        <div className="space-y-10">
          <div className="space-y-3 max-w-4xl">
            <h1 className="text-4xl font-semibold text-white">
              AI, Cloud, and DevSecOps Consulting Services
            </h1>
            <p className="text-gray-300">
              Daryl Smith Consulting delivers AI consulting services, cloud migration services, DevSecOps consulting, and release management services that help teams move faster without sacrificing governance. We build pipelines with GitHub Advanced Security, CodeQL, SBOM, and CI/CD practices so your software supply chain is observable, secure, and ready to scale.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl font-semibold text-white">What We Offer</h1>
            <p className="text-gray-300">
              Whether you need an embedded tiger team or a turnkey outcome, every engagement pairs modern engineering discipline with executive-level accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceTiles.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3 hover:border-[#37CC97] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#37CC97]/60"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#37CC97]/70">Service Line</p>
                  <h2 className="text-xl font-semibold text-white mt-2">{service.title}</h2>
                  <p className="text-sm text-gray-400 mt-1">{service.summary}</p>
                </div>
                <ul className="list-disc pl-5 text-white space-y-1">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-sm font-semibold text-[#37CC97]">
                  Dive deeper →
                </span>
              </Link>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#37CC97] transition-colors">
            <h3 className="text-lg font-semibold text-white">How We Work</h3>
            <p className="text-gray-300 mt-2">
              Start with a focused assessment → prioritize gaps → implement a POC (Proof of Concept) for an early win.
              Iterate, automate, and scale while keeping stakeholders informed at every checkpoint.
            </p>
          </div>

          <section
            aria-labelledby="services-faq-heading"
            className="mt-10 space-y-4 text-gray-300"
          >
            <h2 id="services-faq-heading" className="text-2xl font-semibold text-white">
              Services FAQ
            </h2>
            <details className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
              <summary className="text-white font-semibold">
                What is DevSecOps?
              </summary>
              <p className="mt-2">
                DevSecOps weaves security into daily delivery by standardizing CI/CD pipelines, automating code scanning, tightening release management, and giving teams clear guardrails so changes ship faster with less risk.
              </p>
            </details>
            <details className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
              <summary className="text-white font-semibold">
                How does a cloud migration engagement work?
              </summary>
              <p className="mt-2">
                We inventory your workloads, design a landing zone, and sequence migrations to minimize downtime, then layer in observability, cost controls, and playbooks so the cloud runs predictably after cutover.
              </p>
            </details>
            <details className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
              <summary className="text-white font-semibold">
                Do you work with small businesses?
              </summary>
              <p className="mt-2">
                Yes—our services are tailored to small and mid-sized teams, focusing on pragmatic automation, clear release processes, and right-sized security that fits your budget and pace.
              </p>
            </details>
            <details className="bg-white/[0.02] border border-white/10 rounded-lg p-4">
              <summary className="text-white font-semibold">
                Do you support CMS or Medicaid programs?
              </summary>
              <p className="mt-2">
                We have experience delivering for CMS, Medicaid, and other federal programs, including navigating compliance, auditability, and vendor standards while keeping delivery on schedule.
              </p>
            </details>
          </section>
        </div>
      </section>
    </main>
  );
}

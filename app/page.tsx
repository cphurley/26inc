import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Image src="/logo.png" alt="TwentySix Inc" width={180} height={30} priority />
          <div className="hidden gap-6 text-[13px] font-medium tracking-wide text-navy/80 sm:flex">
            <a href="#experience" className="transition-colors hover:text-navy">Projects</a>
            <a href="#services" className="transition-colors hover:text-navy">Services</a>
            <a href="#about" className="transition-colors hover:text-navy">About</a>
            <a href="#contact" className="transition-colors hover:text-navy">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-6 sm:pb-10">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src="/office.png" alt="" fill className="object-cover" priority />
        </div>
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(13,53,87,0.92)_0%,rgba(17,69,113,0.88)_40%,rgba(26,90,148,0.85)_100%)]" />
        {/* Subtle light flare */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 pt-16 sm:pt-20 pb-2 sm:pb-4">
          <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-white/90">
            TwentySix Incorporated
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#5bb8f5]/80">
            25+ Years Experience &middot; Results-Driven Advice &middot; Boutique Consulting
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Strategy. Execution.
            <br />
            <span className="bg-[linear-gradient(90deg,#5bb8f5,#a8d8ff)] bg-clip-text text-transparent">Delivery.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            Founded in 2019 as the continuation of a long independent consulting career,
            TwentySix Incorporated provides hands-on expertise across technology, operations,
            finance, and project management for clients in financial services and beyond.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#0d3557] transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
            >
              Get in Touch
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white/80 transition-all hover:border-white/40 hover:text-white"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-14 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-[#114571] sm:text-3xl">Select Project Experience</h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-[#1a5a94]" />

          <div className="mt-10 space-y-0">
            {[
              {
                industry: "Top-5 Mortgage Servicer",
                title: "M&A Project Management / Regulatory & Compliance",
                details: [
                  { subtitle: "M&A Project Management", text: "Managed sign-to-close process for multiple acquisitions and dispositions. Provided project management for platform migration, system integration, and operational implementation post-close." },
                  { subtitle: "Regulatory & Compliance Advisory", text: "Provided ongoing advisory support across regulatory response, compliance analysis, inter-company pricing reviews, and risk reporting for senior management and the board." },
                ],
              },
              {
                industry: "Global Fortune 500 Manufacturer",
                title: "Predictive Modeling & Analytics",
                detail: "Designed and built predictive scoring models for high-stakes civil litigation, leveraging large-scale research surveys and statistical modeling to evaluate jurors on liability and damages. Provided jury selection, case value estimation, venue analysis, and trial strategy insights across billion-dollar disputes.",
              },
              {
                industry: "Web3/Blockchain Startup",
                title: "On-Chain Data Analytics",
                detail: "Performed data analytics on Web3 projects leveraging on-chain blockchain data to surface insights on user behavior, transaction patterns, and platform performance.",
              },
              {
                industry: "$25B+ Private Equity Firm",
                title: "Investor Portal Enhancements",
                detail: "Continued work from prior CIO role, leading enhancements to the firm's investor portal. Designed and executed front-end improvements and back-end data processing innovations to ensure completeness and accuracy of investor reporting, capital account statements, and distribution workflows.",
              },
            ].map((p, i) => (
              <div key={i} className="group relative flex gap-6 py-6 sm:gap-10">
                {/* Timeline line + dot */}
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full border-2 border-[#1a5a94] bg-white group-hover:bg-[#1a5a94] transition-colors" />
                  {i < 3 && <div className="w-px flex-1 bg-gray-200" />}
                </div>
                {/* Content */}
                <div className="-mt-1 flex-1 pb-2">
                  <h3 className="text-[17px] font-bold text-[#114571]">{p.industry}</h3>
                  {p.detail ? (
                    <>
                      <p className="mt-1 text-[13px] font-medium text-[#2e86c1]">{p.title}</p>
                      <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-gray-500">{p.detail}</p>
                    </>
                  ) : (
                    <div className="mt-1.5 space-y-3">
                      {p.details?.map((d, j) => (
                        <div key={j}>
                          <p className="text-[13px] font-medium text-[#2e86c1]">{d.subtitle}</p>
                          <p className="mt-1 max-w-xl text-[13px] leading-relaxed text-gray-500">{d.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-14 bg-[#f0f4f8] py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-[#114571] sm:text-3xl">Service Offerings</h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-[#1a5a94]" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Technology Strategy & Implementation", desc: "CIO-level guidance on platform selection, vendor evaluation, data architecture, and technology roadmaps — through hands-on implementation, system configuration, and go-live support.", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" /> },
              { title: "Project Management", desc: "End-to-end management of complex initiatives — system implementations, integrations, and multi-year programs.", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /> },
              { title: "Data & Analytics", desc: "Data modeling, reporting design, warehouse strategy, and translation of business needs into data-driven solutions.", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /> },
              { title: "Operations & Accounting", desc: "Process improvement, operational accounting, financial reporting, and back-office optimization.", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /> },
              { title: "Regulatory & Compliance", desc: "Compliance advisory, regulatory response support, risk reporting, and policy review.", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /> },
              { title: "M&A Integration", desc: "Acquisition due diligence, platform integration, TSA design and administration, and post-close operational support.", icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /> },
            ].map((s) => (
              <div key={s.title} className="group relative overflow-hidden rounded-xl bg-[linear-gradient(135deg,#0d3557_0%,#114571_40%,#1a5a94_100%)] p-6 shadow-lg shadow-navy/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/30">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <svg className="h-5 w-5 text-[#5bb8f5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{s.icon}</svg>
                </div>
                <h3 className="mt-4 text-[16px] font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/55">{s.desc}</p>
                <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-white/[0.03]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-14 bg-[linear-gradient(135deg,#0d3557_0%,#114571_40%,#1a5a94_100%)] py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-10 md:grid-cols-[220px_1fr]">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/headshot-v2.png"
                alt="Christopher Hurley"
                width={200}
                height={200}
                className="rounded-xl border-2 border-white/10 shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">About</h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-[#5bb8f5]" />
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/70">
                <p>
                  <span className="font-semibold text-white">Christopher Hurley</span> is
                  the founder, Managing Director, and lead consultant at TwentySix
                  Incorporated. Chris personally leads every engagement, bringing over 25
                  years of hands-on experience across technology, accounting, operations,
                  and project management — supported by a trusted network of associates
                  with expertise across finance, design and development, data analysis,
                  and project management.
                </p>
                <p>
                  Since founding TwentySix Inc in 2019, Chris has delivered engagements
                  spanning M&amp;A project management, regulatory and privacy advisory,
                  predictive litigation modeling, and blockchain data analytics —
                  serving clients across the private equity, mortgage, legal, and
                  financial services industries.
                </p>
                <p>
                  Previously, Chris served as Chief Information
                  Officer at Kayne Anderson Capital Advisors, a $25B+ alternative asset
                  manager, where he led a technology team responsible for
                  data and systems across key functions including accounting, operations,
                  investor relations, and treasury. Prior to that, he founded and ran CPH Consulting Services LLC, which provided
                  technology implementation, project management, operations, and
                  accounting consulting for banking and private equity clients.
                </p>
                <p>
                  Chris began his career at PricewaterhouseCoopers, rising from consultant to
                  Senior Manager over eight years in banking and financial services consulting.
                  He also served as First Vice President and CFO of Capital Markets at
                  IndyMac Bank, managing complex loan accounting, derivatives, and regulatory
                  reporting.
                </p>
                <p>
                  Christopher earned a B.S.E. in Chemical Engineering with a minor in
                  Engineering Management Systems from Princeton University in 1999. In 2006, while at
                  PwC, he completed additional coursework in Accounting,
                  Business Law, and Federal Taxation.
                </p>
                <div className="space-y-3 pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">Core Competencies</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Project Management",
                      "Process Improvement",
                      "M&A Advisory",
                      "IT Strategy & Implementation",
                      "Technical Writing",
                      "Vendor & Tool Analysis",
                    ].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "SQL & Data Analysis",
                      "AI-Augmented Development",
                      "Excel & Data Modeling",
                      "Needs Assessment & Scoping",
                    ].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-14 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-bold text-[#114571] sm:text-3xl">Contact</h2>
          <p className="mt-4 text-2xl font-bold text-gray-900">Let&apos;s work together.</p>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-gray-500">
            Interested in a conversation? Reach out directly.
          </p>
          <a
            href="mailto:cphurley@twentysixinc.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#0d3557,#1a5a94)] px-8 py-3 text-[13px] font-semibold text-white transition-all hover:shadow-lg hover:shadow-navy/20"
          >
            cphurley@twentysixinc.com
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a2d4a] py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-[13px] text-white/50">
          &copy; {new Date().getFullYear()} TwentySix Incorporated
        </div>
      </footer>
    </div>
  );
}

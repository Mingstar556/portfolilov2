import Header from "@/components/Header";
import ThreeScene from "@/components/ThreeScene";
import Cursor from "@/components/Cursor";
import LenisScroll from "@/components/LenisScroll";
import { PROJECTS, STATS, STACK } from "@/data/projects";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink text-white selection:bg-cyan/20">
      <LenisScroll />
      <Cursor />
      <div className="grid-bg" />
      <div className="noise" />
      <Header />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center px-6 md:px-10">
        <ThreeScene />
        <div className="z-10 w-full max-w-7xl pt-24">
          <h1 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-black uppercase leading-tight tracking-tight text-white glow-text">
            Digital<br />Craftsman.
          </h1>
          <p className="mt-6 max-w-md font-mono text-xs uppercase tracking-[0.2em] text-white/60">
            Freelance developer crafting heavy motion, immersive experiences, and high-performance interfaces.
          </p>
        </div>
      </section>

      {/* Stats Marquee */}
      <section className="relative z-10 border-y border-white/5 py-12">
        <div className="flex w-full items-center justify-between px-6 md:px-10">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-2xl font-bold md:text-4xl text-cyan">{s.value}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="relative z-10 px-6 py-24 md:px-10">
        <h2 className="mb-16 font-display text-4xl uppercase tracking-[0.05em] text-white">Selected Works</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <div key={p.id} className="group glass p-8 transition hover:border-cyan/30" data-hover>
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: p.accent }}>{p.year}</span>
                <span className="font-display text-sm font-bold">{p.title}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">{p.tagline}</h3>
              <p className="mb-6 font-mono text-xs leading-relaxed text-white/50">{p.description}</p>
              <div className="flex gap-4">
                {p.stack.map((s) => (
                  <span key={s} className="rounded border border-white/10 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-white/40">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="relative z-10 px-6 py-24 md:px-10">
        <h2 className="mb-12 font-display text-4xl uppercase tracking-[0.05em] text-white">The Arsenal</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {STACK.map((s) => (
            <div key={s} className="glass flex items-center gap-3 rounded-lg p-4 transition hover:border-cyan/40" data-hover>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/80">{s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative z-10 px-6 py-24 md:px-10">
        <h2 className="mb-16 font-display text-4xl uppercase tracking-[0.05em] text-white">How I Work</h2>
        <div className="grid grid-cols-1 gap-px bg-white/5 md:grid-cols-4">
          {[
            { n: "01", t: "Discovery", d: "Scope, constraints, and motion language in a single kickoff." },
            { n: "02", t: "Prototype", d: "A living build on day one — not a deck on slide 47." },
            { n: "03", t: "Build", d: "Component-driven, GPU-aware, and accessible by default." },
            { n: "04", t: "Ship", d: "CI, Vercel, and a handover doc. You own it from minute one." },
          ].map((step) => (
            <div key={step.n} className="bg-ink p-8" data-hover>
              <div className="font-display text-4xl font-bold text-cyan/40">{step.n}</div>
              <h3 className="mt-4 font-display text-xl font-bold text-white">{step.t}</h3>
              <p className="mt-3 font-mono text-xs leading-relaxed text-white/50">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 px-6 py-24 md:px-10">
        <div className="glass relative overflow-hidden rounded-2xl p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-magenta/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan">Available for new work</p>
            <h2 className="mb-6 font-display text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-6xl">
              Let&rsquo;s build<br />something heavy.
            </h2>
            <p className="mb-10 max-w-md font-mono text-sm text-white/60">
              Got a project that needs motion, WebGL, or a developer who won&rsquo;t ship a static page and call it done? Drop a line.
            </p>
            <a
              href="mailto:hello@lgp.dev"
              data-hover
              className="inline-flex items-center gap-3 rounded-full bg-cyan px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-magenta hover:text-white"
            >
              hello@lgp.dev
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-6 py-10 md:px-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <span className="font-display text-xs uppercase tracking-[0.2em] text-white/40">© 2026 LGP · Built with motion</span>
          <div className="flex gap-6">
            {["GitHub", "LinkedIn", "Twitter"].map((s) => (
              <a key={s} href="#" data-hover className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 transition hover:text-cyan">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
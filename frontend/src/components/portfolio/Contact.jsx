import { Reveal } from "./shared";
import { PROFILE } from "../../data/portfolio";
import { ArrowDown, ArrowUpRight, Mail, Linkedin, Phone } from "lucide-react";

const links = [
  { key: "email", label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, Icon: Mail },
  { key: "linkedin", label: "LinkedIn", value: PROFILE.linkedinLabel, href: PROFILE.linkedin, Icon: Linkedin },
  { key: "phone", label: "Phone", value: PROFILE.phone, href: PROFILE.phoneHref, Icon: Phone },
];

export default function Contact({ onDownloadCV }) {
  return (
    <section id="contact" data-testid="contact-section" className="relative border-t border-white/10 px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-blue-400/80">07 / Contact</span>
          <h2 className="mt-6 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tighter text-slate-50 md:text-7xl">
            Let's build <span className="font-serif lowercase italic text-blue-400">something</span>.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            Open to credit research, asset-management analytics and structured-finance roles, and to good conversations even when nothing's on the table. Reach out, I read everything.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <button
            data-testid="contact-download-cv"
            onClick={onDownloadCV}
            className="group inline-flex items-center gap-3 rounded-full bg-slate-50 px-8 py-4 font-mono text-sm uppercase tracking-[0.16em] text-slate-950 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
          >
            Download CV
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-600">PDF · Updated 2026</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {links.map(({ key, label, value, href, Icon }) => (
            <a
              key={key}
              data-testid={`contact-link-${key}`}
              href={href}
              target={key === "linkedin" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-[#050b1c] p-7 transition-colors duration-300 hover:bg-blue-500/[0.07] md:p-8"
            >
              <span>
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </span>
                <span className="mt-2 block text-base text-slate-100">{value}</span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400" />
            </a>
          ))}
        </div>

        <footer className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500 sm:flex-row sm:items-center">
          <span>© 2026 {PROFILE.name} · Bloomington, Indiana</span>
          <span>Designed &amp; built end-to-end</span>
        </footer>
      </div>
    </section>
  );
}

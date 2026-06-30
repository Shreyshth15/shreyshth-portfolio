import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "./shared";
import { PROFILE } from "../../data/portfolio";
import { ArrowUpRight, FileText, Mail, Linkedin, Phone, Send, Loader2, Copy, Check } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState("");

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const copy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      toast.success("Copied to clipboard", { description: text });
      setTimeout(() => setCopied(""), 1500);
    } catch {
      toast.error("Couldn't copy");
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in every field.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      toast.success("Message sent", { description: "Thanks for reaching out, I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Couldn't send", { description: "Please try again or email me directly." });
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-600 focus:border-blue-500/60";

  const contactRows = [
    { key: "email", label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, Icon: Mail, copyable: true },
    { key: "email2", label: "Email", value: PROFILE.emailAlt, href: `mailto:${PROFILE.emailAlt}`, Icon: Mail, copyable: true },
    { key: "linkedin", label: "LinkedIn", value: PROFILE.linkedinLabel, href: PROFILE.linkedin, Icon: Linkedin, ext: true },
    { key: "phone", label: "Phone", value: PROFILE.phone, href: PROFILE.phoneHref, Icon: Phone, copyable: true },
  ];

  return (
    <section id="contact" data-testid="contact-section" className="relative border-t border-white/10 px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-blue-400/80">07 / Contact</span>
          <h2 className="mt-6 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tighter text-slate-50 md:text-7xl">
            Let's <span className="font-serif lowercase italic text-blue-400">connect</span>.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            Open to finance, asset management, portfolio &amp; performance analytics, credit research and consulting opportunities. Drop a message below or reach me directly.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* form */}
          <Reveal>
            <form onSubmit={submit} data-testid="contact-form" className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input data-testid="contact-name" className={inputClass} placeholder="Your name" value={form.name} onChange={update("name")} />
                <input data-testid="contact-email" type="email" className={inputClass} placeholder="Your email" value={form.email} onChange={update("email")} />
              </div>
              <textarea data-testid="contact-message" rows={5} className={inputClass + " resize-none"} placeholder="What's on your mind?" value={form.message} onChange={update("message")} />
              <button
                type="submit"
                disabled={sending}
                data-testid="contact-submit"
                className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue-400 disabled:opacity-50"
              >
                {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {sending ? "Sending" : "Send message"}
              </button>
            </form>
          </Reveal>

          {/* links + resume */}
          <Reveal delay={0.1}>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-view-resume"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-blue-500/40 md:p-7"
            >
              <span className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-blue-400" />
                <span>
                  <span className="block font-display text-lg text-slate-50">View / Download Resume</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500">PDF · Updated 2026</span>
                </span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400" />
            </a>

            <div className="mt-4 space-y-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {contactRows.map(({ key, label, value, href, Icon, ext, copyable }) => (
                <div key={key} className="flex items-center justify-between gap-3 bg-[#050b1c] p-5 transition-colors hover:bg-blue-500/[0.06] md:p-6">
                  <a
                    data-testid={`contact-link-${key}`}
                    href={href}
                    target={ext ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="min-w-0 flex-1"
                  >
                    <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      <Icon className="h-3.5 w-3.5" /> {label}
                    </span>
                    <span className="mt-1.5 block truncate text-base text-slate-100">{value}</span>
                  </a>
                  {copyable && (
                    <button
                      type="button"
                      onClick={() => copy(key, value)}
                      data-testid={`contact-copy-${key}`}
                      aria-label={`Copy ${label}`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 text-slate-400 transition-colors hover:border-blue-500/60 hover:text-blue-400"
                    >
                      {copied === key ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <footer className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500 sm:flex-row sm:items-center">
          <span>© 2026 {PROFILE.name} · Bloomington, Indiana</span>
          <span>Portfolio built with Emergent</span>
        </footer>
      </div>
    </section>
  );
}

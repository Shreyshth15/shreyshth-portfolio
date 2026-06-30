import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, X, MessageSquare } from "lucide-react";
import { CHAT_PROMPTS } from "../../data/portfolio";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const [streaming, setStreaming] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey, I'm Ash. Ask me anything about Shreyshth, his work, his experience, or why he'd be a strong hire." },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open]);

  const send = async (text) => {
    const content = (text ?? input).trim();
    if (!content || streaming) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", content }, { role: "assistant", content: "" }]);
    setStreaming(true);

    try {
      const res = await fetch(`${API}/chat/stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, message: content }),
      });
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split("\n\n");
        buffer = parts.pop();
        for (const part of parts) {
          const line = part.replace(/^data: /, "").trim();
          if (!line) continue;
          let data;
          try { data = JSON.parse(line); } catch { continue; }
          if (data.session_id) setSessionId(data.session_id);
          if (data.delta) {
            setMessages((m) => {
              const copy = [...m];
              copy[copy.length - 1] = { role: "assistant", content: copy[copy.length - 1].content + data.delta };
              return copy;
            });
          }
          if (data.error) {
            setMessages((m) => {
              const copy = [...m];
              copy[copy.length - 1] = { role: "assistant", content: data.error };
              return copy;
            });
          }
        }
      }
    } catch (e) {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { role: "assistant", content: "Connection issue, please try again." };
        return copy;
      });
    } finally {
      setStreaming(false);
    }
  };

  return (
    <>
      <motion.button
        data-testid="chat-toggle-button"
        onClick={() => setOpen((o) => !o)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 18 }}
        className="fixed bottom-24 right-6 z-50 flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-blue-400"
      >
        {open ? <X className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
        {open ? "Close" : "Ask Shreyshth"}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="chat-window"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="fixed bottom-44 right-6 z-50 flex h-[540px] max-h-[72vh] w-[calc(100vw-3rem)] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#070d1f] shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 font-display text-sm font-bold text-white">A</span>
              <div>
                <p className="font-display text-sm font-medium text-slate-50">Ash</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">usually replies instantly</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-blue-500 text-white"
                        : "border border-white/10 bg-white/[0.04] text-slate-200"
                    }`}
                  >
                    {m.content || <span className="inline-flex gap-1"><Dot /><Dot d={0.15} /><Dot d={0.3} /></span>}
                  </div>
                </div>
              ))}
            </div>

            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 px-5 pb-3">
                {CHAT_PROMPTS.map((p) => (
                  <button
                    key={p}
                    data-testid={`chat-prompt-${p}`}
                    onClick={() => send(p)}
                    className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5 text-[11px] text-slate-300 transition-colors hover:border-blue-500/50 hover:text-white"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <input
                data-testid="chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my work…"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-600"
              />
              <button
                data-testid="chat-send-button"
                type="submit"
                disabled={streaming || !input.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white transition-colors hover:bg-blue-400 disabled:opacity-40"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </form>
            <p className="pb-3 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">AI-generated · answers reflect my portfolio</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const Dot = ({ d = 0 }) => (
  <motion.span
    className="h-1.5 w-1.5 rounded-full bg-slate-500"
    animate={{ opacity: [0.3, 1, 0.3] }}
    transition={{ duration: 1, repeat: Infinity, delay: d }}
  />
);

"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

type Message = { role: "user" | "assistant"; content: string };

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi! 👋 I'm the MBT TechSphere assistant. Ask me about websites, AI chatbots or Microsoft Power Platform solutions.",
};

const SUGGESTIONS = ["Can you build my business a website?", "How do your chatbots work?", "How much does a website cost?"];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending, open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || sending) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setSending(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // The greeting is client-side only, so it isn't sent.
        body: JSON.stringify({ messages: next.slice(1) }),
      });
      const data = await res.json();
      if (!res.ok || !data.reply) throw new Error(data.error);
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "Sorry, I couldn't respond just now. Please use the consultation form below or email info@mbttechsphere.co.za.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    send(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="Chat with MBT TechSphere"
          className="flex h-[min(560px,calc(100vh-7rem))] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
        >
          <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold to-accent">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 2 14 9 21 11 14 13 12 20 10 13 3 11 10 9Z" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="font-heading text-sm font-bold text-white">MBT TechSphere Assistant</p>
              <p className="flex items-center gap-1.5 text-[11px] text-text-grey">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online · AI powered
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1.5 text-text-grey transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
            {messages.map((m, i) => (
              <p
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto w-fit max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-sm bg-accent px-3.5 py-2.5 text-sm text-white"
                    : "w-fit max-w-[90%] whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-white/10 px-3.5 py-2.5 text-sm leading-relaxed text-text-grey"
                }
              >
                {m.content}
              </p>
            ))}
            {sending && (
              <p className="flex w-fit gap-1 rounded-2xl rounded-bl-sm bg-white/10 px-4 py-3.5" aria-label="Assistant is typing">
                {[0, 1, 2].map((d) => (
                  <span key={d} className="pulse-soft h-1.5 w-1.5 rounded-full bg-text-grey" style={{ animationDelay: `${d * 0.2}s` }} />
                ))}
              </p>
            )}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-gold/40 px-3 py-1.5 text-xs text-gold transition-colors hover:bg-gold/10"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-white/10 p-3">
            <label htmlFor="chat-input" className="sr-only">
              Type your message
            </label>
            <input
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={1000}
              placeholder="Type your message…"
              className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-text-grey/50 focus:border-gold"
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-light disabled:opacity-50"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5 21 12 3 3.5 3 10l12 2-12 2z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Chat with us"}
        aria-expanded={open}
        className="btn-lift flex h-14 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(200,100,47,0.45)] hover:bg-accent-light"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        </svg>
        {!open && <span className="hidden sm:inline">Chat with us</span>}
      </button>
    </div>
  );
}

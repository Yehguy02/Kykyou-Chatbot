"use client";

import { useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "…You’re here. What is it you want to talk about?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    const nextMessages: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Request failed");

      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch (e: any) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: `Error: ${e.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 16 }}>
      <h1 style={{ fontSize: 20, fontWeight: 700 }}>Kikyou Chat</h1>

      <div
        style={{
          marginTop: 12,
          border: "1px solid #444",
          borderRadius: 12,
          padding: 12,
          minHeight: 420,
        }}
      >
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 12, opacity: 0.7 }}>
              {m.role === "user" ? "You" : "Kikyou"}
            </div>
            <div style={{ whiteSpace: "pre-wrap" }}>{m.content}</div>
          </div>
        ))}
        {loading && <div style={{ opacity: 0.7 }}>Kikyou is typing…</div>}
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
          placeholder="Say something..."
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 10,
            border: "1px solid #444",
            background: "transparent",
            color: "inherit",
          }}
        />
        <button
          onClick={send}
          disabled={loading || input.trim().length === 0}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #444",
            opacity: loading || input.trim().length === 0 ? 0.5 : 1,
          }}
        >
          Send
        </button>
      </div>
    </main>
  );
}
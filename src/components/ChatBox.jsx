import React, { useState } from 'react';

export default function ChatBox({ caseData }) {
  const [messages, setMessages] = useState([{ from: 'system', text: 'Ask any question about the case.' }]);
  const [input, setInput] = useState('');
  const API_KEY = import.meta.env.VITE_OPENAI_KEY;

  async function handleSend() {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: 'user', text: input }]);
    const payload = {
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: `Case details: ${JSON.stringify(caseData)}` },
        { role: 'user', content: input }
      ],
      max_tokens: 150
    };
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${API_KEY}` },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || "I couldn't process that.";
    setMessages((msgs) => [...msgs, { from: 'system', text: reply }]);
    setInput('');
  }

  return (
    <div className="border rounded p-4 bg-white shadow">
      <div className="h-40 overflow-y-auto mb-2 space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={m.from === 'user' ? 'text-right' : 'text-left'}>
            <span
              className={m.from === 'user' ? 'bg-blue-100 px-2 py-1 rounded' : 'bg-gray-100 px-2 py-1 rounded'}>
              {m.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          className="flex-1 border rounded p-1"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="bg-blue-500 text-white px-3 rounded" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
}

import { useState } from 'react';

export default function PropAssistant() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Welcome to Beloveeth Realty. I am Prop, your AI intelligence concierge. How can I assist your real estate strategy today?' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/.netlify/functions/prop-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { role: 'assistant', content: 'Unable to reach market intelligence right now.' }]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Network error connecting to Prop.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-ivory-50 border border-neutral-cool rounded-xl shadow-md">
      <div className="h-80 overflow-y-auto space-y-3 mb-4 p-2">
        {messages.map((m, i) => (
          <div key={i} className={`p-3 rounded-lg text-sm ${m.role === 'user' ? 'bg-maroon-900 text-ivory-50 ml-auto max-w-xs' : 'bg-neutral-soft text-neutral-charcoal max-w-md'}`}>
            {m.content}
          </div>
        ))}
        {loading && <p className="text-xs text-neutral-slate italic">Prop is analyzing...</p>}
      </div>
      <div className="flex gap-2">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask Prop about market signals or properties..." 
          className="flex-1 border border-neutral-cool p-2 rounded-lg text-sm focus:outline-none focus:border-maroon-900"
        />
        <button onClick={handleSend} className="bg-maroon-900 text-ivory-50 px-4 py-2 rounded-lg text-sm font-medium hover:bg-maroon-800">
          Send
        </button>
      </div>
    </div>
  );
}
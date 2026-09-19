import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [streakCount, setStreakCount] = useState(1);
  const [streakClaimed, setStreakClaimed] = useState(false);
  const [dialogueText, setDialogueText] = useState("Psst! Want a house that fits your budget? 🏠✨");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'prop',
      text: "YOOO! 👋 I'm Prop! Your real estate AI sidekick. What are we searching for today?"
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  const quotes = [
    "👀 Hey boss! Inspecting Lekki mansions or eating Suya today?",
    "🚀 Ogun land corridor yields are rising fast!",
    "🤪 Stop scrolling and talk to me! I find the best deals!",
    "👑 Philip (The CEO) told me to get you a great deal!",
    "💰 Tap me for secret market insights!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isChatOpen) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setDialogueText(randomQuote);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isChatOpen]);

  const togglePropChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const openPropChatWithPrompt = (prompt) => {
    if (!isChatOpen) setIsChatOpen(true);
    if (prompt) setChatInput(prompt);
  };

  // DYNAMIC CONVERSATIONAL LOGIC FOR PROP AI
  const generatePropReply = (input) => {
    const text = input.toLowerCase().trim();

    // Greetings (English, Pidgin, Local Languages)
    if (['hello', 'hi', 'hey', 'howdy', 'yo', 'sup', 'how far', 'bawo', 'sannu', 'kedu'].some(g => text.includes(g))) {
      return "Hey there! 👋 I'm active and ready! Are you looking to buy, rent, or check predictive yield scores in Lagos & Ogun today?";
    }

    // Pricing / Budget
    if (text.includes('price') || text.includes('cost') || text.includes('budget') || text.includes('cheap') || text.includes('million') || text.includes('naira')) {
      return "Got it! Prices vary fast—Lekki Phase 1 averages ₦110M–₦250M, while Abeokuta expansion corridors start lower with 15%+ annual appreciation. What budget range are you targeting?";
    }

    // Locations (Lekki, Epe, Ikeja, Abeokuta, Ogun)
    if (text.includes('lekki') || text.includes('epe') || text.includes('ikeja') || text.includes('ogun') || text.includes('lagos') || text.includes('abeokuta')) {
      return `Omo! ${input.toUpperCase()} is a hot topic right now! 📡 Our AI models track high demand & traffic infrastructure growth there. Want to open the Client VIP Dashboard to see traffic & yield forecasts?`;
    }

    // Dashboard or Analysis requests
    if (text.includes('dashboard') || text.includes('analysis') || text.includes('traffic') || text.includes('yield') || text.includes('data')) {
      return "🔒 Full predictive models (congestion indices, 5-year capital appreciation, and safety heatmaps) are available inside the gated Client VIP Dashboard! Click 'VIP Dashboard' in the top bar to explore.";
    }

    // Who created you / CEO
    if (text.includes('philip') || text.includes('ceo') || text.includes('who made you') || text.includes('owner')) {
      return "Philip is the CEO of Beloveeth Realty! 👑 He programmed me to make sure you get institutional-grade property insights without the fluff!";
    }

    // Default conversational fallback
    return `I hear you on "${input}"! 🧮 Let me scan our database... I can help you find verified properties, check rental yield trends, or direct you to our VIP Predictive Analytics Dashboard! What's our next move?`;
  };

  const handleSendMsg = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setChatInput('');

    setTimeout(() => {
      const reply = generatePropReply(userText);
      setChatMessages((prev) => [...prev, { sender: 'prop', text: reply }]);
    }, 400);
  };

  const claimStreak = () => {
    if (!streakClaimed) {
      setStreakCount((prev) => prev + 1);
      setStreakClaimed(true);
      setDialogueText("🎉 Daily Streak Claimed! +100 Investor Luck!");
    }
  };

  return (
    <div className="min-h-screen bg-amber-50/30 text-slate-900 font-sans relative overflow-x-hidden pb-24">
      <Head>
        <title>Beloveeth Realty | AI-Powered Real Estate</title>
        <meta name="description" content="AI-Powered Nigerian Real Estate & Market Intelligence" />
      </Head>

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-red-900 to-red-950 text-white py-1.5 px-4 text-[11px] font-black flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2 animate-pulse">
          <span>🔥 HOT OPPORTUNITY:</span>
          <span className="hidden sm:inline">Abeokuta Land Expansion corridor yields up 15%!</span>
        </div>
        <button
          onClick={claimStreak}
          className={`px-2.5 py-0.5 rounded-full text-[10px] font-black transition-all shadow ${
            streakClaimed ? 'bg-emerald-500 text-white' : 'bg-yellow-400 text-slate-900 hover:bg-yellow-300'
          }`}
        >
          {streakClaimed ? `⚡ Day ${streakCount} Active!` : `🎁 Claim Day 1 Bonus`}
        </button>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-amber-200 shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 py-2">
            <img
              src="/logo.png"
              alt="Beloveeth Realty Logo"
              className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="text-xl font-black text-red-900 tracking-tight">Beloveeth Realty</span>
          </Link>

          <nav className="hidden md:flex space-x-8 text-sm font-extrabold text-slate-800">
            <a href="#properties" className="hover:text-red-900 transition-all">Properties</a>
            <Link href="/dashboard" className="text-red-900 bg-red-50 px-3 py-1 rounded-lg border border-red-200 hover:bg-red-100 transition-all flex items-center gap-1">
              <span>📊</span> VIP Dashboard
            </Link>
            <a href="#pulse" className="hover:text-red-900 transition-all">Pulse AI</a>
            <a href="#ceo" className="hover:text-red-900 transition-all">Leadership</a>
          </nav>

          <div className="flex items-center space-x-3">
            <Link href="/dashboard" className="px-4 py-2 text-xs font-black bg-red-900 text-white rounded-xl hover:bg-red-950 transition-all shadow-md active:scale-95">
              Client Portal →
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 border border-amber-300 text-red-900 text-[11px] font-black rounded-full shadow-sm">
              <span className="animate-spin text-xs">✨</span> Next-Gen Interactive Real Estate
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              PROPERTY IS MORE THAN A PLACE.<br />
              <span className="text-red-900 underline decoration-amber-400 decoration-wavy decoration-4">IT'S A DECISION.</span>
            </h1>

            <p className="text-sm md:text-base text-slate-600 font-medium max-w-xl">
              Discover verified homes, track real-time yield signals, and chat with Prop—your interactive AI buddy guiding your every step!
            </p>

            {/* Search Bar */}
            <div className="bg-white p-2 rounded-2xl shadow-xl border-2 border-amber-200 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="pl-2 text-lg">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g., '3-bedroom in Ikoyi under ₦150M'"
                  className="w-full px-2 py-2 text-xs focus:outline-none font-semibold text-slate-800"
                />
                <button
                  onClick={() => openPropChatWithPrompt(`Help me search for: ${searchQuery}`)}
                  className="bg-red-900 text-white px-5 py-2.5 rounded-xl text-xs font-black hover:bg-red-950 transition-all shadow-md active:scale-95"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="md:col-span-5 bg-gradient-to-br from-red-950 to-slate-900 rounded-2xl p-6 text-white relative shadow-xl border-2 border-amber-300/40">
            <div className="space-y-3 relative z-10">
              <span className="bg-emerald-500 text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                ⚡ Pulse Signal Live
              </span>
              <h3 className="text-2xl font-black">Lagos Residential Demand Index</h3>
              <p className="text-xs text-gray-300 font-medium">Lekki Phase 1 rental yield is up 12% Q3. Full traffic & congestion forecasts inside VIP portal.</p>

              <div className="pt-3 flex items-center justify-between border-t border-white/20">
                <div>
                  <p className="text-[10px] text-gray-400 font-bold">Median Asking Price</p>
                  <p className="text-xl font-black text-amber-400">₦110,000,000</p>
                </div>
                <Link
                  href="/dashboard"
                  className="bg-amber-400 text-slate-900 font-black text-[11px] px-3.5 py-2 rounded-lg hover:bg-yellow-300 transition-all shadow-md"
                >
                  Full AI Analysis →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section id="ceo" className="bg-white py-12 border-y-2 border-amber-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-[320px] overflow-hidden rounded-2xl shadow-xl border-4 border-red-900 bg-amber-50">
              <img
                src="/ceo.png"
                alt="Philip - CEO"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full bg-red-900 text-white flex-col items-center justify-center p-4 text-center">
                <span className="text-5xl mb-2">👤</span>
                <span className="font-extrabold text-xl">Philip</span>
                <span className="text-[10px] text-amber-300 font-bold">CEO, Beloveeth Realty</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
            <span className="text-[10px] font-black text-red-900 tracking-widest uppercase bg-red-100 px-2.5 py-0.5 rounded-full">
              Executive Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Philip</h2>
            <p className="text-base font-bold text-red-900">Chief Executive Officer, Beloveeth Realty</p>
            <p className="text-slate-600 text-sm max-w-xl leading-relaxed font-medium">
              Transforming property investments across Nigeria through transparency, AI-guided market intelligence, and institutional excellence.
            </p>
            <div className="pt-3 border-t border-gray-200 flex flex-col sm:flex-row justify-center md:justify-start gap-4 text-xs font-bold text-slate-800">
              <p className="flex items-center justify-center gap-1.5">📞 <span>09052286312</span></p>
              <p className="flex items-center justify-center gap-1.5">✉️ <span>philipdarejohnson@gmail.com</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSLUCENT PROP AI CHATBOX */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
        {!isChatOpen && (
          <div
            onClick={togglePropChat}
            className="bg-white/80 backdrop-blur-md text-slate-900 p-2.5 rounded-2xl shadow-xl border-2 border-red-900/80 max-w-[190px] text-[10px] font-black relative animate-bounce mb-2 cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-1 mb-0.5">
              <span className="bg-amber-400 text-slate-900 px-1.5 py-0.2 rounded text-[8px] font-black uppercase">Prop AI:</span>
            </div>
            <p className="leading-tight">{dialogueText}</p>
            <div className="absolute -bottom-2 right-5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-red-900" />
          </div>
        )}

        {!isChatOpen ? (
          <button
            onClick={togglePropChat}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-red-900 via-amber-500 to-yellow-400 p-0.5 shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 relative group"
          >
            <div className="w-full h-full bg-slate-900/90 backdrop-blur-sm rounded-full flex flex-col items-center justify-center relative overflow-hidden border border-white/50">
              <span className="text-xl transform group-hover:rotate-12 transition-transform">🤖</span>
              <span className="text-[7px] font-black text-amber-300 uppercase tracking-tighter -mt-0.5">PROP</span>
            </div>
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border border-white animate-ping" />
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border border-white" />
          </button>
        ) : (
          /* TRANSLUCENT GLASSMORPHISM CHAT CONTAINER */
          <div className="w-72 md:w-80 bg-white/75 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-red-900/60 overflow-hidden flex flex-col h-[380px]">
            {/* Header */}
            <div className="bg-red-950/85 backdrop-blur-md text-white p-2.5 flex items-center justify-between shadow-sm border-b border-red-800/40">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-xs font-black border border-white/50">👑</div>
                <div>
                  <h4 className="text-xs font-black leading-tight flex items-center gap-1">
                    Prop <span className="bg-amber-400 text-slate-900 text-[8px] px-1.5 py-0.2 rounded-full font-black">Interactive AI</span>
                  </h4>
                  <span className="text-[9px] text-amber-200 font-semibold">Realty Sidekick</span>
                </div>
              </div>
              <button
                onClick={togglePropChat}
                className="w-6 h-6 rounded-full bg-red-900/80 hover:bg-black/80 text-white font-black text-xs flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-amber-50/30 backdrop-blur-xs text-[11px]">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-2.5 rounded-xl font-bold shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-red-900/90 backdrop-blur-sm text-white rounded-br-none'
                        : 'bg-white/90 backdrop-blur-sm border border-amber-300/80 text-slate-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMsg} className="p-2 border-t border-amber-200/50 bg-white/80 backdrop-blur-md flex gap-1.5">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask Prop anything..."
                className="flex-1 text-[11px] font-bold border border-gray-300/80 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-red-900 bg-white/90"
              />
              <button
                type="submit"
                className="bg-amber-400/90 hover:bg-amber-400 text-slate-900 text-[11px] px-3 py-1.5 rounded-lg font-black transition-colors active:scale-95 shadow"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10 border-t-4 border-red-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <img
              src="/logo.png"
              alt="Beloveeth Realty"
              className="h-16 w-auto object-contain brightness-0 invert"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <p className="text-gray-400 font-medium text-[11px]">Transforming real estate decisions through AI and transparency.</p>
          </div>
          <p className="text-gray-400 font-bold">© 2026 Beloveeth Realty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

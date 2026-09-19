import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [streakCount, setStreakCount] = useState(1);
  const [streakClaimed, setStreakClaimed] = useState(false);
  const [dialogueText, setDialogueText] = useState("Psst! Over here! Want to find a house that actually fits your budget? 🏠✨");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'prop',
      text: "YOOO! 👋 I'm Prop! Not your corporate chatbot. I'm your energetic real estate sidekick! What are we searching for today?"
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  const quotes = [
    "👀 Hey boss! Are we inspecting Lekki mansions or eating Suya today?",
    "🚀 Fun Fact: If you bought land in Ogun 5 years ago, you'd be smiling right now!",
    "🤪 Stop scrolling and talk to me! I don't bite... I just find deals!",
    "👑 Philip (The CEO) told me to make sure you get the best deal today!",
    "💰 Tap me! I have secret market insights hidden in my hat!"
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

  const handleSendMsg = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setChatInput('');

    setTimeout(() => {
      const goofyReplies = [
        `Haha! "${userText}"? Say no more! My AI brain is running calculations... 🧮 Boom! High-yield areas in Lagos & Ogun are popping off right now!`,
        `Omo! Searching for "${userText}" is a big move! Let's get you something with crazy ROI potential before someone else grabs it! 🏃‍♂️💨`,
        `I checked the radar! 📡 "${userText}" looks super promising. Need me to break down the estimated yield or call the CEO for a discount? 😉`
      ];
      const reply = goofyReplies[Math.floor(Math.random() * goofyReplies.length)];

      setChatMessages((prev) => [...prev, { sender: 'prop', text: reply }]);
    }, 500);
  };

  const claimStreak = () => {
    if (!streakClaimed) {
      setStreakCount((prev) => prev + 1);
      setStreakClaimed(true);
      setDialogueText("🎉 WOOHOO! Daily Streak Claimed! You get +100 Investor Luck!");
    }
  };

  return (
    <div className="min-h-screen bg-amber-50/30 text-slate-900 font-sans relative overflow-x-hidden pb-32">
      <Head>
        <title>Beloveeth Realty | AI-Powered Real Estate</title>
        <meta name="description" content="AI-Powered Nigerian Real Estate & Market Intelligence" />
      </Head>

      {/* Top Interactive Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-red-900 to-red-950 text-white py-2 px-4 text-xs font-black flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2 animate-pulse">
          <span>🔥 HOT OPPORTUNITY:</span>
          <span className="hidden sm:inline">Abeokuta Land Expansion corridor yields up 15%!</span>
        </div>
        <button
          onClick={claimStreak}
          className={`px-3 py-1 rounded-full text-[11px] font-black transition-all shadow ${
            streakClaimed ? 'bg-emerald-500 text-white' : 'bg-yellow-400 text-slate-900 hover:bg-yellow-300'
          }`}
        >
          {streakClaimed ? `⚡ Day ${streakCount} Streak Active!` : `🎁 Claim Day 1 Bonus`}
        </button>
      </div>

      {/* Header with Extra Large Logo */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-amber-200 shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-28 md:h-36 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3 py-2">
            <img
              src="/logo.png"
              alt="Beloveeth Realty Logo"
              className="h-24 md:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-2xl font-black text-red-900 tracking-tight">Beloveeth Realty</span>
          </a>

          <nav className="hidden md:flex space-x-8 text-base font-extrabold text-slate-800">
            <a href="#properties" className="hover:text-red-900 hover:scale-105 transition-all">Properties</a>
            <a href="#invest" className="hover:text-red-900 hover:scale-105 transition-all">Invest & Yield</a>
            <a href="#pulse" className="hover:text-red-900 hover:scale-105 transition-all">Pulse AI</a>
            <a href="#ceo" className="hover:text-red-900 hover:scale-105 transition-all">Leadership</a>
          </nav>

          <div className="flex items-center space-x-3">
            <button className="px-5 py-2.5 text-sm font-extrabold text-red-900 border-2 border-red-900 rounded-2xl hover:bg-red-50 transition-colors">Sign In</button>
            <button className="px-6 py-2.5 text-sm font-black bg-red-900 text-white rounded-2xl hover:bg-red-950 transition-all shadow-lg active:scale-95">Explore Live</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 border border-amber-300 text-red-900 text-xs font-black rounded-full shadow-sm">
              <span className="animate-spin text-sm">✨</span> Next-Gen Interactive Real Estate
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              PROPERTY IS MORE THAN A PLACE.<br />
              <span className="text-red-900 underline decoration-amber-400 decoration-wavy decoration-4">IT'S A DECISION.</span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 font-medium max-w-xl">
              Discover verified homes, track real-time yield signals, and chat with Prop—your comic AI buddy guiding your every step!
            </p>

            {/* Search Bar */}
            <div className="bg-white p-3 rounded-3xl shadow-2xl border-2 border-amber-200 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="pl-3 text-xl">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g., '3-bedroom in Ikoyi under ₦150M'"
                  className="w-full px-2 py-3 text-sm focus:outline-none font-semibold text-slate-800"
                />
                <button
                  onClick={() => openPropChatWithPrompt(`Help me search for: ${searchQuery}`)}
                  className="bg-red-900 text-white px-7 py-3.5 rounded-2xl text-sm font-black hover:bg-red-950 transition-all shadow-md active:scale-95"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="md:col-span-5 bg-gradient-to-br from-red-950 to-slate-900 rounded-3xl p-8 text-white relative shadow-2xl border-4 border-amber-300/40">
            <div className="space-y-4 relative z-10">
              <span className="bg-emerald-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                ⚡ Pulse Signal Live
              </span>
              <h3 className="text-3xl font-black">Lagos Residential Demand Index</h3>
              <p className="text-sm text-gray-300 font-medium">Lekki Phase 1 rental yield is up 12% Q3. Investors are securing units fast.</p>

              <div className="pt-4 flex items-center justify-between border-t border-white/20">
                <div>
                  <p className="text-xs text-gray-400 font-bold">Median Asking Price</p>
                  <p className="text-2xl font-black text-amber-400">₦110,000,000</p>
                </div>
                <button
                  onClick={() => openPropChatWithPrompt("Tell me more about Lekki rental yields!")}
                  className="bg-amber-400 text-slate-900 font-black text-xs px-4 py-2.5 rounded-xl hover:bg-yellow-300 transition-all shadow-md"
                >
                  Ask Prop About This →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Leadership Section */}
      <section id="ceo" className="bg-white py-16 border-y-2 border-amber-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-80 h-[400px] overflow-hidden rounded-3xl shadow-2xl border-4 border-red-900 bg-amber-50">
              <img
                src="/ceo.png"
                alt="Philip - CEO"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full bg-red-900 text-white flex-col items-center justify-center p-6 text-center">
                <span className="text-6xl mb-3">👤</span>
                <span className="font-extrabold text-2xl">Philip</span>
                <span className="text-xs text-amber-300 font-bold">CEO, Beloveeth Realty</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-5 text-center md:text-left">
            <span className="text-xs font-black text-red-900 tracking-widest uppercase bg-red-100 px-3 py-1 rounded-full">
              Executive Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Philip</h2>
            <p className="text-lg font-bold text-red-900">Chief Executive Officer, Beloveeth Realty</p>
            <p className="text-slate-600 text-base max-w-2xl leading-relaxed font-medium">
              Transforming property investments across Nigeria through transparency, AI-guided market intelligence, and institutional excellence.
            </p>
            <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-center md:justify-start gap-6 text-sm font-bold text-slate-800">
              <p className="flex items-center justify-center gap-2">📞 <span>09052286312</span></p>
              <p className="flex items-center justify-center gap-2">✉️ <span>philipdarejohnson@gmail.com</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* FLYING GOOFY COMIC AI MASCOT (PROP) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {!isChatOpen && (
          <div
            onClick={togglePropChat}
            className="bg-white text-slate-900 p-4 rounded-3xl shadow-2xl border-4 border-red-900 max-w-xs text-xs font-black relative animate-bounce mb-3 cursor-pointer transform hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-amber-400 text-slate-900 px-2 py-0.5 rounded-md text-[10px] font-black uppercase">Prop says:</span>
            </div>
            <p>{dialogueText}</p>
            <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-red-900" />
          </div>
        )}

        {!isChatOpen ? (
          <button
            onClick={togglePropChat}
            className="w-20 h-20 rounded-full bg-gradient-to-tr from-red-900 via-amber-500 to-yellow-400 p-1 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group"
          >
            <div className="w-full h-full bg-slate-900 rounded-full flex flex-col items-center justify-center relative overflow-hidden border-2 border-white">
              <span className="absolute -top-1 text-sm animate-bounce">👑</span>
              <span className="text-3xl mt-2 group-hover:rotate-12 transition-transform">🤖</span>
              <span className="absolute bottom-1 text-[9px] font-black text-amber-300 uppercase tracking-tighter">PROP AI</span>
            </div>
            <span className="absolute top-0 right-0 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white animate-ping" />
            <span className="absolute top-0 right-0 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white" />
          </button>
        ) : (
          <div className="w-80 md:w-96 bg-white rounded-3xl shadow-2xl border-4 border-red-900 overflow-hidden flex flex-col h-[480px]">
            <div className="bg-red-900 text-white p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-xl font-black border-2 border-white">👑</div>
                <div>
                  <h4 className="text-base font-black leading-tight flex items-center gap-1.5">
                    Prop <span className="bg-amber-400 text-slate-900 text-[10px] px-2 py-0.5 rounded-full font-black">Goofy AI</span>
                  </h4>
                  <span className="text-[11px] text-amber-200 font-bold">Your Comic Realty Mascot</span>
                </div>
              </div>
              <button
                onClick={togglePropChat}
                className="w-8 h-8 rounded-full bg-red-950 hover:bg-black text-white font-black text-sm flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-amber-50/50 text-xs">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl font-bold shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-red-900 text-white rounded-br-none'
                        : 'bg-white border-2 border-amber-300 text-slate-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMsg} className="p-3 border-t-2 border-amber-200 bg-white flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask Prop anything funny or market-related..."
                className="flex-1 text-xs font-bold border-2 border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-red-900"
              />
              <button
                type="submit"
                className="bg-amber-400 text-slate-900 text-xs px-4 py-2.5 rounded-xl font-black hover:bg-yellow-300 transition-colors active:scale-95"
              >
                Send!
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Footer with Large Logo */}
      <footer className="bg-slate-900 text-white py-16 border-t-4 border-red-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-sm">
          <div className="flex flex-col items-center md:items-start space-y-3">
            <img
              src="/logo.png"
              alt="Beloveeth Realty"
              className="h-20 w-auto object-contain brightness-0 invert"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <p className="text-gray-400 font-medium text-xs">Transforming real estate decisions through AI and transparency.</p>
          </div>
          <p className="text-gray-400 font-bold">© 2026 Beloveeth Realty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isPropOpen, setIsPropOpen] = useState(false);
  const [propMood, setPropMood] = useState('happy'); // happy, excited, thinking, goof
  const [streakCount, setStreakCount] = useState(1);
  const [streakClaimed, setStreakClaimed] = useState(false);

  // Funny, comic-style floating dialogue quotes
  const [floatingDialogue, setFloatingDialogue] = useState("Psst! Over here! Want to find a house that actually fits your budget? 🏠✨");

  const propQuotes = [
    "👀 Hey boss! Are we inspecting Lekki mansions or eating Suya today?",
    "🚀 Fun Fact: If you bought land in Ogun 5 years ago, you'd be smiling right now!",
    "🤪 Stop scrolling and talk to me! I don't bite... I just find deals!",
    "👑 Philip (The CEO) told me to make sure you get the best deal today!",
    "💰 Tap me! I have secret market insights hidden in my hat!"
  ];

  const [chatMessages, setChatMessages] = useState([
    { 
      sender: 'prop', 
      text: "YOOO! 👋 I'm Prop! Not your boring corporate chatbot. I'm your high-energy real estate sidekick! What are we hunting for today?" 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Cycle floating goofy remarks automatically
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPropOpen) {
        const randomQuote = propQuotes[Math.floor(Math.random() * propQuotes.length)];
        setFloatingDialogue(randomQuote);
        setPropMood(prev => prev === 'happy' ? 'excited' : 'happy');
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [isPropOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInputMessage('');
    setPropMood('thinking');

    const goofyResponses = [
      `Haha! "${userText}"? Say no more! My AI brain is running calculations... 🧮 Boom! High-growth areas in Lagos & Ogun are popping off right now!`,
      `Omo! Searching for "${userText}" is a big move! Let's get you something with crazy ROI potential before someone else grabs it! 🏃‍♂️💨`,
      `I checked the radar! 📡 "${userText}" looks super promising. Need me to break down the estimated yield or call the CEO for a discount? 😉`
    ];

    setTimeout(() => {
      const randomResponse = goofyResponses[Math.floor(Math.random() * goofyResponses.length)];
      setChatMessages((prev) => [...prev, { sender: 'prop', text: randomResponse }]);
      setPropMood('excited');
    }, 600);
  };

  const handleClaimStreak = () => {
    if (!streakClaimed) {
      setStreakCount(prev => prev + 1);
      setStreakClaimed(true);
      setFloatingDialogue("🎉 WOOHOO! Daily Streak Claimed! You get +100 Investor Luck!");
    }
  };

  return (
    <div className="min-h-screen bg-amber-50/30 text-slate-900 font-sans relative overflow-x-hidden pb-32">
      <Head>
        <title>Beloveeth Realty | AI-Powered Real Estate & Fun Market Intelligence</title>
        <meta name="description" content="The most interactive, intelligence-driven Nigerian real estate experience." />
      </Head>

      {/* Top Interactive Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-maroon-800 to-maroon-900 text-white py-2 px-4 text-xs font-extrabold flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2 animate-pulse">
          <span>🔥 HOT OPPORTUNITY:</span>
          <span className="hidden sm:inline">Abeokuta Land Expansion corridor yields up 15%!</span>
        </div>
        <button 
          onClick={handleClaimStreak}
          className={`px-3 py-1 rounded-full text-[11px] font-black transition-all transform active:scale-95 ${
            streakClaimed ? 'bg-emerald-500 text-white' : 'bg-yellow-400 text-slate-900 hover:bg-yellow-300'
          }`}
        >
          {streakClaimed ? `⚡ ${streakCount} Day Streak Active!` : `🎁 Claim Day ${streakCount} Bonus`}
        </button>
      </div>

      {/* Global Navigation Header with Extra Large Logo */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-amber-200 shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-28 md:h-36 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 py-2">
            <img 
              src="/logo.png" 
              alt="Beloveeth Realty" 
              className="h-24 md:h-32 w-auto object-contain hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'block';
              }}
            />
            <span className="hidden text-3xl font-black text-maroon-800 tracking-tight">Beloveeth Realty</span>
          </Link>

          <nav className="hidden md:flex space-x-8 text-base font-extrabold text-slate-800">
            <Link href="#properties" className="hover:text-maroon-800 hover:scale-105 transition-all">Properties</Link>
            <Link href="#invest" className="hover:text-maroon-800 hover:scale-105 transition-all">Invest & Yield</Link>
            <Link href="#pulse" className="hover:text-maroon-800 hover:scale-105 transition-all">Pulse AI</Link>
            <Link href="#ceo" className="hover:text-maroon-800 hover:scale-105 transition-all">Leadership</Link>
          </nav>

          <div className="flex items-center space-x-3">
            <button className="px-5 py-2.5 text-sm font-extrabold text-maroon-800 border-2 border-maroon-800 rounded-2xl hover:bg-maroon-50 transition-colors">Sign In</button>
            <button className="px-6 py-2.5 text-sm font-black bg-maroon-800 text-white rounded-2xl hover:bg-maroon-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Explore Live
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 border border-amber-300 text-maroon-900 text-xs font-black rounded-full shadow-sm">
              <span className="animate-spin text-sm">✨</span> Next-Gen Interactive Real Estate
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              PROPERTY IS MORE THAN A PLACE.<br />
              <span className="text-maroon-800 underline decoration-amber-400 decoration-wavy decoration-4">IT'S A DECISION.</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 font-medium max-w-xl">
              Discover verified homes, track real-time yield signals, and chat with Prop—your comic AI buddy guiding your every step!
            </p>

            {/* Interactive Search Bar */}
            <div className="bg-white p-3 rounded-3xl shadow-2xl border-2 border-amber-200 max-w-2xl transform hover:scale-[1.01] transition-transform">
              <div className="flex items-center gap-2">
                <span className="pl-3 text-xl">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g., '3-bedroom in Ikoyi under ₦150M' or 'Cheapest land in Ogun'"
                  className="w-full px-2 py-3 text-sm focus:outline-none font-semibold text-slate-800"
                />
                <button className="bg-maroon-800 text-white px-7 py-3.5 rounded-2xl text-sm font-black hover:bg-maroon-700 transition-all shadow-md active:scale-95">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Hero Interactive Card */}
          <div className="md:col-span-5 bg-gradient-to-br from-maroon-900 to-slate-900 rounded-3xl p-8 text-white relative shadow-2xl border-4 border-amber-300/40">
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
                <button onClick={() => { setIsPropOpen(true); setPropMood('excited'); }} className="bg-amber-400 text-slate-900 font-black text-xs px-4 py-2.5 rounded-xl hover:bg-yellow-300 transition-all shadow-md">
                  Ask Prop About This →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section id="ceo" className="bg-white py-16 border-y-2 border-amber-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-80 h-[400px] overflow-hidden rounded-3xl shadow-2xl border-4 border-maroon-800 bg-amber-50 transform hover:rotate-1 transition-transform">
              <img 
                src="/ceo.png" 
                alt="Philip - CEO" 
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full bg-maroon-800 text-white flex-col items-center justify-center p-6 text-center">
                <span className="text-6xl mb-3">👤</span>
                <span className="font-extrabold text-2xl">Philip</span>
                <span className="text-xs text-amber-300 font-bold">CEO, Beloveeth Realty</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-5 text-center md:text-left">
            <span className="text-xs font-black text-maroon-800 tracking-widest uppercase bg-maroon-100 px-3 py-1 rounded-full">
              Executive Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Philip</h2>
            <p className="text-lg font-bold text-maroon-800">Chief Executive Officer, Beloveeth Realty</p>
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

      {/* FLYING COMIC AI MASCOT ("PROP") */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
        
        {/* Comic Speech Bubble */}
        {!isPropOpen && (
          <div className="bg-white text-slate-900 p-4 rounded-3xl shadow-2xl border-4 border-maroon-800 max-w-xs text-xs font-black relative animate-bounce mb-3 cursor-pointer transform hover:scale-105 transition-transform" onClick={() => setIsPropOpen(true)}>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-amber-400 text-slate-900 px-2 py-0.5 rounded-md text-[10px] font-black uppercase">Prop says:</span>
            </div>
            <p className="leading-snug">{floatingDialogue}</p>
            <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-maroon-800" />
          </div>
        )}

        {/* Floating Cartoon Avatar */}
        {!isPropOpen ? (
          <button
            onClick={() => { setIsPropOpen(true); setPropMood('excited'); }}
            className="w-20 h-20 rounded-full bg-gradient-to-tr from-maroon-800 via-amber-500 to-yellow-400 p-1 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group"
            title="Click to talk with Prop!"
          >
            <div className="w-full h-full bg-slate-900 rounded-full flex flex-col items-center justify-center relative overflow-hidden border-2 border-white">
              {/* Goofy Crown */}
              <span className="absolute -top-1 text-sm animate-pulse">👑</span>
              {/* Goofy Face Expression based on State */}
              <span className="text-3xl mt-2 transform group-hover:rotate-12 transition-transform">
                {propMood === 'happy' ? '🤖' : propMood === 'excited' ? '🤪' : '🤔'}
              </span>
              <span className="absolute bottom-1 text-[9px] font-black text-amber-300 uppercase tracking-tighter">PROP AI</span>
            </div>
            {/* Live Indicator */}
            <span className="absolute top-0 right-0 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white animate-ping" />
            <span className="absolute top-0 right-0 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white" />
          </button>
        ) : (
          /* Interactive Comic Dialogue Window */
          <div className="w-80 md:w-96 bg-white rounded-3xl shadow-2xl border-4 border-maroon-800 overflow-hidden flex flex-col h-[500px] animate-in slide-in-from-bottom-5">
            {/* Window Header */}
            <div className="bg-maroon-800 text-white p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-xl font-black border-2 border-white">
                  👑
                </div>
                <div>
                  <h4 className="text-base font-black leading-tight flex items-center gap-1.5">
                    Prop <span className="bg-amber-400 text-slate-900 text-[10px] px-2 py-0.5 rounded-full font-black">Goofy AI</span>
                  </h4>
                  <span className="text-[11px] text-amber-200 font-bold">Your Comic Realty Companion</span>
                </div>
              </div>
              <button
                onClick={() => setIsPropOpen(false)}
                className="w-8 h-8 rounded-full bg-maroon-900 hover:bg-black text-white font-black text-sm flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-amber-50/50 text-xs">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl font-bold shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-maroon-800 text-white rounded-br-none'
                        : 'bg-white border-2 border-amber-300 text-slate-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 border-t-2 border-amber-200 bg-white flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask Prop anything funny or real-estate related..."
                className="flex-1 text-xs font-bold border-2 border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-maroon-800"
              />
              <button
                type="submit"
                className="bg-amber-400 text-slate-900 text-xs px-4 py-2.5 rounded-xl font-black hover:bg-yellow-300 transition-colors shadow-sm active:scale-95"
              >
                Send!
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Footer with Extra Large Logo */}
      <footer className="bg-slate-900 text-white py-16 border-t-4 border-maroon-800">
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

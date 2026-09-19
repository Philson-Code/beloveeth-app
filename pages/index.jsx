import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isPropOpen, setIsPropOpen] = useState(false);
  const [propTip, setPropTip] = useState('👋 Hi Philip! Looking for high-yield properties in Lagos or Ogun today?');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'prop', text: 'Hello! I am Prop, your AI Realty Mascot. How can I guide your property search?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Clippy-style proactive speech bubble updates
  useEffect(() => {
    const tips = [
      "💡 Pro Tip: Lekki Phase 1 rental yields are up 12% this quarter!",
      "📍 Interested in Ogun land expansion? Abeokuta corridors are booming.",
      "📊 Need an ROI estimate? Ask me to calculate potential yields for you!",
      "⚡ Verified listings have verified title deeds attached."
    ];

    const interval = setInterval(() => {
      if (!isPropOpen) {
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        setPropTip(randomTip);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isPropOpen]);

  const featuredProperties = [
    {
      id: 'prop-1',
      title: 'Luxury 3-Bedroom Maisonette',
      location: 'Ikoyi, Lagos',
      price: '₦185,000,000',
      type: 'Residential',
      beds: 3,
      baths: 4,
      status: 'VERIFIED',
      intelligence: 'Strong 8.2% Rental Yield Potential'
    },
    {
      id: 'prop-2',
      title: 'Commercial Land Tract',
      location: 'Abeokuta, Ogun State',
      price: '₦45,000,000',
      type: 'Land',
      size: '1,200 sqm',
      status: 'DOCUMENTED',
      intelligence: 'High Capital Growth Corridor'
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInputMessage('');

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'prop',
          text: `I analyzed market data regarding "${userText}". Properties in prime corridors currently offer an average rental yield between 7.5% and 9.1%. Let me know if you would like me to filter specific listings!`
        }
      ]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-ivory-50 text-slate-dark font-sans relative overflow-x-hidden">
      <Head>
        <title>Beloveeth Realty | Transforming Properties into Prosperity</title>
        <meta name="description" content="AI-native Nigerian real-estate intelligence platform" />
      </Head>

      {/* Global Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Beloveeth Realty" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                // Fallback text logo if image path isn't loaded yet
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'block';
              }}
            />
            <span className="hidden text-xl font-bold text-maroon-800 tracking-tight">Beloveeth Realty</span>
          </Link>

          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-dark">
            <Link href="#properties" className="hover:text-maroon-800 transition-colors">Properties</Link>
            <Link href="#invest" className="hover:text-maroon-800 transition-colors">Invest</Link>
            <Link href="#pulse" className="hover:text-maroon-800 transition-colors">Market Intelligence</Link>
            <Link href="#locations" className="hover:text-maroon-800 transition-colors">Locations</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm text-maroon-800 border border-maroon-800 rounded hover:bg-maroon-50 transition-colors">Sign In</button>
            <button className="px-4 py-2 text-sm bg-maroon-800 text-white rounded hover:bg-maroon-700 transition-colors">Get Started</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center md:text-left">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 bg-maroon-50 text-maroon-800 text-xs font-semibold uppercase tracking-wider rounded-full">
              Intelligence-Driven Real Estate
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-maroon-800 leading-tight">
              PROPERTY IS MORE THAN A PLACE.<br />IT'S A DECISION.
            </h1>
            <p className="text-lg text-slate-subtle max-w-xl">
              Discover properties, understand market signals, and make more informed real-estate decisions with Beloveeth.
            </p>

            {/* Search Bar */}
            <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100 max-w-2xl">
              <div className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g., '3-bedroom apartment in Lagos under ₦100M'"
                  className="w-full px-4 py-3 text-sm focus:outline-none"
                />
                <button className="bg-maroon-800 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-maroon-700 transition-colors whitespace-nowrap">
                  Explore
                </button>
              </div>
              <div className="mt-3 text-xs text-slate-subtle px-2 flex flex-wrap gap-2">
                <span>Try asking:</span>
                <button onClick={() => setSearchQuery('3-bedroom in Lagos under ₦80M')} className="underline hover:text-maroon-800">3-bedroom in Lagos under ₦80M</button>
                <span>•</span>
                <button onClick={() => setSearchQuery('Land around Ogun with growth potential')} className="underline hover:text-maroon-800">Land around Ogun</button>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="md:col-span-5 bg-maroon-800 rounded-2xl p-8 text-white h-96 flex flex-col justify-end relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <div className="relative z-20 space-y-2">
              <span className="text-xs tracking-widest uppercase text-emerald-400 font-semibold">● Beloveeth Pulse Live</span>
              <h3 className="text-xl font-bold">Lagos Residential Asking Index</h3>
              <p className="text-sm text-gray-300">Market demand in Lekki Phase 1 up 12% over Q2.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Intelligence Section */}
      <section id="pulse" className="bg-white py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <span className="text-xs font-bold text-maroon-800 tracking-widest uppercase">Beloveeth Pulse</span>
              <h2 className="text-3xl font-bold text-slate-dark mt-1">Market Signals & Trends</h2>
            </div>
            <Link href="#pulse" className="text-sm font-semibold text-maroon-800 hover:underline">View Full Market Intelligence →</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-ivory-50 rounded-xl border border-gray-200">
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-slate-subtle">LAGOS RESIDENTIAL</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">↑ 4.2%</span>
              </div>
              <p className="text-2xl font-extrabold text-slate-dark mt-4">₦110,000,000</p>
              <p className="text-xs text-slate-subtle mt-1">Median asking price across key districts</p>
            </div>

            <div className="p-6 bg-ivory-50 rounded-xl border border-gray-200">
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-slate-subtle">OGUN DEVELOPMENT</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">↑ HIGH DEMAND</span>
              </div>
              <p className="text-2xl font-extrabold text-slate-dark mt-4">Land Expansion</p>
              <p className="text-xs text-slate-subtle mt-1">Industrial and residential corridor growth</p>
            </div>

            <div className="p-6 bg-ivory-50 rounded-xl border border-gray-200">
              <div className="flex justify-between items-start">
                <span className="text-sm font-semibold text-slate-subtle">ESTIMATED YIELD</span>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">STABLE</span>
              </div>
              <p className="text-2xl font-extrabold text-slate-dark mt-4">7.5% - 9.1%</p>
              <p className="text-xs text-slate-subtle mt-1">Gross rental yield range for 2-3 bed units</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Grid */}
      <section id="properties" className="max-w-7xl mx-auto px-6 py-16 space-y-8">
        <div>
          <span className="text-xs font-bold text-maroon-800 tracking-widest uppercase">Verified Opportunities</span>
          <h2 className="text-3xl font-bold text-slate-dark mt-1">Featured Properties</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProperties.map((prop) => (
            <div key={prop.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-100 relative p-4 flex justify-between items-start">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded">
                  {prop.status}
                </span>
                <span className="text-xs bg-white/90 backdrop-blur px-2.5 py-1 rounded text-slate-dark font-medium">
                  {prop.type}
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-bold text-slate-dark">{prop.title}</h3>
                  <span className="text-lg font-extrabold text-maroon-800">{prop.price}</span>
                </div>
                <p className="text-sm text-slate-subtle">{prop.location}</p>
                <div className="bg-maroon-50 p-3 rounded-lg text-xs text-maroon-800 font-medium">
                  💡 Intelligence Signal: {prop.intelligence}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-80 overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-ivory-50 flex items-center justify-center">
              <img 
                src="/ceo.png" 
                alt="Philip - Chief Executive Officer" 
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full bg-maroon-800 text-white flex-col items-center justify-center p-4 text-center">
                <span className="text-4xl mb-2">👤</span>
                <span className="font-bold text-lg">Philip</span>
                <span className="text-xs text-maroon-200">CEO, Beloveeth Realty</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <span className="text-xs font-bold text-maroon-800 tracking-widest uppercase">Executive Leadership</span>
            <h2 className="text-3xl font-bold text-slate-dark">Philip</h2>
            <p className="text-sm font-semibold text-maroon-800">Chief Executive Officer, Beloveeth Realty</p>
            <p className="text-slate-subtle text-base max-w-2xl">
              Driving the evolution of Nigerian PropTech through artificial intelligence, transparent market signals, and institutional-grade real estate advisory.
            </p>
            <div className="pt-4 border-t border-gray-100 space-y-1 text-sm font-medium text-slate-dark">
              <p>📞 <span className="font-semibold">Phone:</span> 09052286312</p>
              <p>✉️ <span className="font-semibold">Email:</span> philipdarejohnson@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIPPY-STYLE AI MASCOT (PROP) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        {!isPropOpen && (
          <div className="bg-white text-slate-dark p-3.5 rounded-2xl shadow-xl border-2 border-maroon-800 max-w-xs text-xs relative animate-bounce font-medium">
            <p>{propTip}</p>
            <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-maroon-800" />
          </div>
        )}

        {!isPropOpen ? (
          <button
            onClick={() => setIsPropOpen(true)}
            className="w-16 h-16 rounded-full bg-maroon-800 text-white shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center border-4 border-white relative group"
            title="Click to talk to Prop!"
          >
            <div className="relative flex flex-col items-center">
              <span className="text-2xl animate-pulse">🤖</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
            </div>
          </button>
        ) : (
          <div className="w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col h-[480px]">
            <div className="bg-maroon-800 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xl">🤖</span>
                <div>
                  <h4 className="text-sm font-bold leading-none">Prop Assistant</h4>
                  <span className="text-[10px] text-maroon-100">Live AI Mascot</span>
                </div>
              </div>
              <button
                onClick={() => setIsPropOpen(false)}
                className="text-gray-300 hover:text-white text-lg font-bold px-2"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-ivory-50 text-xs">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl ${
                      msg.sender === 'user'
                        ? 'bg-maroon-800 text-white rounded-br-none'
                        : 'bg-white border border-gray-200 text-slate-dark shadow-sm rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 bg-white flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask Prop about market rates or yield..."
                className="flex-1 text-xs border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-maroon-800"
              />
              <button
                type="submit"
                className="bg-maroon-800 text-white text-xs px-4 py-2 rounded-lg font-semibold hover:bg-maroon-700 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-dark text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Beloveeth Realty" 
              className="h-8 w-auto brightness-0 invert object-contain" 
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <p>© 2026 Beloveeth Realty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

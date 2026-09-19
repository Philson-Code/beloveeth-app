import React, { useState } from 'react';
import Head from 'next/head';
import PropAssistant from '../components/PropAssistant';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

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

  return (
    <div className="min-h-screen bg-ivory-50 text-slate-dark font-sans">
      <Head>
        <title>Beloveeth Realty | Transforming Properties into Prosperity</title>
        <meta name="description" content="AI-native Nigerian real-estate intelligence platform" />
      </Head>

      {/* Global Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-maroon-800 rounded flex items-center justify-center text-white font-bold text-xl">B</div>
            <span className="font-semibold text-xl tracking-tight text-maroon-800">BELOVEETH <span className="font-light text-slate-dark">REALTY</span></span>
          </div>

          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-dark">
            <a href="#properties" className="hover:text-maroon-800 transition-colors">Properties</a>
            <a href="#invest" className="hover:text-maroon-800 transition-colors">Invest</a>
            <a href="#pulse" className="hover:text-maroon-800 transition-colors">Market Intelligence</a>
            <a href="#locations" className="hover:text-maroon-800 transition-colors">Locations</a>
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

            {/* Intelligent Search Experience */}
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

      {/* Beloveeth Pulse Preview Section */}
      <section id="pulse" className="bg-white py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <span className="text-xs font-bold text-maroon-800 tracking-widest uppercase">Beloveeth Pulse</span>
              <h2 className="text-3xl font-bold text-slate-dark mt-1">Market Signals & Trends</h2>
            </div>
            <a href="#pulse" className="text-sm font-semibold text-maroon-800 hover:underline">View Full Market Intelligence →</a>
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

      {/* Floating Prop AI Assistant */}
      <PropAssistant />

      {/* Footer */}
      <footer className="bg-slate-dark text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <div>
            <p className="font-semibold text-white">BELOVEETH REALTY</p>
            <p className="text-xs mt-1">Transforming Properties into Prosperity</p>
          </div>
          <p>© 2026 Beloveeth Realty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
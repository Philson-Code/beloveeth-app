import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard() {
  const [selectedZone, setSelectedZone] = useState('Lekki Phase 1');

  const zoneData = {
    'Lekki Phase 1': {
      congestionScore: '78/100 (High Commute Peak)',
      yieldForecast: '+14.2% p.a.',
      infrastructureProjects: ['Lekki Coastal Road Expansion', 'Fourth Mainland Bridge Link'],
      safetyIndex: '88/100',
      pricePerSqm: '₦450,000/sqm'
    },
    'Ikeja GRA': {
      congestionScore: '62/100 (Moderate Flow)',
      yieldForecast: '+11.8% p.a.',
      infrastructureProjects: ['Red Line Rail Link', 'Airport Expressway Upgrade'],
      safetyIndex: '92/100',
      pricePerSqm: '₦520,000/sqm'
    },
    'Abeokuta Corridor': {
      congestionScore: '25/100 (Low / Free Flow)',
      yieldForecast: '+18.5% p.a. (High Growth)',
      infrastructureProjects: ['Lagos-Ibadan Industrial Belt Expansion'],
      safetyIndex: '85/100',
      pricePerSqm: '₦95,000/sqm'
    }
  };

  const currentZone = zoneData[selectedZone];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Head>
        <title>VIP Predictive Dashboard | Beloveeth Realty</title>
      </Head>

      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 py-3">
            <span className="text-xl font-black text-amber-400">Beloveeth VIP Analytics</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-3 py-1 rounded-full font-bold">
              ● Live Model Stream Active
            </span>
            <Link href="/" className="text-xs text-gray-400 hover:text-white font-bold">
              ← Back to Main Site
            </Link>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div>
          <h1 className="text-3xl font-black text-amber-400">Institutional Predictive AI Dashboard</h1>
          <p className="text-slate-400 text-sm mt-1">Real-time traffic congestion scoring, capital appreciation forecasts, and infrastructure trajectory.</p>
        </div>

        {/* Zone Selector Bar */}
        <div className="flex flex-wrap gap-3 border-b border-slate-800 pb-4">
          {Object.keys(zoneData).map((zone) => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                selectedZone === zone
                  ? 'bg-amber-400 text-slate-950 shadow-lg scale-105'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {zone}
            </button>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Traffic & Congestion Index</span>
            <p className="text-2xl font-black text-amber-300">{currentZone.congestionScore}</p>
            <p className="text-[11px] text-slate-400">Peak commute delay factor based on satellite density model.</p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">5-Year Yield Forecast</span>
            <p className="text-2xl font-black text-emerald-400">{currentZone.yieldForecast}</p>
            <p className="text-[11px] text-slate-400">Projected annualized return on capital investment.</p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Median Price Density</span>
            <p className="text-2xl font-black text-sky-400">{currentZone.pricePerSqm}</p>
            <p className="text-[11px] text-slate-400">Average verified land & structure square meter valuation.</p>
          </div>
        </div>

        {/* Infrastructure & Safety Analysis */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <span>🛣️</span> Infrastructure Growth Drivers
            </h3>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              {currentZone.infrastructureProjects.map((proj, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-amber-400 font-bold">✓</span> {proj}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <span>🛡️</span> Security & Neighborhood Heatmap Score
            </h3>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span>Neighborhood Safety Score</span>
                <span className="text-emerald-400">{currentZone.safetyIndex}</span>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full rounded-full" style={{ width: currentZone.safetyIndex.split('/')[0] + '%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function VIPDashboard() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [vipCode, setVipCode] = useState('');
  const [authError, setAuthError] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [selectedZone, setSelectedZone] = useState('Lekki Phase 1');

  // Secret VIP Passcode for demo/purchaser verification
  // In production, this verifies via Supabase Auth + user_metadata.is_vip === true
  const VALID_VIP_CODES = ['BELOVEETH-VIP-2026', 'PHILIP-CLIENT-88', 'VIP888'];

  const handleVipLogin = (e) => {
    e.preventDefault();
    if (VALID_VIP_CODES.includes(vipCode.trim().toUpperCase())) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid VIP Purchaser Credentials. Access is restricted to verified buyers.');
    }
  };

  const zoneData = {
    'Lekki Phase 1': {
      congestionScore: '78/100 (High Commute Peak)',
      yieldForecast: '+14.2% p.a.',
      infrastructureProjects: ['Lekki Coastal Road Expansion', 'Fourth Mainland Bridge Link'],
      safetyIndex: '88/100',
      pricePerSqm: '₦450,000/sqm',
      clientPortfolioValue: '₦280,000,000'
    },
    'Ikeja GRA': {
      congestionScore: '62/100 (Moderate Flow)',
      yieldForecast: '+11.8% p.a.',
      infrastructureProjects: ['Red Line Rail Link', 'Airport Expressway Upgrade'],
      safetyIndex: '92/100',
      pricePerSqm: '₦520,000/sqm',
      clientPortfolioValue: '₦410,000,000'
    },
    'Abeokuta Corridor': {
      congestionScore: '25/100 (Low / Free Flow)',
      yieldForecast: '+18.5% p.a. (High Growth)',
      infrastructureProjects: ['Lagos-Ibadan Industrial Belt Expansion'],
      safetyIndex: '85/100',
      pricePerSqm: '₦95,000/sqm',
      clientPortfolioValue: '₦95,000,000'
    }
  };

  const currentZone = zoneData[selectedZone];

  // --------------------------------------------------------------------------
  // LOCKED VIP GATE (Rendered if user is NOT authenticated)
  // --------------------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FCFBF8] text-[#20252B] font-sans flex flex-col justify-between">
        <Head>
          <title>VIP Client Portal Authentication | Beloveeth Realty</title>
        </Head>

        {/* Header */}
        <header className="border-b border-[#D9DCE0] bg-white px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-black text-[#5A1725] tracking-tight">Beloveeth VIP</span>
          </Link>
          <Link href="/" className="text-xs font-bold text-[#5A1725] hover:underline">
            ← Return to Public Site
          </Link>
        </header>

        {/* Lock Modal */}
        <main className="max-w-md w-full mx-auto px-6 py-12">
          <div className="bg-white border-2 border-[#5A1725] rounded-2xl p-8 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-[#5A1725]/10 text-[#5A1725] rounded-full flex items-center justify-center mx-auto text-2xl font-black">
                🔒
              </div>
              <h1 className="text-2xl font-black text-[#5A1725]">Restricted Client Portal</h1>
              <p className="text-xs font-semibold text-[#66707A]">
                Predictive yield models, satellite traffic indices, and land appreciation analytics are exclusively accessible to verified Beloveeth property purchasers.
              </p>
            </div>

            <form onSubmit={handleVipLogin} className="space-y-4">
              <div>
                <label className="block text-[11px] font-extrabold text-[#5A1725] uppercase tracking-wider mb-1">
                  VIP Access Key or Client ID
                </label>
                <input
                  type="text"
                  value={vipCode}
                  onChange={(e) => setVipCode(e.target.value)}
                  placeholder="e.g. BELOVEETH-VIP-2026"
                  className="w-full px-4 py-3 text-sm border-2 border-[#D9DCE0] focus:border-[#5A1725] rounded-xl outline-none font-mono font-bold uppercase tracking-widest text-[#20252B]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-extrabold text-[#5A1725] uppercase tracking-wider mb-1">
                  Purchaser Email Address
                </label>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="client@domain.com"
                  className="w-full px-4 py-3 text-sm border-2 border-[#D9DCE0] focus:border-[#5A1725] rounded-xl outline-none font-semibold text-[#20252B]"
                />
              </div>

              {authError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs font-bold">
                  ⚠️ {authError}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 bg-[#5A1725] hover:bg-[#6B1E2E] text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg active:scale-95"
              >
                Authenticate VIP Access →
              </button>
            </form>

            <div className="pt-4 border-t border-[#F1F2F3] text-center space-y-2">
              <p className="text-[11px] font-medium text-[#66707A]">
                Haven't purchased yet? Speak with our team to unlock institutional access.
              </p>
              <a
                href="https://wa.me/2349052286312"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-xs font-black text-[#5A1725] hover:underline"
              >
                💬 Contact Executive Desk (Philip - CEO)
              </a>
            </div>
          </div>
        </main>

        <footer className="py-6 text-center text-[11px] font-bold text-[#66707A]">
          © 2026 Beloveeth Realty. All Rights Reserved. Secure Purchaser Verification System.
        </footer>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // UNLOCKED VIP DASHBOARD (Rendered once verified)
  // --------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#20252B] text-white font-sans">
      <Head>
        <title>Gated Client VIP Intelligence | Beloveeth Realty</title>
      </Head>

      {/* Top Header */}
      <header className="border-b border-slate-800 bg-[#5A1725] sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-black text-white tracking-tight">Beloveeth VIP Intelligence</span>
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] px-2.5 py-0.5 rounded-full font-extrabold uppercase">
              Verified Client Active
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-xs bg-black/40 hover:bg-black/60 text-white font-bold px-3 py-1.5 rounded-lg transition-all"
            >
              🔒 Lock Portal
            </button>
            <Link href="/" className="text-xs text-slate-300 hover:text-white font-bold">
              ← Main Site
            </Link>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-3xl font-black text-amber-400">Institutional Predictive AI Dashboard</h1>
            <p className="text-slate-400 text-sm mt-1">Real-time traffic congestion scoring, capital appreciation forecasts, and client portfolio tracking.</p>
          </div>
          <div className="bg-slate-800/80 border border-slate-700 px-4 py-2.5 rounded-xl">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Est. Portfolio Value</span>
            <span className="text-lg font-black text-emerald-400">{currentZone.clientPortfolioValue}</span>
          </div>
        </div>

        {/* Zone Selector Bar */}
        <div className="flex flex-wrap gap-3">
          {Object.keys(zoneData).map((zone) => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                selectedZone === zone
                  ? 'bg-[#5A1725] text-white shadow-lg scale-105 border border-amber-400'
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

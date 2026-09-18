import React, { useState } from 'react';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F6F2] border-b border-[#E7E2DD] font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="w-9 h-9 bg-[#5A1022] rounded flex items-center justify-center text-[#B79A67] font-serif font-bold text-xl">
            B
          </div>
          <div>
            <span className="font-serif font-semibold text-lg text-[#171717] tracking-tight block leading-none">
              BELOVEETH
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#6F6B68] font-bold">
              REALTY & PROPTECH
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#171717]">
          <div 
            className="relative py-6"
            onMouseEnter={() => setActiveMenu('properties')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="hover:text-[#5A1022] transition-colors flex items-center gap-1 py-1">
              Properties
              <svg className="w-3 h-3 text-[#6F6B68]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
            </button>

            {activeMenu === 'properties' && (
              <div className="absolute top-full -left-4 w-72 bg-white rounded-xl shadow-xl border border-[#E7E2DD] p-4 grid gap-2">
                <a href="#residential" className="p-2 hover:bg-[#F8F6F2] rounded-lg transition-colors">
                  <div className="font-semibold text-xs text-[#5A1022] uppercase tracking-wider">Residential</div>
                  <div className="text-xs text-[#6F6B68]">Luxury apartments, duplexes, villas</div>
                </a>
                <a href="#commercial" className="p-2 hover:bg-[#F8F6F2] rounded-lg transition-colors">
                  <div className="font-semibold text-xs text-[#5A1022] uppercase tracking-wider">Commercial</div>
                  <div className="text-xs text-[#6F6B68]">Office spaces, retail, hubs</div>
                </a>
                <a href="#land" className="p-2 hover:bg-[#F8F6F2] rounded-lg transition-colors">
                  <div className="font-semibold text-xs text-[#5A1022] uppercase tracking-wider">Verified Land</div>
                  <div className="text-xs text-[#6F6B68]">Titled plots with clear documentation</div>
                </a>
              </div>
            )}
          </div>

          <div 
            className="relative py-6"
            onMouseEnter={() => setActiveMenu('investment')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="hover:text-[#5A1022] transition-colors flex items-center gap-1 py-1">
              Investment
              <svg className="w-3 h-3 text-[#6F6B68]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
            </button>

            {activeMenu === 'investment' && (
              <div className="absolute top-full -left-4 w-80 bg-white rounded-xl shadow-xl border border-[#E7E2DD] p-4 grid gap-2">
                <a href="#co-investment" className="p-2 hover:bg-[#F8F6F2] rounded-lg transition-colors">
                  <div className="font-semibold text-xs text-[#5A1022] uppercase tracking-wider">Fractional Opportunities</div>
                  <div className="text-xs text-[#6F6B68]">Co-invest in high-yield developments</div>
                </a>
                <a href="#private-deals" className="p-2 hover:bg-[#F8F6F2] rounded-lg transition-colors">
                  <div className="font-semibold text-xs text-[#5A1022] uppercase tracking-wider">Private Opportunities</div>
                  <div className="text-xs text-[#6F6B68]">Exclusive deals for verified clients</div>
                </a>
              </div>
            )}
          </div>

          <a href="#about" className="hover:text-[#5A1022] transition-colors">About</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <a href="#login" className="text-sm font-semibold text-[#171717] hover:text-[#5A1022]">Login</a>
          <button className="px-5 py-2.5 bg-[#5A1022] hover:bg-[#350914] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors">
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
}
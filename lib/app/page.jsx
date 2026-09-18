'use client';

import Header from '../components/Header';
import ProptechCalculators from '../components/Calculators';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F2]">
      {/* 1. Header Navigation */}
      <Header />

      {/* 2. Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B79A67] bg-[#5A1022]/10 px-4 py-1.5 rounded-full inline-block mb-4">
          Nigeria's Premier Proptech Platform
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#171717] leading-tight">
          Transforming Properties <br /> into Prosperity.
        </h1>
        <p className="mt-4 text-base md:text-lg text-[#6F6B68] max-w-2xl mx-auto">
          Verified property opportunities, professional real estate services, and data-driven market intelligence across Nigeria.
        </p>
      </section>

      {/* 3. Calculators Section */}
      <section className="py-8 px-6">
        <ProptechCalculators />
      </section>
    </main>
  );
}
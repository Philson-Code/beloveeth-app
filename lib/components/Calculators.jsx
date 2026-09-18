import React, { useState, useMemo } from 'react';

export default function ProptechCalculators() {
  const [activeTab, setActiveTab] = useState('mortgage');
  
  const [propertyPrice, setPropertyPrice] = useState(85000000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [interestRate, setInterestRate] = useState(18);
  const [tenureYears, setTenureYears] = useState(15);
  const [annualRent, setAnnualRent] = useState(6500000);

  const mortgageMetrics = useMemo(() => {
    const downPayment = (propertyPrice * downPaymentPct) / 100;
    const principal = propertyPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = tenureYears * 12;
    
    const monthlyRepayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);

    return {
      downPayment,
      principal,
      monthlyRepayment: isNaN(monthlyRepayment) ? 0 : monthlyRepayment,
    };
  }, [propertyPrice, downPaymentPct, interestRate, tenureYears]);

  const grossYield = useMemo(() => {
    if (!propertyPrice || propertyPrice === 0) return 0;
    return ((annualRent / propertyPrice) * 100).toFixed(2);
  }, [annualRent, propertyPrice]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#F8F6F2] rounded-xl border border-[#E7E2DD] text-[#171717] font-sans">
      <div className="flex border-b border-[#E7E2DD] mb-6">
        <button
          className={`pb-3 px-6 font-semibold text-sm tracking-wide ${
            activeTab === 'mortgage' ? 'border-b-2 border-[#5A1022] text-[#5A1022]' : 'text-[#6F6B68]'
          }`}
          onClick={() => setActiveTab('mortgage')}
        >
          MORTGAGE CALCULATOR
        </button>
        <button
          className={`pb-3 px-6 font-semibold text-sm tracking-wide ${
            activeTab === 'yield' ? 'border-b-2 border-[#5A1022] text-[#5A1022]' : 'text-[#6F6B68]'
          }`}
          onClick={() => setActiveTab('yield')}
        >
          INVESTMENT YIELD CALCULATOR
        </button>
      </div>

      {activeTab === 'mortgage' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-[#6F6B68] mb-1">Property Price (₦)</label>
              <input
                type="number"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full p-3 bg-white border border-[#E7E2DD] rounded-lg text-[#171717] font-semibold"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-[#6F6B68] mb-1">Down Payment ({downPaymentPct}%)</label>
                <input
                  type="number"
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                  className="w-full p-3 bg-white border border-[#E7E2DD] rounded-lg text-[#171717]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-[#6F6B68] mb-1">Interest Rate (%)</label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full p-3 bg-white border border-[#E7E2DD] rounded-lg text-[#171717]"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-[#6F6B68] mb-1">Loan Tenure ({tenureYears} Years)</label>
              <input
                type="range"
                min="5"
                max="30"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full accent-[#5A1022]"
              />
            </div>
          </div>

          <div className="bg-[#350914] text-white p-6 rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B79A67] font-bold">Estimated Monthly Repayment</span>
              <div className="text-3xl font-serif font-bold text-white mt-2">
                ₦{Math.round(mortgageMetrics.monthlyRepayment).toLocaleString()}
                <span className="text-xs font-sans font-normal text-gray-300"> / month</span>
              </div>
            </div>
            <div className="space-y-2 border-t border-[#5A1022] pt-4 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-300">Down Payment Amount:</span>
                <span className="font-semibold">₦{mortgageMetrics.downPayment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Principal Loan Amount:</span>
                <span className="font-semibold">₦{mortgageMetrics.principal.toLocaleString()}</span>
              </div>
            </div>
            <button className="w-full py-3 bg-[#B79A67] hover:bg-[#a38756] text-[#350914] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors">
              Speak to a Mortgage Partner
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-[#6F6B68] mb-1">Property Valuation (₦)</label>
              <input
                type="number"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full p-3 bg-white border border-[#E7E2DD] rounded-lg text-[#171717] font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-[#6F6B68] mb-1">Estimated Annual Rental Income (₦)</label>
              <input
                type="number"
                value={annualRent}
                onChange={(e) => setAnnualRent(Number(e.target.value))}
                className="w-full p-3 bg-white border border-[#E7E2DD] rounded-lg text-[#171717] font-semibold"
              />
            </div>
          </div>

          <div className="bg-[#5A1022] text-white p-6 rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B79A67] font-bold">Gross Rental Yield</span>
              <div className="text-4xl font-serif font-bold text-white mt-2">{grossYield}%</div>
              <p className="text-xs text-gray-200 mt-2">Based on current market estimates for this property bracket.</p>
            </div>
            <button className="w-full py-3 bg-white hover:bg-gray-100 text-[#5A1022] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors">
              Request Full Yield Assessment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
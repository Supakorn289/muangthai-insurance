import React from 'react';

const PlanCard = ({ plan, onSelect }) => {
  return (
    <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(237,0,140,0.15)] hover:border-brand-pink/20">
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img src={plan.image} alt={plan.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-brand-pink text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-lg">
          Best Seller
        </div>
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
          <p className="text-brand-pink font-black text-[10px] sm:text-sm uppercase tracking-widest mb-1">{plan.tagline}</p>
          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">{plan.name}</h3>
        </div>
      </div>
      
      <div className="p-6 sm:p-8 flex-1 flex flex-col bg-white">
        <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed font-medium">
          {plan.description}
        </p>
        
        <div className="space-y-4 mb-10 flex-1">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Core Benefits</p>
          {plan.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-3 rounded-2xl bg-gray-50/50 border border-transparent hover:border-brand-pink/10 hover:bg-white transition-all group/benefit">
              <div className="w-6 h-6 rounded-full bg-brand-pink/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/benefit:bg-brand-pink transition-colors">
                <svg className="w-3.5 h-3.5 text-brand-pink group-hover/benefit:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-bold text-gray-700 leading-snug">{benefit}</span>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => onSelect(plan)}
          className="w-full bg-gray-900 text-white font-black py-5 rounded-2xl hover:bg-brand-pink hover:shadow-xl hover:shadow-brand-pink/30 transition-all flex items-center justify-center gap-3 active:scale-95"
        >
          <span>สนใจรับข้อมูลเพิ่มเติม</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </div>
    </div>
  );
};

export default PlanCard;

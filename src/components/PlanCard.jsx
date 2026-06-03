import React from 'react';

const PlanCard = ({ plan, onSelect }) => {
  const imageUrl = '/image/' + plan.image;

  const getCategoryStyles = (category) => {
    switch (category) {
      case 'life': return { color: 'text-blue-600', bg: 'bg-blue-600' };
      case 'health': return { color: 'text-emerald-600', bg: 'bg-emerald-600' };
      case 'critical': return { color: 'text-rose-600', bg: 'bg-rose-600' };
      case 'pension': return { color: 'text-violet-600', bg: 'bg-violet-600' };
      case 'saving': return { color: 'text-amber-500', bg: 'bg-amber-500' };
      case 'accident': return { color: 'text-orange-600', bg: 'bg-orange-600' };
      default: return { color: 'text-brand-pink', bg: 'bg-brand-pink' };
    }
  };

  const styles = getCategoryStyles(plan.category);

  return (
    <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(237,0,140,0.06)] border border-gray-100/40 flex flex-col h-full transition-all duration-700 hover:shadow-[0_40px_100px_rgba(237,0,140,0.12)] hover:-translate-y-2">
      {/* Visual Header - Balanced and Clean */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={plan.name} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        {/* Subtle Depth Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
        
        <div className="absolute bottom-6 left-8 right-8">
          <h3 className="text-xl sm:text-2xl font-black text-white leading-relaxed drop-shadow-md">{plan.name}</h3>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-10 flex-1 flex flex-col bg-white">
        <div className="mb-8">
          <h4 className="text-slate-600 font-bold text-sm sm:text-base leading-relaxed">
            {plan.description}
          </h4>
        </div>
        
        <div className="space-y-4 mb-12 flex-1">
          {plan.benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 group/benefit">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-pink mt-2.5 shrink-0 opacity-30 group-hover/benefit:opacity-100 group-hover/benefit:scale-125 transition-all"></div>
              <span className="text-sm font-medium text-slate-500 leading-relaxed">{benefit}</span>
            </div>
          ))}
          <div className="flex items-center gap-1.5 text-[10px] text-slate-300 font-bold ml-5">
            <span className="uppercase tracking-[0.2em]">Read More Insights</span>
            <span className="text-lg leading-none mt-1">›</span>
          </div>
        </div>
        
        <button 
          onClick={() => onSelect(plan)}
          className="w-full bg-brand-pink text-white font-black py-6 rounded-2xl hover:shadow-[0_20px_50px_rgba(237,0,140,0.3)] transition-all duration-500 flex items-center justify-center gap-3 active:scale-[0.98] group/btn"
        >
          <span className="text-sm tracking-wide">สำรวจรายละเอียดแผนนี้</span>
          <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PlanCard;

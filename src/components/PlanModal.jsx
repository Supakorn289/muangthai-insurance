import React from 'react';

const PlanModal = ({ plan, onClose }) => {
  if (!plan) return null;

  const imageUrl = plan.image ? '/image/' + plan.image : '';

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
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8">
      {/* Sophisticated Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-dark/40 backdrop-blur-md transition-opacity duration-700"
        onClick={onClose}
      ></div>

      {/* Modal Content - Refined Unified Design */}
      <div className="relative bg-white w-full max-w-5xl rounded-[2.5rem] md:rounded-[4rem] shadow-[0_60px_120px_rgba(0,0,0,0.12)] overflow-hidden transform transition-all animate-in fade-in zoom-in duration-500 max-h-[90vh] flex flex-col border border-gray-100/30">
        
        {/* Floating Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-10 md:right-10 p-2.5 md:p-4 bg-white/90 backdrop-blur-md hover:bg-brand-pink hover:text-white text-brand-dark rounded-full transition-all duration-300 z-50 shadow-sm border border-gray-100 group"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full overflow-hidden">
          
          {/* Visual Section - Clean Image with Subtle Overlay */}
          <div className="w-full lg:w-[40%] h-48 sm:h-80 lg:h-auto relative shrink-0">
            <img 
              src={imageUrl} 
              alt={plan.name} 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            {/* Minimal Depth Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r opacity-90"></div>
            
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6 md:right-10">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-black text-white leading-relaxed drop-shadow-lg">
                {plan.name}
              </h2>
            </div>
          </div>

          {/* Detailed Content Section */}
          <div className="flex-1 flex flex-col bg-white overflow-y-auto scrollbar-hide">
            <div className="p-6 md:p-16">
              
              <div className="mb-8 md:mb-14">
                <p className="text-base md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
                  {plan.description}
                </p>
                <div className={`h-1 w-12 md:w-16 bg-brand-pink rounded-full mt-6 md:mt-8 opacity-20`}></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-10 md:mb-16">
                <div className="space-y-8 md:space-y-12">
                  <section>
                    <h4 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-slate-400 mb-4 md:mb-6 flex items-center gap-3">
                      <span className="w-1 h-4 md:h-5 bg-brand-pink rounded-full"></span>
                      Insights & Coverage
                    </h4>
                    <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium">
                      {plan.coverage}
                    </p>
                  </section>

                  <section>
                    <h4 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-slate-400 mb-4 md:mb-6 flex items-center gap-3">
                      <span className="w-1 h-4 md:h-5 bg-brand-orange rounded-full"></span>
                      Perfect Audience
                    </h4>
                    <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium italic">
                      {plan.targetAudience}
                    </p>
                  </section>
                </div>

                <div className="space-y-8 md:space-y-12">
                  {/* Subtle Tax Benefit Highlight */}
                  <section className="bg-brand-pink/[0.03] p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] border border-brand-pink/5 relative group transition-all duration-500 hover:shadow-inner">
                    <h4 className="text-brand-pink font-black mb-3 md:mb-5 text-[9px] md:text-[10px] uppercase tracking-[0.3em]">
                      Maximize Tax Savings
                    </h4>
                    <p className="text-brand-dark text-lg md:text-3xl font-black leading-relaxed">
                      {plan.taxDeduction}
                    </p>
                    <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-brand-pink/5 rounded-full -mr-12 md:-mr-16 -mt-12 md:-mt-16 opacity-40"></div>
                  </section>

                  <section>
                    <h4 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-slate-400 mb-6 md:mb-8 flex items-center gap-3">
                      <span className="w-1 h-4 md:h-5 bg-emerald-500 rounded-full"></span>
                      Signature Benefits
                    </h4>
                    <ul className="space-y-4 md:space-y-5">
                      {plan.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3 md:gap-4 group/item">
                          <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full ${styles.bg} opacity-10 flex items-center justify-center shrink-0 mt-0.5 md:mt-1 group-hover/item:opacity-100 transition-all duration-300`}>
                            <svg className="w-3 md:w-3.5 h-3 md:h-3.5 text-white opacity-0 group-hover/item:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-xs md:text-base font-bold text-slate-700 leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              {/* Action Experience Footer */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-10 md:pt-12 border-t border-gray-50">
                <button 
                  className="flex-[2] bg-brand-pink text-white font-black py-5 md:py-7 rounded-2xl md:rounded-3xl hover:shadow-[0_20px_50px_rgba(237,0,140,0.3)] transition-all duration-500 flex items-center justify-center gap-4 md:gap-5 text-base md:text-xl active:scale-[0.98] group"
                  onClick={() => {
                    window.open('https://line.me/ti/p/~Satchaphon0216', '_blank');
                    onClose();
                  }}
                >
                  <svg className="w-6 h-6 md:w-7 md:h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.052.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.571-3.951 2.571-6.092z" />
                  </svg>
                  <span>ปรึกษาผ่าน Line ทันที</span>
                </button>
                <button 
                  className="flex-1 bg-slate-50 text-slate-500 font-black py-5 md:py-7 rounded-2xl md:rounded-3xl hover:bg-slate-100 transition-all duration-300 text-base md:text-lg active:scale-[0.98] border border-gray-100"
                  onClick={onClose}
                >
                  ย้อนกลับ
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanModal;

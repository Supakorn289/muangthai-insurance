import React from 'react';

const PlanModal = ({ plan, onClose }) => {
  if (!plan) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl rounded-3xl sm:rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300 max-h-[90vh] flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-gray-100/80 backdrop-blur-sm hover:bg-gray-200 rounded-full transition-colors z-50"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row h-full overflow-y-auto">
          {/* Image Section */}
          <div className="w-full md:w-2/5 h-48 sm:h-64 md:h-auto relative shrink-0">
            <img 
              src={plan.image} 
              alt={plan.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
          </div>

          {/* Details Section */}
          <div className="flex-1 p-6 sm:p-8 md:p-12">
            <span className="inline-block px-3 py-1 bg-brand-pink/10 text-brand-pink text-[10px] font-black rounded-full mb-4 uppercase tracking-widest">
              Insurance Plan
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
              {plan.name}
            </h2>
            <p className="text-brand-pink font-bold text-base sm:text-lg mb-6">
              {plan.tagline}
            </p>
            
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h4 className="text-gray-900 font-black mb-3 flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-1 h-5 bg-brand-pink rounded-full"></span>
                  รายละเอียดแผนความคุ้มครอง
                </h4>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
                  {plan.description}
                </p>
              </div>

              <div>
                <h4 className="text-gray-900 font-black mb-3 flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-1 h-5 bg-brand-orange rounded-full"></span>
                  สิทธิประโยชน์หลัก
                </h4>
                <ul className="grid grid-cols-1 gap-2 sm:gap-3">
                  {plan.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-pink shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs sm:text-sm font-bold">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                className="flex-1 bg-brand-pink text-white font-black py-4 rounded-xl sm:rounded-2xl hover:shadow-lg hover:shadow-brand-pink/30 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                onClick={() => {
                  window.open('https://line.me/ti/p/~YOUR_LINE_ID', '_blank');
                  onClose();
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.052.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.571-3.951 2.571-6.092z" />
                </svg>
                ปรึกษาผ่าน Line
              </button>
              <button 
                className="flex-1 bg-gray-900 text-white font-black py-4 rounded-xl sm:rounded-2xl hover:bg-black transition-all text-sm sm:text-base"
                onClick={onClose}
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanModal;

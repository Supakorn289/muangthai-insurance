import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-56 lg:pb-40 overflow-hidden bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-brand-pink/5 rounded-full blur-[80px] sm:blur-[120px] -mr-48 sm:-mr-96 -mt-48 sm:-mt-96 animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-brand-pink/10 border border-brand-pink/20 mb-6 sm:mb-8 animate-bounce-slow">
              <span className="w-2 h-2 rounded-full bg-brand-pink"></span>
              <span className="text-brand-pink font-bold text-[10px] sm:text-sm tracking-widest uppercase">Premium Insurance Service</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.2] lg:leading-[1.1] mb-6 sm:mb-8 tracking-tighter">
              ออกแบบชีวิตที่มั่นคง <br className="hidden sm:block" />
              ด้วย<span className="text-brand-pink">ความคุ้มครอง</span>ที่เหนือระดับ
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-gray-500 mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              เลือกแผนประกันที่ใช่สำหรับคุณและคนที่คุณรัก ครอบคลุมทุกความเสี่ยง 
              อุ่นใจกับบริการที่รวดเร็วและจริงใจจาก <span className="text-gray-900 font-bold underline decoration-brand-pink decoration-4 underline-offset-4">Super Agent</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <a href="#plans" className="w-full sm:w-auto bg-brand-pink text-white text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl font-black hover:shadow-2xl hover:shadow-brand-pink/40 transition-all transform hover:-translate-y-1 text-center flex items-center justify-center gap-2">
                ดูแผนประกันทั้งหมด
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#contact" className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-100 text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl font-black hover:border-brand-pink hover:text-brand-pink transition-all text-center">
                รับคำปรึกษาฟรี
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl lg:max-w-none relative">
            <div className="relative group px-4 sm:px-0">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-brand-pink to-brand-orange rounded-[2rem] sm:rounded-[3rem] blur-xl sm:blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-all duration-700 aspect-[4/5] sm:aspect-square lg:aspect-auto">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
                  alt="Happy family" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 p-4 sm:p-6 glass-card rounded-xl sm:rounded-2xl border-white/30">
                  <p className="text-gray-900 font-black text-lg sm:text-xl mb-1">ความสุขที่คุณเลือกได้</p>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium">ดูแลคุณและครอบครัวในทุกจังหวะชีวิต</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

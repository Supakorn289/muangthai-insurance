import React from 'react';
import heroImage from '../assets/image/we.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[750px] lg:min-h-[90vh] flex items-center bg-brand-light overflow-hidden pt-28 lg:pt-0">
      {/* Right Side Background Image - Sophisticated Integration */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Premium Insurance Concierge" 
          className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom"
        />
        {/* Precise Gradient Fade for Desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-light via-brand-light/70 to-transparent hidden lg:block"></div>
        {/* Mobile/Tablet Overlay - Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-light via-brand-light/95 to-brand-light/30 lg:hidden"></div>
      </div>

      <div className="container mx-auto px-8 sm:px-12 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[58%] text-center lg:text-left py-20 lg:py-0 flex flex-col items-center lg:items-start">
            {/* Pill Content - Signature Brand Element */}
            <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/80 backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.03)] border border-white mb-12 sm:mb-16">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-pink animate-pulse"></span>
              <span className="text-brand-dark font-black text-[10px] sm:text-xs tracking-[0.4em] uppercase">Premium Insurance Concierge</span>
            </div>

            {/* Headline - Masterful Typography */}
            <h1 className="text-5xl sm:text-7xl lg:text-7xl font-black text-brand-dark leading-relaxed mb-12 sm:mb-16">
              ออกแบบชีวิตที่ <span className="italic text-brand-pink/50">มั่นคง</span> <br className="hidden lg:block" />
              ด้วย<span className="text-brand-pink">ความคุ้มครอง</span> <br className="hidden lg:block" />
              ที่ <span className="italic text-brand-pink/50">เหนือระดับ</span>
            </h1>

            {/* Description - Curated Confidence */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-16 sm:mb-24 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              สัมผัสประสบการณ์การวางแผนความมั่นคงที่ออกแบบมาเพื่อคุณโดยเฉพาะ 
              อุ่นใจกับบริการที่รวดเร็วและจริงใจจาก <span className="text-brand-dark font-black relative">
                Super Agent
                <span className="absolute bottom-[-8px] left-0 w-full h-[6px] bg-brand-pink/20 rounded-full"></span>
              </span>
            </p>

            {/* Buttons - High Impact Experience */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-10 w-full sm:w-auto">
              <a href="#plans" className="w-full sm:w-auto bg-brand-pink text-white text-xl sm:text-2xl px-14 py-7 sm:px-20 sm:py-8 rounded-[2.5rem] font-black hover:shadow-[0_25px_70px_rgba(237,0,140,0.4)] transition-all transform hover:-translate-y-2 text-center flex items-center justify-center gap-5 group">
                ดูแผนประกันทั้งหมด
                <svg className="w-7 h-7 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="w-full sm:w-auto bg-white/40 backdrop-blur-xl text-gray-500 border-2 border-white text-xl sm:text-2xl px-14 py-7 sm:px-20 sm:py-8 rounded-[2.5rem] font-black hover:border-brand-pink/40 hover:text-brand-pink transition-all text-center active:scale-95 shadow-lg shadow-black/[0.02]">
                รับคำปรึกษาฟรี
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

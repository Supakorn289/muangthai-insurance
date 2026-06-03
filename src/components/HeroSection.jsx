import React from 'react';
import heroImage from '../assets/image/we.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-screen flex items-center bg-brand-light overflow-hidden pt-20 lg:pt-0">
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

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[58%] text-center lg:text-left py-12 md:py-0 flex flex-col items-center lg:items-start">
            {/* Pill Content - Signature Brand Element */}
            <div className="inline-flex items-center gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-white/80 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.02)] border border-white mb-8 md:mb-16">
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-brand-pink animate-pulse"></span>
              <span className="text-brand-dark font-black text-[9px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase">Premium Insurance Concierge</span>
            </div>

            {/* Headline - Masterful Typography */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-brand-dark leading-relaxed mb-8 md:mb-16">
              ออกแบบชีวิตที่ <span className="italic text-brand-pink/50">มั่นคง</span> <br className="hidden lg:block" />
              ด้วย<span className="text-brand-pink">ความคุ้มครอง</span> <br className="hidden lg:block" />
              ที่ <span className="italic text-brand-pink/50">เหนือระดับ</span>
            </h1>

            {/* Description - Curated Confidence */}
            <p className="text-base md:text-xl lg:text-2xl text-gray-600 mb-10 md:mb-24 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed px-2 md:px-0">
              สัมผัสประสบการณ์การวางแผนความมั่นคงที่ออกแบบมาเพื่อคุณโดยเฉพาะ 
              อุ่นใจกับบริการที่รวดเร็วและจริงใจจาก <span className="text-brand-dark font-black relative whitespace-nowrap">
                Super Agent
                <span className="absolute bottom-[-4px] md:bottom-[-8px] left-0 w-full h-[4px] md:h-[6px] bg-brand-pink/20 rounded-full"></span>
              </span>
            </p>

            {/* Buttons - High Impact Experience */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-10 w-full sm:w-auto px-4 md:px-0">
              <a href="#plans" className="w-full sm:w-auto bg-brand-pink text-white text-lg md:text-xl px-10 py-5 md:px-20 md:py-8 rounded-2xl md:rounded-[2.5rem] font-black hover:shadow-[0_20px_50px_rgba(237,0,140,0.35)] transition-all transform hover:-translate-y-2 text-center flex items-center justify-center gap-4 group">
                ดูแผนประกันทั้งหมด
                <svg className="w-6 h-6 md:w-7 md:h-7 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="w-full sm:w-auto bg-white/40 backdrop-blur-xl text-gray-500 border-2 border-white text-lg md:text-xl px-10 py-5 md:px-20 md:py-8 rounded-2xl md:rounded-[2.5rem] font-black hover:border-brand-pink/40 hover:text-brand-pink transition-all text-center active:scale-95 shadow-lg shadow-black/[0.01]">
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

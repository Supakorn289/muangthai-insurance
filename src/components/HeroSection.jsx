import React from 'react';
import heroImage from '../assets/images/we.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:h-screen flex items-center bg-white overflow-hidden pt-20 lg:pt-0">
      {/* Right Side Background Image (Edge-to-edge) */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Premium Insurance" 
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* CSS Gradient Fade for Desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent hidden lg:block"></div>
        {/* Mobile/Tablet Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/30 lg:hidden"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 text-center lg:text-left py-12 lg:py-0 flex flex-col items-center lg:items-start">
            {/* Pill Content */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 mb-8 sm:mb-10">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-pink animate-pulse"></span>
              <span className="text-gray-900 font-black text-[10px] sm:text-xs tracking-[0.2em] uppercase">PREMIUM INSURANCE SERVICE</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black text-gray-900 leading-snug mb-10 sm:mb-12">
              ออกแบบชีวิตที่ <span className="italic text-gray-400">มั่นคง</span> <br className="hidden lg:block" />
              ด้วย<span className="text-brand-pink">ความคุ้มครอง</span> <br className="hidden lg:block" />
              ที่ <span className="italic text-gray-400">เหนือระดับ</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mb-12 sm:mb-16 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              เลือกแผนประกันที่ใช่สำหรับคุณและคนที่คุณรัก ครอบคลุมทุกความเสี่ยง 
              อุ่นใจกับบริการที่รวดเร็วและจริงใจจาก <span className="text-gray-900 font-bold underline decoration-brand-pink decoration-4 underline-offset-8">Super Agent</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full sm:w-auto">
              <a href="#plans" className="w-full sm:w-auto bg-brand-pink text-white text-lg sm:text-xl px-10 py-5 sm:px-12 sm:py-6 rounded-2xl sm:rounded-[2rem] font-black hover:shadow-2xl hover:shadow-brand-pink/40 transition-all transform hover:-translate-y-1 text-center flex items-center justify-center gap-3 group">
                ดูแผนประกันทั้งหมด
                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="w-full sm:w-auto bg-white text-gray-400 border-2 border-gray-200 text-lg sm:text-xl px-10 py-5 sm:px-12 sm:py-6 rounded-2xl sm:rounded-[2rem] font-black hover:border-brand-pink hover:text-brand-pink transition-all text-center active:scale-95">
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

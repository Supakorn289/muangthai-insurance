import React from 'react';

const SmartAssistantBanner = () => {
  return (
    <section className="py-20 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative bg-[#050505] p-10 sm:p-20 rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/20 rounded-full -mr-48 -mt-48 blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-orange/10 rounded-full -ml-32 -mb-32 blur-[80px]"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] sm:text-sm font-black mb-8 border border-white/10 tracking-[0.2em] uppercase">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
                Coming Soon: AI Concierge
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-10 leading-snug">
                พบกับผู้ช่วย <span className="text-brand-pink">AI</span> อัจฉริยะ <br className="hidden sm:block" />
                บน <span className="italic">LINE</span> ของคุณเร็วๆ นี้
              </h2>
              <p className="text-base sm:text-xl text-gray-400 mb-12 max-w-xl leading-relaxed font-medium">
                ไม่ว่าจะเป็นการค้นหาแผนประกันที่ใช่ หรือสอบถามข้อมูลสิทธิประโยชน์ 
                ผู้ช่วย AI ของเรารองรับการตอบคำถามคุณตลอด 24 ชั่วโมง 
                เตรียมพบกับประสบการณ์ใหม่ที่ง่ายและเหนือระดับกว่าเดิม
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
                <button className="bg-white text-gray-900 px-10 py-5 rounded-2xl font-black text-lg hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all active:scale-95">
                  ติดตามความเคลื่อนไหว
                </button>
                <button className="bg-transparent border-2 border-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/5 transition-all active:scale-95">
                  เรียนรู้เพิ่มเติม
                </button>
              </div>
            </div>

            <div className="flex-1 w-full max-w-sm lg:max-w-md">
              <div className="bg-white/5 backdrop-blur-2xl p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-white/10 shadow-inner relative group">
                <div className="absolute inset-0 bg-brand-pink/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]"></div>
                <div className="flex items-center gap-4 mb-10 relative z-10">
                  <div className="w-14 h-14 bg-brand-pink rounded-full flex items-center justify-center font-black text-white text-2xl shadow-lg shadow-brand-pink/30">S</div>
                  <div>
                    <p className="text-white font-black text-lg tracking-tight">Super Agent AI</p>
                    <p className="text-green-400 text-xs font-bold tracking-widest uppercase">● Active now</p>
                  </div>
                </div>
                <div className="space-y-6 relative z-10">
                  <div className="bg-white/10 p-5 rounded-[1.5rem] rounded-tl-none max-w-[90%] border border-white/5">
                    <p className="text-white text-sm sm:text-base leading-relaxed font-medium">
                      สวัสดีครับ! ผมเป็นผู้ช่วย AI ส่วนตัวของคุณ กำลังเตรียมพร้อมให้บริการเร็วๆ นี้ มีอะไรให้ผมแนะนำไหมครับ?
                    </p>
                  </div>
                  <div className="bg-brand-pink/20 p-5 rounded-[1.5rem] rounded-tr-none max-w-[85%] ml-auto border border-brand-pink/30 shadow-lg shadow-brand-pink/10">
                    <p className="text-white text-sm sm:text-base font-bold">อยากทราบแผนประกันลดหย่อนภาษีครับ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartAssistantBanner;

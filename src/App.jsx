import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InsuranceCategory from './components/InsuranceCategory';
import PlanCard from './components/PlanCard';
import ReviewSection from './components/ReviewSection';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import SmartAssistantBanner from './components/SmartAssistantBanner';
import FloatingContact from './components/FloatingContact';
import PlanModal from './components/PlanModal';
import { insuranceData } from './data/insuranceData';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState(insuranceData.categories[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [activeCategory, searchQuery]);

  const filteredPlans = useMemo(() => {
    return insuranceData.plans.filter(plan => {
      const matchesCategory = plan.category === activeCategory;
      const matchesSearch = plan.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            plan.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-prompt antialiased text-gray-900 overflow-x-hidden">
      <Navbar />
      
      <main>
        <div className="reveal">
          <HeroSection />
        </div>
        
        <div className="reveal">
          <WhyChooseUs />
        </div>

        <section id="plans" className="py-20 sm:py-32 bg-[#050505] relative overflow-hidden reveal">
          {/* Subtle Dark Background Pattern */}
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ED008C 0.5px, transparent 0.5px)', backgroundSize: '24px 24px'}}></div>
          <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-brand-pink/10 rounded-full blur-[80px] sm:blur-[120px] -mr-24 sm:-mr-48 -mt-24 sm:-mt-48"></div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
            <div className="text-center mb-12 sm:mb-20">
              <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-brand-pink/20 border border-brand-pink/30 text-brand-pink text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6">
                Exclusive Selection
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tighter">
                แผนประกัน <span className="text-gradient-pink">PREMIUM</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-xl font-medium leading-relaxed px-4">
                คัดสรรความคุ้มครองที่เหนือระดับ เพื่อไลฟ์สไตล์ที่สมบูรณ์แบบและการวางแผนที่มั่นคงที่สุดของคุณ
              </p>

              <div className="max-w-xl mx-auto relative mt-10 sm:mt-16 px-4">
                <div className="absolute inset-0 bg-brand-pink/20 blur-xl opacity-20"></div>
                <input 
                  type="text" 
                  placeholder="ค้นหาแผนประกัน..." 
                  className="w-full px-6 py-4 sm:px-8 sm:py-5 rounded-2xl sm:rounded-[2rem] bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-brand-pink focus:bg-white/10 transition-all outline-none text-base sm:text-lg font-medium relative z-10 shadow-2xl"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-pink absolute right-8 sm:right-10 top-1/2 -translate-y-1/2 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <InsuranceCategory 
              categories={insuranceData.categories} 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 min-h-[400px] mt-12 sm:mt-16">
              {filteredPlans.length > 0 ? (
                filteredPlans.map((plan) => (
                  <PlanCard 
                    key={plan.id} 
                    plan={plan} 
                    onSelect={setSelectedPlan} 
                  />
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-20 sm:py-32 text-center px-4">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white/5 flex items-center justify-center mb-6 sm:mb-8 border border-white/10">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-brand-pink opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-xl sm:text-2xl font-black text-white mb-2">ไม่พบผลการค้นหา</p>
                  <p className="text-gray-500 max-w-xs text-sm sm:text-base">ลองใช้คำค้นหาอื่น หรือเลือกหมวดหมู่ที่แตกต่างออกไป</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="reveal">
          <ReviewSection reviews={insuranceData.reviews} />
        </div>

        <div className="reveal">
          <FAQ />
        </div>

        <div className="reveal">
          <SmartAssistantBanner />
        </div>

        <section id="contact" className="py-20 sm:py-32 bg-brand-pink relative overflow-hidden reveal">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-white/10 rounded-full -mr-32 -mt-32 blur-[60px] sm:blur-[100px]"></div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center text-white max-w-5xl">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-6 sm:mb-8">
              Personalized Consultation
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 tracking-tighter leading-tight">เริ่มวางแผนความมั่นคง <br className="hidden sm:block" />ระดับ <span className="italic">Exclusive</span> วันนี้</h2>
            <p className="text-lg sm:text-xl lg:text-2xl mb-10 sm:mb-16 opacity-90 max-w-2xl mx-auto font-medium leading-relaxed px-4">
              ให้ผู้เชี่ยวชาญจาก <span className="font-black underline decoration-white decoration-4 underline-offset-8">Super Agent</span> ช่วยแนะนำแผนที่เหมาะสมที่สุดสำหรับคุณโดยเฉพาะ
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
              <button className="w-full sm:w-auto bg-white text-brand-pink px-8 py-4 sm:px-12 sm:py-6 rounded-2xl sm:rounded-[2rem] font-black text-lg sm:text-xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-1 active:scale-95">
                โทรเลย 1766
              </button>
              <button className="w-full sm:w-auto bg-transparent border-2 border-white/40 text-white px-8 py-4 sm:px-12 sm:py-6 rounded-2xl sm:rounded-[2rem] font-black text-lg sm:text-xl hover:bg-white/10 transition-all active:scale-95">
                ลงทะเบียนรับข้อมูล
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 sm:py-24 bg-[#050505] text-gray-500">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-7xl">
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-pink rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img src="/logo Super Agent.png" alt="Logo" className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border-2 border-brand-pink p-1 bg-white object-cover relative z-10" />
            </div>
          </div>
          <p className="mb-2 sm:mb-4 text-white font-black text-3xl sm:text-4xl tracking-tighter">SUPER<span className="text-brand-pink">AGENT</span></p>
          <p className="text-[10px] sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] font-black text-gray-600 mb-8 sm:mb-12">Exclusive Insurance Concierge</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-2xl mx-auto mb-12 sm:mb-16 text-[10px] sm:text-sm font-bold text-gray-400">
            <a href="#" className="hover:text-brand-pink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-pink transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-pink transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-brand-pink transition-colors">Sitemap</a>
          </div>

          <div className="w-full h-px bg-white/5 mb-8 sm:mb-12"></div>
          
          <p className="text-[8px] sm:text-xs font-medium tracking-widest opacity-40 uppercase px-4 leading-loose">© 2026 Super Agent Assurance. Crafting Future Security. All Rights Reserved.</p>
        </div>
      </footer>

      <FloatingContact />

      {selectedPlan && (
        <PlanModal 
          plan={selectedPlan} 
          onClose={() => setSelectedPlan(null)} 
        />
      )}
    </div>
  );
}

export default App;

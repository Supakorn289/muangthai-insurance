import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RecommendationQuiz from './components/RecommendationQuiz';
import InsuranceCategory from './components/InsuranceCategory';
import PlanCard from './components/PlanCard';
import ReviewSection from './components/ReviewSection';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import SmartAssistantBanner from './components/SmartAssistantBanner';
import FloatingContact from './components/FloatingContact';
import PlanModal from './components/PlanModal';
import RegistrationModal from './components/RegistrationModal';
import LegalModal from './components/LegalModal';
import { insuranceData } from './data/insuranceData';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState({ isOpen: false, type: '' });
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    setVisibleCount(3);
  }, [activeCategory, searchQuery]);

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
      const matchesCategory = activeCategory === 'all' || plan.category === activeCategory;
      const matchesSearch = plan.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            plan.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const visiblePlans = useMemo(() => {
    return filteredPlans.slice(0, visibleCount);
  }, [filteredPlans, visibleCount]);

  const openLegal = (type) => setLegalModal({ isOpen: true, type });

  return (
    <div className="min-h-screen bg-brand-light antialiased text-brand-dark overflow-x-hidden">
      <Navbar />
      
      <main>
        <div className="reveal">
          <HeroSection />
        </div>

        <div className="reveal">
          <WhyChooseUs />
        </div>
        <RecommendationQuiz onSelectPlan={setSelectedPlan} />

        <section id="plans" className="py-16 md:py-48 bg-brand-light relative overflow-hidden reveal">
          {/* Subtle Background Pattern - Refined */}
          <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(#ED008C 0.8px, transparent 0.8px)', backgroundSize: '32px 32px'}}></div>
          <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-brand-pink/5 rounded-full blur-[100px] sm:blur-[150px] -mr-32 sm:-mr-64 -mt-32 sm:-mt-64"></div>

          <div className="container mx-auto px-4 md:px-10 relative z-10 max-w-7xl">
            <div className="text-center mb-12 md:mb-32">
              <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-brand-pink/5 border border-brand-pink/10 text-brand-pink text-[9px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-10">
                Exclusive Selection
              </span>
              <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-brand-dark mb-4 md:mb-12 leading-relaxed">
                แผนประกัน <span className="text-gradient-pink">PREMIUM</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-xl font-medium leading-relaxed px-2 md:px-6">
                คัดสรรความคุ้มครองที่เหนือระดับ เพื่อไลฟ์สไตล์ที่สมบูรณ์แบบและการวางแผนที่มั่นคงที่สุดของคุณ
              </p>

              {/* Concierge Search UI */}
              <div className="max-w-2xl mx-auto relative mt-10 md:mt-24 px-2 md:px-6 group">
                <div className="absolute inset-0 bg-brand-pink/10 blur-2xl opacity-0 group-focus-within:opacity-30 transition-opacity duration-700"></div>
                <input 
                  type="text" 
                  placeholder="ค้นหาแผนประกันที่ต้องการ..." 
                  className="w-full px-6 py-4 md:px-10 md:py-7 rounded-2xl md:rounded-[2.5rem] bg-white border border-gray-100 text-brand-dark placeholder:text-gray-400 focus:ring-4 focus:ring-brand-pink/5 focus:border-brand-pink/30 transition-all outline-none text-base md:text-xl font-medium relative z-10 shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-10 flex items-center gap-4">
                  <div className="h-6 md:h-8 w-px bg-gray-100 hidden sm:block"></div>
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <InsuranceCategory 
              categories={insuranceData.categories} 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14 min-h-[400px] mt-12 md:mt-32">
              {visiblePlans.length > 0 ? (
                visiblePlans.map((plan) => (
                  <PlanCard 
                    key={plan.id} 
                    plan={plan} 
                    onSelect={setSelectedPlan} 
                  />
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-20 md:py-48 text-center px-4 md:px-6">
                  <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center mb-6 md:mb-12 shadow-inner border border-gray-50 relative group">
                    <div className="absolute inset-0 bg-brand-pink/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700"></div>
                    <svg className="w-8 h-8 md:w-12 md:h-12 text-brand-pink opacity-30 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                  <p className="text-xl md:text-3xl font-black text-brand-dark mb-4 md:mb-6">ไม่พบข้อมูลที่ค้นหา</p>
                  <p className="text-gray-400 max-w-sm text-sm md:text-lg leading-relaxed font-medium">ลองปรับคำค้นหา หรือเลือกแผนประกันในหมวดหมู่อื่นที่เราเตรียมไว้ให้</p>
                </div>
              )}
            </div>

            {visibleCount < filteredPlans.length && (
              <div className="flex justify-center mt-16 md:mt-32">
                <button 
                  onClick={() => setVisibleCount(prev => prev + 3)}
                  className="group relative px-8 py-4 md:px-12 md:py-6 bg-white text-brand-dark font-black rounded-xl md:rounded-[2rem] border border-gray-100 hover:border-brand-pink hover:text-brand-pink transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-2xl active:scale-95"
                >
                  <span className="flex items-center gap-3 md:gap-4 text-base md:text-lg">
                    ดูแผนประกันพรีเมียมเพิ่มเติม
                    <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </div>
            )}
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

        <section id="contact" className="py-16 md:py-40 bg-brand-pink relative overflow-hidden reveal">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
          <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-white/10 rounded-full -mr-32 -mt-32 blur-[60px] sm:blur-[100px]"></div>
          
          <div className="container mx-auto px-6 relative z-10 text-center text-white max-w-5xl">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-[9px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-10">
              Personalized Consultation
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-10 leading-relaxed">เริ่มวางแผนความมั่นคง <br className="hidden sm:block" />ระดับ <span className="italic">Exclusive</span> วันนี้</h2>
            <p className="text-base md:text-xl lg:text-2xl mb-10 md:mb-20 opacity-90 max-w-2xl mx-auto font-medium leading-relaxed md:px-4">
              ให้ผู้เชี่ยวชาญจาก <span className="font-black underline decoration-white decoration-4 underline-offset-8">Super Agent</span> ช่วยแนะนำแผนที่เหมาะสมที่สุดสำหรับคุณโดยเฉพาะ
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 md:px-4">
              <button 
                onClick={() => window.open('https://line.me/ti/p/~Satchaphon0216', '_blank')}
                className="w-full sm:w-auto bg-[#00B900] text-white px-8 py-4 md:px-14 md:py-6 rounded-xl md:rounded-[2rem] font-black text-base md:text-xl hover:shadow-[0_20px_60px_rgba(0,185,0,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 text-center flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5 md:w-7 md:h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.052.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.571-3.951 2.571-6.092z" />
                </svg>
                ปรึกษาผ่าน LINE
              </button>
              <button onClick={() => setIsRegModalOpen(true)} className="w-full sm:w-auto bg-transparent border-2 border-white/40 text-white px-8 py-4 md:px-14 md:py-6 rounded-xl md:rounded-[2rem] font-black text-base md:text-xl hover:bg-white/10 transition-all active:scale-95">
                ลงทะเบียนรับข้อมูล
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 sm:py-32 bg-[#050505] text-gray-500">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-7xl">
          <div className="flex justify-center mb-10 sm:mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-pink rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img src="/logo Super Agent.png" alt="Logo" className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border-2 border-brand-pink p-1 bg-white object-cover relative z-10" />
            </div>
          </div>
          <p className="mb-4 sm:mb-6 text-white font-black text-3xl sm:text-4xl">SUPER<span className="text-brand-pink">AGENT</span></p>
          <p className="text-[10px] sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.5em] font-black text-gray-600 mb-10 sm:mb-16">Exclusive Insurance Concierge</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-2xl mx-auto mb-12 sm:mb-16 text-[10px] sm:text-sm font-bold text-gray-400">
            <button onClick={() => openLegal('privacy')} className="hover:text-brand-pink transition-colors">Privacy Policy</button>
            <button onClick={() => openLegal('terms')} className="hover:text-brand-pink transition-colors">Terms of Service</button>
            <button onClick={() => openLegal('cookie')} className="hover:text-brand-pink transition-colors">Cookie Policy</button>
            <button onClick={() => openLegal('sitemap')} className="hover:text-brand-pink transition-colors">Sitemap</button>
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
      <RegistrationModal 
        isOpen={isRegModalOpen} 
        onClose={() => setIsRegModalOpen(false)} 
      />
      <LegalModal 
        isOpen={legalModal.isOpen} 
        type={legalModal.type} 
        onClose={() => setLegalModal({ isOpen: false, type: '' })} 
      />
    </div>
  );
}

export default App;


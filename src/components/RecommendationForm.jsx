import React, { useState, useMemo, useEffect, useRef } from 'react';
import { insuranceData } from '../data/insuranceData';
import PlanCard from './PlanCard';

const RecommendationForm = ({ onSelectPlan }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    age: '',
    goal: '',
    benefit: '',
    budget: '',
    criticalConcern: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const handleAnswer = (field, value) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    if (step < totalSteps) {
      setStep(prev => prev + 1);
    } else {
      setIsSubmitted(true);
      // Smooth scroll to top of section when submitted
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const recommendations = useMemo(() => {
    if (!isSubmitted) return [];

    const userTags = [];
    if (answers.age) userTags.push(answers.age);
    if (answers.goal) userTags.push(answers.goal);
    if (answers.benefit) userTags.push(answers.benefit);
    if (answers.budget) userTags.push(answers.budget);
    if (answers.criticalConcern === 'yes') userTags.push('critical-illness');

    const scoredPlans = insuranceData.plans.map(plan => {
      const matchCount = plan.tags ? plan.tags.filter(tag => userTags.includes(tag)).length : 0;
      return { ...plan, score: matchCount };
    });

    return scoredPlans
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [isSubmitted, answers]);

  const resetForm = () => {
    setStep(1);
    setAnswers({
      age: '',
      goal: '',
      benefit: '',
      budget: '',
      criticalConcern: ''
    });
    setIsSubmitted(false);
    // Smooth scroll to top of section when reset
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white relative transition-colors duration-500">
      {/* Result UI Overlay or Switch */}
      <div className="container mx-auto px-4">
        {isSubmitted ? (
          <div className="animate-in fade-in duration-700">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-black uppercase tracking-widest mb-4">
                Recommended For You
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-relaxed">แผนที่แนะนำสำหรับคุณ</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">เราได้คัดสรรแผนที่เหมาะสมที่สุดจากความต้องการและไลฟ์สไตล์ของคุณ</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {recommendations.map(plan => (
                <PlanCard key={plan.id} plan={plan} onSelect={onSelectPlan} />
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <button 
                onClick={resetForm}
                className="group relative px-10 py-5 bg-white border-2 border-brand-pink text-brand-pink font-black rounded-[2rem] hover:bg-brand-pink hover:text-white transition-all duration-300 shadow-xl shadow-brand-pink/5 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-5 h-5 transition-transform group-hover:-rotate-180 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.001 0 01-15.357-2m15.357 2H15" /></svg>
                  ทำแบบทดสอบใหม่
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-gray-50 overflow-hidden relative">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              
              {/* Progress Bar */}
              <div className="h-2.5 bg-gray-50 relative z-10">
                <div 
                  className="h-full bg-brand-pink shadow-[0_0_20px_rgba(237,0,140,0.4)] transition-all duration-700 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <div className="p-10 sm:p-16 relative z-10">
                <div className="mb-12 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-widest mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse"></span>
                    Step {step} of {totalSteps}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-relaxed">ค้นหาแผนประกันที่ <span className="text-brand-pink italic">Perfect</span> สำหรับคุณ</h2>
                </div>

                <div className="min-h-[320px] flex flex-col justify-center">
                  {step === 1 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                      <h3 className="text-2xl font-black text-gray-800 text-center">คุณอยู่ในช่วงวัยใด?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {[
                          { 
                            label: 'เด็ก (ต่ำกว่า 20)', 
                            value: 'kid', 
                            icon: (
                              <svg className="w-12 h-12 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )
                          },
                          { 
                            label: 'วัยทำงาน (20-55)', 
                            value: 'adult', 
                            icon: (
                              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            )
                          },
                          { 
                            label: 'วัยเกษียณ (55+)', 
                            value: 'senior', 
                            icon: (
                              <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                              </svg>
                            )
                          }
                        ].map(option => (
                          <button
                            key={option.value}
                            onClick={() => handleAnswer('age', option.value)}
                            className="p-8 rounded-[2rem] border-2 border-gray-100 hover:border-brand-pink hover:bg-brand-pink/5 hover:shadow-2xl hover:shadow-brand-pink/10 transition-all duration-300 group"
                          >
                            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">{option.icon}</div>
                            <div className="font-black text-gray-700 group-hover:text-brand-pink">{option.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                      <h3 className="text-2xl font-black text-gray-800 text-center">เป้าหมายหลักในการทำประกัน?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { label: 'ความคุ้มครองชีวิต', value: 'life' },
                          { label: 'ค่ารักษาพยาบาล', value: 'health' },
                          { label: 'การออมเงิน/ลดหย่อนภาษี', value: 'saving' },
                          { label: 'การลงทุนเพื่ออนาคต', value: 'unitlinked' }
                        ].map(option => (
                          <button
                            key={option.value}
                            onClick={() => handleAnswer('goal', option.value)}
                            className="p-6 rounded-[1.5rem] border-2 border-gray-100 hover:border-brand-pink hover:bg-brand-pink/5 font-black transition-all duration-300 text-gray-700 hover:text-brand-pink text-lg"
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                      <h3 className="text-2xl font-black text-gray-800 text-center">สวัสดิการที่มีอยู่ในปัจจุบัน?</h3>
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { label: 'ไม่มีเลย หรือมีไม่เพียงพอ', value: 'economy' },
                          { label: 'มีสวัสดิการบริษัท/ประกันสังคม แต่อยากได้เพิ่ม', value: 'adult' },
                          { label: 'มีประกันอยู่แล้ว แต่อยากได้ระดับพรีเมียม', value: 'premium' }
                        ].map(option => (
                          <button
                            key={option.value}
                            onClick={() => handleAnswer('benefit', option.value)}
                            className="p-6 rounded-[1.5rem] border-2 border-gray-100 hover:border-brand-pink hover:bg-brand-pink/5 font-black transition-all duration-300 text-gray-700 hover:text-brand-pink text-left flex items-center justify-between group px-8"
                          >
                            <span>{option.label}</span>
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-pink group-hover:text-white transition-colors">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                      <h3 className="text-2xl font-black text-gray-800 text-center">งบประมาณเบี้ยประกันต่อปี?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                          { label: 'ไม่เกิน 20,000', value: 'economy' },
                          { label: '20,000 - 50,000', value: 'adult' },
                          { label: '50,000 ขึ้นไป', value: 'premium' }
                        ].map(option => (
                          <button
                            key={option.value}
                            onClick={() => handleAnswer('budget', option.value)}
                            className="p-6 rounded-[1.5rem] border-2 border-gray-100 hover:border-brand-pink hover:bg-brand-pink/5 font-black transition-all duration-300 text-gray-700 hover:text-brand-pink"
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                      <h3 className="text-2xl font-black text-gray-800 text-center">ความกังวลเรื่องโรคร้ายแรง?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                          { label: 'กังวลมาก อยากได้เงินก้อน', value: 'yes', sub: 'รับเงินก้อนทันทีที่ตรวจพบ' },
                          { label: 'ไม่เน้นโรคร้ายแรง', value: 'no', sub: 'เน้นความคุ้มครองด้านอื่น' }
                        ].map(option => (
                          <button
                            key={option.value}
                            onClick={() => handleAnswer('criticalConcern', option.value)}
                            className="p-8 rounded-[2rem] border-2 border-gray-100 hover:border-brand-pink hover:bg-brand-pink/5 transition-all duration-300 text-center group"
                          >
                            <div className="font-black text-xl text-gray-700 group-hover:text-brand-pink mb-2">{option.label}</div>
                            <div className="text-sm text-gray-400 font-medium group-hover:text-brand-pink/60">{option.sub}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-12 flex justify-center">
                  <button 
                    onClick={() => setStep(Math.max(1, step - 1))}
                    className={`flex items-center gap-2 text-gray-400 font-black hover:text-brand-pink transition-all px-6 py-2 rounded-full hover:bg-gray-50 ${step === 1 ? 'invisible' : 'visible'}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                    ย้อนกลับ
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecommendationForm;

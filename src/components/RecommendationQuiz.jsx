import React, { useState, useMemo } from 'react';
import { insuranceData } from '../data/insuranceData';
import PlanCard from './PlanCard';

const RecommendationQuiz = ({ onSelectPlan }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    lifeStage: '',
    goal: '',
    budget: '',
    focus: []
  });
  const [showResult, setShowResult] = useState(false);

  const getIcon = (type) => {
    switch (type) {
      // Life Stage
      case 'adult':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'kid':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'senior':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      // Goals
      case 'health-protection':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H5a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'tax-deduction':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case 'wealth-building':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'legacy':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      // Budget
      case 'economy':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
          </svg>
        );
      case 'standard':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'premium':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        );
      // Specific Focus
      case 'critical-illness':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'accident':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'opd':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.903a2 2 0 01-1.542 1.466 11.3 11.3 0 01-5.451 0 2 2 0 01-1.542-1.466l-.727-2.903a2 2 0 00-1.96-1.414l-2.387.477a2 2 0 00-1.022.547l-2.387.477a2 2 0 00-1.022.547l-2.387.477" />
          </svg>
        );
      case 'pension':
        return (
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
        );
      default:
        return null;
    }
  };

  const questions = [
    {
      id: 'lifeStage',
      title: 'แผนประกันนี้ให้ใครดูแลดีครับ?',
      subtitle: 'เลือกช่วงวัยเพื่อการแนะนำที่แม่นยำที่สุด',
      options: [
        { label: 'ตัวเอง / วัยทำงาน', value: 'adult' },
        { label: 'ลูก / หลานตัวน้อย', value: 'kid' },
        { label: 'พ่อแม่ / ผู้สูงอายุ', value: 'senior' }
      ]
    },
    {
      id: 'goal',
      title: 'เป้าหมายหลักในการทำประกันคืออะไรครับ?',
      subtitle: 'บอกเราหน่อยว่าคุณให้ความสำคัญกับเรื่องไหนที่สุด',
      options: [
        { label: 'เน้นสวัสดิการค่ารักษา', value: 'health-protection' },
        { label: 'เน้นลดหย่อนภาษี', value: 'tax-deduction' },
        { label: 'ออมเงิน / ลงทุน', value: 'wealth-building' },
        { label: 'เตรียมมรดกให้ครอบครัว', value: 'legacy' }
      ]
    },
    {
      id: 'budget',
      title: 'งบประมาณที่วางไว้ประมาณไหนครับ?',
      subtitle: 'เพื่อที่เราจะได้จัดสรรแผนที่คุ้มค่าที่สุดให้คุณ',
      options: [
        { label: 'เน้นประหยัด คุ้มค่า', value: 'economy' },
        { label: 'มาตรฐาน ครอบคลุม', value: 'standard' },
        { label: 'จัดเต็ม พรีเมียม', value: 'premium' }
      ]
    },
    {
      id: 'focus',
      title: 'กังวลเรื่องไหนเป็นพิเศษไหมครับ?',
      subtitle: 'เลือกได้มากกว่า 1 ข้อ (ถ้าไม่มีข้ามได้เลย)',
      multi: true,
      options: [
        { label: 'โรคร้ายแรง / มะเร็ง', value: 'critical-illness' },
        { label: 'อุบัติเหตุไม่คาดฝัน', value: 'accident' },
        { label: 'ป่วยประปราย (OPD)', value: 'opd' },
        { label: 'ทุนเกษียณยามแก่ตัว', value: 'pension' }
      ]
    }
  ];

  const handleSelect = (value) => {
    const currentQuestion = questions[step];
    if (currentQuestion.multi) {
      const newFocus = answers.focus.includes(value)
        ? answers.focus.filter(item => item !== value)
        : [...answers.focus, value];
      setAnswers({ ...answers, focus: newFocus });
    } else {
      setAnswers({ ...answers, [currentQuestion.id]: value });
      setTimeout(() => nextStep(), 300);
    }
  };

  const nextStep = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateResults();
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const calculateResults = () => {
    setShowResult(true);
    // Scroll to results
    const element = document.getElementById('quiz-results');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const recommendedPlans = useMemo(() => {
    if (!showResult) return [];

    const targetTags = [
      answers.lifeStage,
      answers.goal,
      answers.budget,
      ...answers.focus
    ].filter(Boolean);

    return insuranceData.plans
      .map(plan => {
        let score = 0;
        targetTags.forEach(tag => {
          if (plan.tags.includes(tag)) score++;
        });
        return { ...plan, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [answers, showResult]);

  const restart = () => {
    setStep(0);
    setAnswers({ lifeStage: '', goal: '', budget: '', focus: [] });
    setShowResult(false);
  };

  const currentQ = questions[step];

  return (
    <section id="quiz" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gray-50">
        <div 
          className="h-full bg-brand-pink transition-all duration-700 ease-out"
          style={{ width: `${((step + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {!showResult ? (
          <div className="reveal active animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-pink/5 text-brand-pink text-[10px] font-black rounded-full uppercase tracking-[0.3em] border border-brand-pink/10 mb-6">
                Step {step + 1} of {questions.length}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-dark mb-4 leading-relaxed">
                {currentQ.title}
              </h2>
              <p className="text-gray-400 text-lg font-medium">{currentQ.subtitle}</p>
            </div>

            <div className={`grid grid-cols-1 ${currentQ.options.length > 3 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} gap-6 sm:gap-8 mb-16`}>
              {currentQ.options.map((opt) => {
                const isSelected = currentQ.multi 
                  ? answers.focus.includes(opt.value)
                  : answers[currentQ.id] === opt.value;

                return (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    className={`group p-8 sm:p-10 rounded-[2.5rem] border-2 transition-all duration-500 text-center flex flex-col items-center gap-6 relative overflow-hidden ${
                      isSelected 
                        ? 'border-brand-pink bg-brand-pink/5 shadow-[0_20px_50px_rgba(237,0,140,0.1)]' 
                        : 'border-gray-50 bg-gray-50/30 hover:border-brand-pink/20 hover:bg-white hover:shadow-xl'
                    }`}
                  >
                    <div className={`mb-2 transition-all duration-500 ${isSelected ? 'text-brand-pink scale-110' : 'text-gray-400 group-hover:text-brand-pink group-hover:scale-110'}`}>
                      {getIcon(opt.value)}
                    </div>
                    <span className={`text-lg font-black transition-colors ${isSelected ? 'text-brand-pink' : 'text-brand-dark'}`}>
                      {opt.label}
                    </span>
                    {isSelected && (
                      <div className="absolute top-4 right-4 w-6 h-6 bg-brand-pink rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between items-center pt-8 border-t border-gray-50">
              <button 
                onClick={prevStep}
                disabled={step === 0}
                className={`flex items-center gap-2 font-black text-sm uppercase tracking-widest transition-opacity ${step === 0 ? 'opacity-0 pointer-events-none' : 'text-gray-400 hover:text-brand-dark'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                Back
              </button>
              
              {currentQ.multi && (
                <button 
                  onClick={nextStep}
                  className="bg-brand-dark text-white px-10 py-5 rounded-2xl font-black hover:bg-black transition-all active:scale-95 shadow-lg shadow-black/10"
                >
                  {step === questions.length - 1 ? 'ดูแผนแนะนำเลย' : 'ข้อถัดไป'}
                </button>
              )}
            </div>
          </div>
        ) : (
          <div id="quiz-results" className="reveal active animate-in fade-in duration-1000">
            <div className="text-center mb-20">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-brand-dark mb-6 leading-relaxed">
                เราคัดสรรแผนที่ <span className="text-brand-pink">ดีที่สุด</span> ให้คุณแล้ว
              </h2>
              <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">
                จากการวิเคราะห์ข้อมูลความต้องการของคุณ นี่คือ 3 แผนประกันที่เหมาะสมและคุ้มค่าที่สุดสำหรับคุณในขณะนี้
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-20">
              {recommendedPlans.map((plan, idx) => (
                <div key={plan.id} className={`reveal active animate-in fade-in slide-in-from-bottom-12 duration-700 delay-[${idx * 200}ms]`}>
                  <PlanCard plan={plan} onSelect={onSelectPlan} />
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-8">
              <div className="h-px w-32 bg-gray-100"></div>
              <p className="text-gray-400 font-bold text-sm uppercase tracking-widest italic">ยังไม่เจอที่ถูกใจ?</p>
              <button 
                onClick={restart}
                className="text-brand-pink font-black border-b-2 border-brand-pink/20 hover:border-brand-pink transition-all pb-1 text-lg"
              >
                ทำแบบทดสอบใหม่
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecommendationQuiz;

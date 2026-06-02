import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "ซื้อประกันผ่านช่องทางนี้สามารถลดหย่อนภาษีได้ไหม?",
      answer: "สามารถลดหย่อนภาษีได้ตามที่กฎหมายกำหนดครับ โดยประกันชีวิตลดหย่อนได้สูงสุด 100,000 บาท และประกันสุขภาพลดหย่อนได้สูงสุด 25,000 บาท (รวมกันไม่เกิน 100,000 บาท) ทางเราจะจัดส่งใบเสร็จรับเงินให้คุณเพื่อใช้ประกอบการยื่นภาษีครับ"
    },
    {
      question: "ขั้นตอนการเคลมทำอย่างไร ต้องสำรองจ่ายก่อนไหม?",
      answer: "หากเข้ารับการรักษาในโรงพยาบาลคู่สัญญามากกว่า 400 แห่งทั่วประเทศ คุณสามารถยื่นบัตรประชาชนเพื่อใช้สิทธิ์ 'Fax Claims' ได้ทันทีโดยไม่ต้องสำรองจ่ายครับ แต่หากเป็นโรงพยาบาลนอกเครือข่าย สามารถสำรองจ่ายและส่งเอกสารเคลมผ่านแอปพลิเคชันหรือตัวแทนเพื่อรับเงินคืนภายใน 7-14 วันทำการครับ"
    },
    {
      question: "ต้องตรวจสุขภาพก่อนทำประกันทกแผนไหม?",
      answer: "ไม่จำเป็นครับ แผนประกันหลายตัวของเราออกแบบมาให้สมัครง่ายโดยไม่ต้องตรวจสุขภาพ เพียงแค่แถลงข้อมูลสุขภาพตามจริงในใบคำขอเอาประกันภัย อย่างไรก็ตาม ขึ้นอยู่กับประเภทแผน ทุนประกัน และอายุของผู้ขอเอาประกันภัยด้วยครับ"
    },
    {
      question: "หากต้องการยกเลิกกรมธรรม์ สามารถทำได้ไหม?",
      answer: "คุณสามารถยกเลิกกรมธรรม์ได้ภายในช่วง 'Free-look period' หรือภายใน 15 วันหลังจากได้รับกรมธรรม์ โดยจะได้รับเบี้ยประกันคืน (หักค่าใช้จ่ายตามจริง) หากเกินกำหนดนี้ สามารถแจ้งความประสงค์เวนคืนกรมธรรม์ได้ตามมูลค่าเงินสดที่มีอยู่ในขณะนั้นครับ"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-32 sm:py-44 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-brand-pink/5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <span className="text-brand-pink font-black text-xs uppercase tracking-[0.4em] mb-4 block">Information Center</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-10 leading-snug italic">คำถามที่ <span className="text-brand-pink not-italic">พบบ่อย</span></h2>
          <div className="w-20 h-1.5 bg-brand-pink mx-auto rounded-full mb-10"></div>
          <p className="text-gray-500 text-lg sm:text-xl font-medium leading-relaxed">
            เราได้รวบรวมข้อสงสัยที่ลูกค้ามักสอบถามเข้ามา เพื่อความรวดเร็วในการตัดสินใจของคุณ
          </p>
        </div>

        <div className="space-y-4 sm:space-y-8">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-500"
            >
              <button
                className="w-full px-6 py-6 sm:px-10 sm:py-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-base sm:text-xl font-bold text-gray-900 leading-snug group-hover:text-brand-pink transition-colors">{faq.question}</span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-brand-pink text-white rotate-180' : 'bg-gray-50 text-brand-pink'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-8 sm:px-10 sm:pb-10 text-gray-500 text-sm sm:text-lg leading-relaxed font-medium border-t border-gray-50 pt-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

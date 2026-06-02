import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "เคลมง่าย ไม่ต้องสำรองจ่าย",
      description: "อุ่นใจกับโรงพยาบาลคู่สัญญามากกว่า 400 แห่งทั่วประเทศ ยื่นบัตรใบเดียวจบ ไม่ต้องควักเงินจ่ายก่อน",
      icon: (
        <svg className="w-8 h-8 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "คำปรึกษาตรงไปตรงมา",
      description: "แนะนำแผนประกันที่เหมาะสมกับความต้องการและงบประมาณของคุณจริงๆ ไม่มีกดดัน ไม่หมกเม็ด",
      icon: (
        <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "ดูแลตลอด 24 ชั่วโมง",
      description: "ไม่ว่าเวลาไหน เราพร้อมเคียงข้างและช่วยเหลือคุณในทุกวิกฤต ผ่านช่องทางที่เข้าถึงง่ายที่สุด",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <span className="text-brand-pink font-black text-xs uppercase tracking-[0.4em] mb-4 block">Our Commitment</span>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tighter italic">ทำไมต้องเลือก <span className="text-brand-pink not-italic">Super Agent</span></h2>
          <div className="w-20 h-1.5 bg-brand-pink mx-auto rounded-full mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            เรามุ่งมั่นมอบบริการระดับ <span className="text-gray-900 font-bold">World-Class</span> เพื่อให้คุณและครอบครัวใช้ชีวิตได้อย่างมั่นใจและไร้กังวลในทุกย่างก้าว
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-12 rounded-[3rem] bg-[#FDFDFD] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:border-brand-pink/20 hover:shadow-[0_40px_80px_rgba(237,0,140,0.1)] transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-brand-pink/10 transition-colors"></div>
              
              <div className="w-20 h-20 bg-white rounded-[1.5rem] shadow-xl border border-gray-50 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight leading-tight">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

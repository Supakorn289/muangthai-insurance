import React from 'react';

const ReviewSection = ({ reviews }) => {
  return (
    <section id="reviews" className="py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <span className="text-brand-pink font-black text-xs uppercase tracking-[0.4em] mb-4 block">Testimonials</span>
        <h2 className="text-4xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tighter italic">ความเชื่อมั่นจาก <span className="text-brand-pink not-italic">คนสำคัญ</span> ของเรา</h2>
        <div className="w-20 h-1.5 bg-brand-pink mx-auto rounded-full mb-12"></div>
        <p className="text-gray-500 mb-20 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
          ความพึงพอใจและความมั่นคงของลูกค้า คือรางวัลอันทรงคุณค่าที่ช่วยให้เราก้าวต่อไปอย่างมั่นคง
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="group bg-white p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col items-center hover:translate-y-[-10px] hover:shadow-[0_40px_80px_rgba(237,0,140,0.1)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-pink scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
              
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-6 h-6 ${i < review.rating ? 'text-yellow-400' : 'text-gray-100'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-xl leading-[1.8] mb-12 italic font-medium">"{review.comment}"</p>
              <div className="mt-auto">
                <div className="w-16 h-1 bg-gray-100 mx-auto mb-6 group-hover:bg-brand-pink transition-colors group-hover:w-24"></div>
                <p className="font-black text-gray-900 text-2xl tracking-tight">{review.name}</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <p className="text-gray-400 text-xs font-black uppercase tracking-widest">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;

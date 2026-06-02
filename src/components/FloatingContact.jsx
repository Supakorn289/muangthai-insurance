import React from 'react';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
      <a 
        href="https://www.facebook.com/satchaphon.prammano?mibextid=LQQJ4d" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#1877F2] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        title="ติดต่อทาง Facebook"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>

      <a 
        href="https://line.me/ti/p/~Satchaphon0216" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#00B900] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        title="ติดต่อทาง Line"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.052.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.571-3.951 2.571-6.092z" />
        </svg>
      </a>
      
      <a 
        href="tel:1766"
        className="bg-brand-pink text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        title="โทรสอบถาม"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingContact;

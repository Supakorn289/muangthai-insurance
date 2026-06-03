import React from 'react';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-5 z-40">
      <a 
        href="https://www.facebook.com/satchaphon.prammano?mibextid=LQQJ4d" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#1877F2] text-white p-4 sm:p-5 rounded-full shadow-[0_10px_20px_rgba(24,119,242,0.3)] hover:shadow-[0_15px_30px_rgba(24,119,242,0.4)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center group"
        title="ติดต่อทาง Facebook"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>

      <a 
        href="https://line.me/ti/p/~Satchaphon0216" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#00B900] text-white p-4 sm:p-5 rounded-full shadow-[0_10px_20px_rgba(0,185,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,185,0,0.4)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center group"
        title="ติดต่อทาง Line"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.052.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.571-3.951 2.571-6.092z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingContact;

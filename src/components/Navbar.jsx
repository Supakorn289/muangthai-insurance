import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled || isMenuOpen 
        ? 'bg-gray-900/95 backdrop-blur-md py-3 shadow-2xl' 
        : 'bg-transparent py-4 sm:py-6'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-brand-pink rounded-full blur-md opacity-20"></div>
            <img 
              src="/logo Super Agent.png" 
              alt="Super Agent Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-brand-pink object-cover shadow-lg relative z-10"
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-lg sm:text-xl font-black tracking-tighter leading-none transition-colors duration-300 ${
              isScrolled || isMenuOpen ? 'text-white' : 'text-gray-900'
            }`}>
              SUPER<span className="text-brand-pink">AGENT</span>
            </span>
            <span className="text-[8px] sm:text-[10px] font-bold text-brand-pink tracking-[0.2em] uppercase mt-0.5">Premium Service</span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <a href="#plans" className={`text-sm lg:text-base font-bold transition-all hover:text-brand-pink ${
            isScrolled ? 'text-gray-300' : 'text-gray-700'
          }`}>แผนประกัน</a>
          <a href="#reviews" className={`text-sm lg:text-base font-bold transition-all hover:text-brand-pink ${
            isScrolled ? 'text-gray-300' : 'text-gray-700'
          }`}>รีวิวลูกค้า</a>
          <a href="#contact" className="bg-brand-pink text-white px-6 lg:px-10 py-3 rounded-full font-black text-sm lg:text-base hover:shadow-2xl hover:shadow-brand-pink/40 transition-all active:scale-95">
            ติดต่อเรา
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button 
            className={`relative z-50 w-12 h-12 flex flex-col justify-center items-center transition-all duration-300 rounded-full ${
              isMenuOpen ? 'bg-white/10' : (isScrolled ? 'bg-white/5' : 'bg-brand-pink/5')
            } hover:scale-105 active:scale-95 focus:outline-none`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block h-1 w-full rounded-full transition-all duration-300 origin-left ${
                isMenuOpen ? 'bg-white rotate-[35deg] translate-x-1 -translate-y-1' : (isScrolled ? 'bg-brand-pink' : 'bg-brand-pink')
              }`}></span>
              <span className={`block h-1 w-full rounded-full transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 -translate-x-2' : (isScrolled ? 'bg-brand-pink' : 'bg-brand-pink')
              }`}></span>
              <span className={`block h-1 w-full rounded-full transition-all duration-300 origin-left ${
                isMenuOpen ? 'bg-white -rotate-[35deg] translate-x-1 translate-y-1' : (isScrolled ? 'bg-brand-pink' : 'bg-brand-pink')
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#050505] z-[40] transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-full'
      }`}>
        {/* Background Decorative Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        <div className="flex flex-col items-center gap-10">
          <a 
            href="#plans" 
            className="text-3xl font-black text-white hover:text-brand-pink transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            แผนประกัน
          </a>
          <a 
            href="#reviews" 
            className="text-3xl font-black text-white hover:text-brand-pink transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            รีวิวลูกค้า
          </a>
          <a 
            href="#contact" 
            className="bg-brand-pink text-white px-12 py-5 rounded-[2rem] text-2xl font-black shadow-xl shadow-brand-pink/20"
            onClick={() => setIsMenuOpen(false)}
          >
            ติดต่อเรา
          </a>
          
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs">Premium Support</p>
            <p className="text-brand-pink text-2xl font-black">1766</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

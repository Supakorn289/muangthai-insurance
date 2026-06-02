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
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 ${
        isScrolled || isMenuOpen 
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-xl border-b border-gray-100' 
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
              <span className="text-lg sm:text-xl font-black tracking-tighter leading-none text-gray-900">
                SUPER<span className="text-brand-pink">AGENT</span>
              </span>
              <span className="text-[8px] sm:text-[10px] font-bold text-brand-pink tracking-[0.2em] uppercase mt-0.5">Premium Service</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <a href="#plans" className="text-sm lg:text-base font-bold transition-all hover:text-brand-pink text-gray-700">แผนประกัน</a>
            <a href="#reviews" className="text-sm lg:text-base font-bold transition-all hover:text-brand-pink text-gray-700">รีวิวลูกค้า</a>
            <a href="#contact" className="bg-brand-pink text-white px-6 lg:px-10 py-3 rounded-full font-black text-sm lg:text-base hover:shadow-2xl hover:shadow-brand-pink/40 transition-all active:scale-95">
              ติดต่อเรา
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button 
              className={`relative z-[120] w-12 h-12 flex flex-col justify-center items-center transition-all duration-300 rounded-full bg-brand-pink/10 hover:bg-brand-pink/20 focus:outline-none`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block h-1 w-full rounded-full bg-brand-pink transition-all duration-300 origin-center ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`block h-1 w-full rounded-full bg-brand-pink transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-1 w-full rounded-full bg-brand-pink transition-all duration-300 origin-center ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[100] transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
      }`}>
        <div className="flex flex-col items-center gap-8">
          <a 
            href="#plans" 
            className="text-3xl font-black text-gray-900 hover:text-brand-pink transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            แผนประกัน
          </a>
          <a 
            href="#reviews" 
            className="text-3xl font-black text-gray-900 hover:text-brand-pink transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            รีวิวลูกค้า
          </a>
          
          <div className="flex flex-col items-center gap-6 mt-4">
            <a 
              href="#contact" 
              className="bg-brand-pink text-white px-12 py-5 rounded-[2rem] text-2xl font-black shadow-xl shadow-brand-pink/20 active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              ติดต่อเรา
            </a>
            <div className="text-center">
              <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Premium Support 24 Hours</p>
              <p className="text-brand-pink text-3xl font-black">1766</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

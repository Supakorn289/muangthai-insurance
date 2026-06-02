import React from 'react';

const LegalModal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          subtitle: 'นโยบายความเป็นส่วนตัว',
          content: (
            <div className="space-y-4 text-gray-600 font-medium">
              <p>เราให้ความสำคัญกับความเป็นส่วนตัวของคุณเป็นอันดับหนึ่ง เราขอสัญญาว่าจะปกป้องข้อมูลส่วนบุคคลของคุณตามมาตรฐาน PDPA อย่างเคร่งครัด</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>ข้อมูลของคุณจะถูกใช้เพื่อการนำเสนอแผนประกันที่เหมาะสมเท่านั้น</li>
                <li>เราจะไม่มีการขายหรือส่งต่อข้อมูลส่วนบุคคลของคุณให้แก่บุคคลที่สามโดยไม่ได้รับอนุญาตเด็ดขาด</li>
                <li>คุณมีสิทธิ์ในการเข้าถึง แก้ไข หรือขอลบข้อมูลของคุณได้ทุกเมื่อ</li>
              </ul>
              <p className="pt-4 border-t border-gray-100 italic">"ความมั่นใจของคุณ คือหัวใจสำคัญของบริการเรา"</p>
            </div>
          )
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          subtitle: 'ข้อกำหนดและเงื่อนไขการใช้งาน',
          content: (
            <div className="space-y-4 text-gray-600 font-medium">
              <p>การใช้งานเว็บไซต์นี้เป็นไปตามเงื่อนไขเพื่อช่วยในการตัดสินใจเลือกแผนประกันที่เหมาะสมที่สุด</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>ข้อมูลแผนประกันบนหน้าเว็บเป็นข้อมูลเบื้องต้น โปรดตรวจสอบรายละเอียดทางการในกรมธรรม์</li>
                <li>เพื่อความโปร่งใสและปลอดภัยสูงสุด การชำระเบี้ยประกันภัยทั้งหมดจะกระทำผ่านบัญชีของ บมจ.เมืองไทยประกันชีวิต โดยตรงเท่านั้น</li>
                <li>เราทำหน้าที่เป็นที่ปรึกษา (Concierge) เพื่ออำนวยความสะดวกในทุกขั้นตอน</li>
              </ul>
            </div>
          )
        };
      case 'cookie':
        return {
          title: 'Cookie Policy',
          subtitle: 'นโยบายการใช้คุกกี้',
          content: (
            <div className="space-y-4 text-gray-600 font-medium">
              <p>เว็บไซต์ของเรามีการใช้คุกกี้ (Cookies) เพื่อพัฒนาประสบการณ์การใช้งานของคุณให้ดียิ่งขึ้น</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>ใช้เพื่อจดจำการตั้งค่าและอำนวยความสะดวกในการใช้งานเว็บ</li>
                <li>เราไม่มีการเก็บข้อมูลบัญชีการเงินหรือข้อมูลอ่อนไหวผ่านคุกกี้</li>
                <li>คุณสามารถเลือกปิดการใช้งานคุกกี้ได้ผ่านการตั้งค่าเบราว์เซอร์ของคุณ</li>
              </ul>
            </div>
          )
        };
      case 'sitemap':
        return {
          title: 'Sitemap',
          subtitle: 'ผังเว็บไซต์',
          content: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onClick={() => { window.scrollTo(0,0); onClose(); }} className="p-4 rounded-2xl bg-gray-50 hover:bg-brand-pink/5 hover:text-brand-pink border border-gray-100 text-left font-bold transition-all">
                หน้าแรก (Home)
              </button>
              <a href="#plans" onClick={onClose} className="p-4 rounded-2xl bg-gray-50 hover:bg-brand-pink/5 hover:text-brand-pink border border-gray-100 text-left font-bold transition-all">
                แผนประกัน (Insurance Plans)
              </a>
              <a href="#reviews" onClick={onClose} className="p-4 rounded-2xl bg-gray-50 hover:bg-brand-pink/5 hover:text-brand-pink border border-gray-100 text-left font-bold transition-all">
                รีวิวจากลูกค้า (Client Reviews)
              </a>
              <a href="#contact" onClick={onClose} className="p-4 rounded-2xl bg-gray-50 hover:bg-brand-pink/5 hover:text-brand-pink border border-gray-100 text-left font-bold transition-all">
                ติดต่อเรา (Contact Us)
              </a>
            </div>
          )
        };
      default:
        return { title: '', subtitle: '', content: null };
    }
  };

  const { title, subtitle, content } = getContent();

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-xl rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300 flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-50"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 sm:p-12 overflow-y-auto max-h-[80vh]">
          <span className="inline-block px-3 py-1 bg-brand-pink/10 text-brand-pink text-[10px] font-black rounded-full mb-4 uppercase tracking-widest">
            {title}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8 leading-tight">
            {subtitle}
          </h2>
          
          <div className="prose prose-pink max-w-none">
            {content}
          </div>

          <div className="mt-12">
            <button 
              className="w-full bg-gray-900 text-white font-black py-4 rounded-2xl hover:bg-black transition-all"
              onClick={onClose}
            >
              รับทราบและเข้าใจ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;

import React, { useState, useEffect } from 'react';

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setAnswers] = useState({
    name: '',
    age: '',
    phone: '',
    lineId: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Set your Google Script URL here later
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwOoNrwzGbuf9jfB-n8YG3clP8ykvnFtnTPePN29LCXB4n4ZwyhBJw1-0NMKCi2nSpX/exec';

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setAnswers({ name: '', age: '', phone: '', lineId: '', email: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (GOOGLE_SCRIPT_URL) {
        const data = new FormData();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          body: data,
          mode: 'no-cors' // Common for Google Scripts
        });
      } else {
        // Simulate delay if URL is not provided
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
        >
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 sm:p-12">
          {isSuccess ? (
            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">ลงทะเบียนสำเร็จ!</h2>
              <p className="text-gray-500 font-medium">เจ้าหน้าที่จะติดต่อกลับหาคุณโดยเร็วที่สุด</p>
              <p className="text-gray-400 text-sm mt-8">หน้าต่างนี้จะปิดลงอัตโนมัติ...</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-[10px] font-black uppercase tracking-widest mb-4">
                  Registration
                </span>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">ลงทะเบียนรับข้อมูล</h2>
                <p className="text-gray-500 mt-2 font-medium">กรอกข้อมูลเพื่อให้เราแนะนำแผนที่คุ้มค่าที่สุด</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-black text-gray-700 mb-2 ml-1">ชื่อ-นามสกุล (หรือชื่อเล่น)</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ระบุชื่อของคุณ"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 outline-none transition-all font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2 ml-1">อายุ</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="เช่น 30"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 outline-none transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2 ml-1">เบอร์โทรศัพท์ *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="08X-XXX-XXXX"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-black text-gray-700 mb-2 ml-1">LINE ID</label>
                  <input
                    type="text"
                    name="lineId"
                    value={formData.lineId}
                    onChange={handleChange}
                    placeholder="ระบุ LINE ID (ถ้ามี)"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 outline-none transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-gray-700 mb-2 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/10 outline-none transition-all font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 rounded-2xl font-black text-lg transition-all transform active:scale-95 mt-4 ${
                    isSubmitting 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-brand-pink text-white hover:shadow-[0_20px_40px_rgba(237,0,140,0.3)]'
                  }`}
                >
                  {isSubmitting ? 'กำลังส่งข้อมูล...' : 'ส่งข้อมูลลงทะเบียน'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;

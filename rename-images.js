import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 🔴 เนื่องจาก ES Module ไม่มีตัวแปร __dirname ให้ใช้โดยตรง เราต้องสร้างมันขึ้นมาเลียนแบบ CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// รายชื่อแผนประกันทั้งหมดเพื่อให้ตรงกับ id
const plans = [
  { id: 1, name: 'เมืองไทย เฟล็กซี่ โพรเทคชั่น 99/20' },
  { id: 2, name: 'เมืองไทย ไลฟ์ไทม์ โพรเทคชั่น 99/20' },
  { id: 3, name: 'เมืองไทย วัยเก๋า อุ่นใจหายห่วง (90/90)' },
  { id: 4, name: 'เมืองไทยวัยเก๋า คุ้มทั่วไทย' },
  { id: 5, name: 'เมืองไทย สมาร์ท โพรเทคชั่น 99/20' },
  { id: 6, name: 'เมืองไทย แฮปปี้ รีเทิร์น 99/7 และ 99/9' },
  { id: 7, name: 'ประกันมรดก 99/1 (ไม่มีเงินคืน)' },
  { id: 8, name: 'คุ้มครองตลอดชีพ 99/99 (พรีเมียร์)' },
  { id: 10, name: 'เมืองไทย พรีเมียร์ เลกาซี่ (ค่าเวนคืนคงที่)' },
  { id: 11, name: 'Elite Health Plus (อีลิท เฮลท์ พลัส)' },
  { id: 12, name: 'D Health Lite (ดี เฮลท์ ไลต์)' },
  { id: 13, name: 'โครงการเหมาจ่าย เอ็กซ์ตร้า (Maochai Extra)' },
  { id: 14, name: 'Extra Care Plus & Extra Care' },
  { id: 15, name: 'ประกันสุขภาพเด็ก (ดี เฮลท์ ไลต์ สำหรับเด็ก)' },
  { id: 16, name: 'สมาร์ทเฮลท์ (Smart Health)' },
  { id: 17, name: 'OPD ต่อครั้ง & OPD เหมาจ่าย' },
  { id: 18, name: 'วงเงินแน่นอน (ชดเชยรายวัน)' },
  { id: 19, name: 'CI Perfect Care (ซีไอ เพอร์เฟค แคร์)' },
  { id: 20, name: 'Multiple CI (มัลติเพิล ซีไอ)' },
  { id: 21, name: 'D Care (ดี แคร์)' },
  { id: 22, name: 'Care Plus (แคร์ พลัส)' },
  { id: 23, name: 'สมาร์ท ซิลเวอร์ และ สมาร์ท ซิลเวอร์ พลัส' },
  { id: 24, name: 'Kids Care (คิดส์ แคร์)' },
  { id: 25, name: 'Pure Cancer & Cancer Rider' },
  { id: 26, name: 'คุ้มครองโรคเบาหวาน' },
  { id: 27, name: 'เมืองไทย8560 จี15' },
  { id: 28, name: 'เมืองไทย8501' },
  { id: 29, name: 'เฟล็กซี่ รีไทร์ 90/5 (ดี 55, 60, 65)' },
  { id: 30, name: 'เฟล็กซี่ รีไทร์ 90/1 (ดี 55, 60, 65)' },
  { id: 31, name: 'เมืองไทย แฮปปี้ รีไทร์ 60' },
  { id: 32, name: 'เมืองไทย คืนจัดเต็ม 10/3' },
  { id: 33, name: 'เมืองไทย สปีด รีเทิร์น 5/3' },
  { id: 34, name: 'เมืองไทย ซุปเปอร์ เซฟเวอร์ 25/16' },
  { id: 35, name: 'เมืองไทย สมาร์ท ลิงค์ โปร 10/1 (Global)' },
  { id: 36, name: 'เมืองไทย แฮปปี้ ไลฟ์ พลัส 21/21' },
  { id: 37, name: 'PA Pay Max' },
  { id: 38, name: 'PA Take Care' },
  { id: 39, name: 'PA Return Cash' },
  { id: 40, name: 'PA Extreme' },
  { id: 41, name: 'เมืองไทยSME 20 plus' },
  { id: 42, name: 'เมืองไทยSME Smile' },
  { id: 43, name: 'Small Group & Housekeeping Package' },
  { id: 44, name: 'mDesign' },
  { id: 45, name: 'mOnePlus & mOne' },
  { id: 46, name: 'mGrow 615' }
];

const imgDir = path.join(__dirname, 'src', 'assets', 'image');

console.log('🚀 กำลังเริ่มทำการเปลี่ยนชื่อไฟล์ภาพเป็นภาษาอังกฤษ (ESM)...');

plans.forEach(plan => {
  // แปลงชื่อแผนเป็นรูปแบบที่ใช้ในไฟล์ (เปลี่ยน / เป็น -)
  const oldBaseName = plan.name.replace(/\//g, '-');
  const extensions = ['.jpg', '.jpeg', '.webp', '.png'];
  
  extensions.forEach(ext => {
    const oldPath = path.join(imgDir, `${oldBaseName}${ext}`);
    const newPath = path.join(imgDir, `plan-${plan.id}${ext}`);
    
    if (fs.existsSync(oldPath)) {
      try {
        fs.renameSync(oldPath, newPath);
        console.log(`✅ เปลี่ยนสำเร็จ: ${oldBaseName}${ext} ➡️ plan-${plan.id}${ext}`);
      } catch (err) {
        console.error(`❌ เกิดข้อผิดพลาดกับไฟล์ ${oldBaseName}${ext}:`, err.message);
      }
    }
  });
});

console.log('✨ เปลี่ยนชื่อไฟล์รูปภาพในเครื่องเสร็จสิ้นเรียบร้อยแล้ว!');

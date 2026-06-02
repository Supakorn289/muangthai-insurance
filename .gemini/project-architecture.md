# Project Architecture
โปรเจกต์นี้เป็น React Vite Application ที่ใช้ Tailwind CSS

## Folder Structure
src/
├── assets/         # เก็บรูปภาพและไอคอน
├── components/     # UI Components ต่างๆ
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── InsuranceCategory.jsx
│   ├── PlanCard.jsx
│   ├── ReviewSection.jsx
│   └── FloatingContact.jsx
├── data/           # ข้อมูลดิบ (แทน Database)
│   └── insuranceData.js  # ข้อมูลประกันทั้งหมด (ชีวิต, สุขภาพ, โรคร้ายแรง, บำนาญ, สะสมทรัพย์, อุบัติเหตุ, กลุ่ม, ยูนิตลิงค์)
├── App.jsx         # ไฟล์ประกอบ UI หลัก
└── index.css       # ตั้งค่า Global CSS และ Tailwind

## Data Implementation
- ข้อมูลแผนประกันทั้งหมดต้องถูกดึงมาจาก `src/data/insuranceData.js` เท่านั้น ห้าม Hardcode ข้อมูลลงใน Component โดยตรง
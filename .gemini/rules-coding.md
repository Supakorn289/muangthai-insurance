# Coding Rules & Tech Stack

## Core Technologies
- React (Functional Components + Hooks)
- Tailwind CSS (สำหรับ Styling และ Responsive Design)

## Strict Constraints
1. **NO JQUERY:** ห้ามใช้ jQuery อย่างเด็ดขาด
2. **Smooth Scroll:** ให้ใช้ CSS `html { scroll-behavior: smooth; }` หรือ API พื้นฐานของเบราว์เซอร์ (`window.scrollTo`) สำหรับการทำเอฟเฟกต์เลื่อนหน้าจอ
3. **Responsive Design:** บังคับใช้ Mobile-First Approach ผ่าน Tailwind (เช่น `w-full md:w-1/2 lg:w-1/3`)
4. **Clean Code:** - แยก Component ย่อยให้ชัดเจน
   - ตั้งชื่อตัวแปรเป็นภาษาอังกฤษที่สื่อความหมาย (CamelCase)
   - ใช้ Semantic HTML tags (เช่น `<nav>`, `<main>`, `<section>`)

## Design Style
- สไตล์เว็บต้องเป็น "Modern, Clean, Premium"
- ใช้โทนสีสว่าง (White, Light Gray) ตัดกับสีแบรนด์เมืองไทยประกันชีวิต (Orange/Pink)
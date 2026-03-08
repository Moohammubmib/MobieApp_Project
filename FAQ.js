// ดึงข้อมูลปุ่มคำถามทั้งหมด
const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    // หาตัวพ่อ (faq-item) และไอคอน
    const item = question.parentElement;
    const icon = question.querySelector('.faq-icon');
    
    // ตรวจสอบว่าเปิดอยู่หรือไม่
    const isActive = item.classList.contains('active');

    // ปิดทุกอันก่อน (ถ้าต้องการให้เปิดได้ทีละอัน)
    document.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.faq-icon').textContent = '+';
    });

    // ถ้าของเดิมไม่ได้เปิดอยู่ ให้เปิดอันที่คลิก
    if (!isActive) {
      item.classList.add('active');
      icon.textContent = '−';
    }
  });
});
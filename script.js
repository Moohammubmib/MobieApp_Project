function switchRound(round, event) {
    const imgElement = document.getElementById('display-img');

    // 1. เส้นทางรูปภาพ (ตรวจสอบให้ตรงกับโฟลเดอร์ assets ของคุณ)
    const images = {
        'portfolio': 'Admission1.png',
        'quota': 'Admission2.png',
        'admission': 'Admission4.png'
    };

    // 2. เปลี่ยนรูปภาพพร้อม Effect จางเข้า-ออก
    imgElement.style.opacity = 0;
    setTimeout(() => {
        imgElement.src = images[round];
        imgElement.style.opacity = 1;
    }, 200);

    // 3. จัดการ Class 'active' ให้ปุ่มหลัก
    const buttons = document.querySelectorAll('.main-round-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (event) {
        event.currentTarget.classList.add('active');
    }

    // 4. จัดการการแสดงผลเมนูย่อย (Sub-projects)
    document.querySelectorAll('.sub-projects').forEach(el => el.classList.remove('show'));
    const targetSub = document.getElementById('sub-' + round);
    if (targetSub) {
        targetSub.classList.add('show');
    }
}

function toggleProject(projectId) {
    const detail = document.getElementById(projectId);
    const roundImage = document.querySelector('.round-image');
    const roundContainer = document.querySelector('.round-container');

    // ตรวจสอบว่ากำลังจะเปิดหรือปิด
    if (detail.style.display === 'none' || detail.classList.contains('hide')) {
        // กรณี "เปิด" รายละเอียด
        detail.style.display = 'block';
        roundImage.classList.add('hide');       /* สั่งซ่อนรูปภาพ */
        roundContainer.classList.add('expanded'); /* ขยายพื้นที่ container */
    } else {
        // กรณี "ปิด" รายละเอียด
        detail.style.display = 'none';
        
        // เช็คว่ามีโครงการอื่นเปิดอยู่ไหม ถ้าไม่มีเลยค่อยเอารูปกลับมา
        const allDetails = document.querySelectorAll('.quota-detail-content');
        let anyOpen = false;
        allDetails.forEach(d => {
            if (d.style.display === 'block') anyOpen = true;
        });

        if (!anyOpen) {
            roundImage.classList.remove('hide');
            roundContainer.classList.remove('expanded');
        }
    }
}
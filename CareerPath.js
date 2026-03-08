const careerData = [
    {
        id: 'embedded',
        title: 'Embedded & Hardware Systems',
        desc: 'ออกแบบและพัฒนาระบบฝังตัว วงจรอิเล็กทรอนิกส์ สำหรับอุปกรณ์ IoT',
        sub: 'ระบบฝังตัว ไมโครคอนโทรลเลอร์ ฮาร์ดแวร์ IoT',
        core: ['Microcontroller and Embedded Systems', 'Circuits and Electronics', 'Digital System Design', 'Sensor and Cyber-Physical Systems','Computer Architecture and Operating Systems'],
        special: ['Measurement and Instrumentation', 'Next Generation Mobile Communication', 'Internetworking Design and Practice', 'Computer Vision and Image Processing'],
        outcomes: ['Embedded Engineer', 'IoT Firmware Developer', 'Hardware Engineer','Robotics Engineer']
    },
    {
        id: 'aiot',
        title: 'AIoT & Intelligent Systems',
        desc: 'ประยุกต์ใช้ AI และการวิเคราะห์ข้อมูลกับระบบ IoT เพื่อสร้างระบบอัจฉริยะ',
        sub: 'ผสานเทคโนโลยี AI และ IoT เพื่อสร้างระบบที่เรียนรู้ วิเคราะห์ และทำงานได้อย่างชาญฉลาด',
        core: ['Computer Programming', 'Data Structures and Algorithms', 'Database Systems','System Analysis and Design','Artificial Intelligence of Things'],
        special: ['Machine Learning', 'Data Analytics', 'Computer Vision and Image Processing', 'Cloud Computing', ],
        outcomes: ['AI Engineer', 'AIoT Engineer', 'Data Scientist','Computer Vision Engineer']
    },
    {
        id: 'cyber',
        title: 'Cybersecurity Engineering',
        desc: 'ป้องกันและรักษาความปลอดภัยของระบบเครือข่าย ข้อมูล และอุปกรณ์ IoT',
        sub: 'ความปลอดภัยระบบ IoT และเครือข่าย',
        core: ['Cyber Security Systems', 'Data Communications and IoT Networks', 'Principle of Communications Systems','Computer Architecture and Operating Systems'],
        special: ['Internetworking Design and Practice', 'Next Generation Mobile Communication', 'Digital Platforms and System Administration', 'Cloud Computing'],
        outcomes: ['Cybersecurity Engineer', 'Cloud Security Engineer', 'Network Security Engineer','Security Analyst']
    },
    {
        id: 'cloud',
        title: 'Cloud & DevOps ',
        desc: 'พัฒนาและดูแลระบบคลาวด์ การ Deploy ระบบ และบริหารโครงสร้างพื้นฐานดิจิทัล',
        sub: 'บริหารจัดการระบบคลาวด์ พัฒนาและปรับใช้ระบบให้ทำงานได้อย่างมีประสิทธิภาพ',
        core: ['Cloud Operations in Practices', 'Database System', 'Data Communications and IoT Networks', 'System Analysis and Design','Web and Mobile Application Development'],
        special: ['Cloud Computing', 'Digital Platforms and System Administration', 'Software Engineering','Internetworking Design and Practice'],
        outcomes: ['Cloud Engineer', 'DevOps Engineer', 'Platform Engineer','System Engineer','Infrastructure Engineer']
    },
    {
        id: 'web',
        title: 'Web & Application Development',
        desc: 'พัฒนาเว็บและแอปพลิเคชันเชื่อมต่อฐานข้อมูลและระบบแบบครบวงจร',
        sub: 'พัฒนาเว็บไซต์และแอปพลิเคชันทั้งฝั่ง Frontend และ Backend',
        core: ['Computer Programming', 'Object-Oriented Programming', 'Web and Mobile Application Development', 'Interaction Design','Data Structure and Algorithm','Database System'],
        special: ['Software Engineering', 'Data Analytics', 'Machine Learning','Computer Vision and Image Processing'],
        outcomes: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer','Mobile Application Developer','UI/UX Developer']
    },
    {
        id: 'industrial',
        title: 'Industrial IoT & Automation',
        desc: 'ออกแบบระบบอัตโนมัติ โรงงานอัจฉริยะ และควบคุมเครื่องจักรด้วย IoT',
        sub: 'ออกแบบระบบอัตโนมัติและควบคุมเครื่องจักรในโรงงานอัจฉริยะด้วยเทคโนโลยี IoT',
        core: ['Circuits and Electronics', 'PLC and Industrial Internet of Things', 'Sensor and Cyber-Physical Systems','Microcontroller and Embedded Systems','Wireless Communication for IoT Systems'],
        special: ['Industrial Automation System', 'Measurement and Instrumentation', 'Next Generation Mobile Communication', 'Internetworking Design and Practice'],
        outcomes: ['Industrial IoT Engineer', 'PLC Engineer', 'Smart Factory Engineer','Control Systems Engineer','Automation Engineer']
    }
];

const grid = document.getElementById('topics-grid');
const content = document.getElementById('detail-content');

// ฟังก์ชันเริ่มการทำงาน
function init() {
    careerData.forEach((item, index) => {
        const card = document.createElement('div');
        // กำหนดให้การ์ดแรกเป็น active ตั้งแต่เริ่ม
        card.className = `career-card ${index === 0 ? 'active' : ''}`;
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        `;
        card.onclick = () => showDetail(item, card);
        grid.appendChild(card);
        
        // แสดงรายละเอียดของใบแรกสุด
        if(index === 0) renderDetail(item);
    });
}

// ฟังก์ชันสลับการเลือกการ์ด
function showDetail(item, element) {
    document.querySelectorAll('.career-card').forEach(c => c.classList.remove('active'));
    element.classList.add('active');
    renderDetail(item);
}

// ฟังก์ชันวาดเนื้อหาด้านล่าง
function renderDetail(item) {
    content.innerHTML = `
        <div class="detail-content-wrapper">
            <div style="text-align: left; margin-bottom: 40px;">
                <h2 class="track-title" style="margin-bottom: 10px; color: #000; font-size: 1.7rem; font-weight: bold;">${item.title}</h2>
                <p class="track-subtitle" style="color: #666; font-size: 1.1rem;">${item.sub}</p>
            </div>

            <div class="content-cols">
                <div class="detail-column">
                    <h3 style="color: #000000; margin-bottom: 25px; font-weight: bold;">วิชาหลักที่เกี่ยวข้อง</h3>
                    <ul class="subject-list">
                        ${item.core.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>

                <div class="detail-column">
                    <h3 style="color: #000000; margin-bottom: 25px; font-weight: bold;">วิชาเลือกเฉพาะทาง</h3>
                    <ul class="subject-list">
                        ${item.special.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>

                <div class="detail-column">
                    <h3 style="color: #000000; margin-bottom: 25px; font-weight: bold;">Career Outcome</h3>
                    <ul class="subject-list outcomes">
                        ${item.outcomes.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div style="text-align: center;">
                <a href="https://drive.google.com/file/d/1QwCpsDUdwfdnNp4ZKYXeEyMoTk7DBRXQ/view" 
                    target="_blank">
                        <button class="learn-more-btn" style="margin-top: 50px; cursor: pointer;">
                            Explore Full Curriculum
                        </button>
                    </a>
            </div>
        </div>
    `;
}

// เรียกใช้งาน
init();
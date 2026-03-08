// เพิ่มลูกเล่นเล็กน้อย เช่น การเปลี่ยนสี Navbar เมื่อ Scroll
window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
        nav.style.boxShadow = "0 4px 10px rgba(0,0,0,0.5)";
    } else {
        nav.style.boxShadow = "none";
    }
};

// แจ้งเตือนเมื่อคลิกเมนูที่ยังไม่พัฒนา (ตัวอย่าง)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        if(this.getAttribute('href') === "#") {
            console.log("กำลังไปที่หน้า: " + this.innerText);
        }
    });
});

function showAlert(text){
    alert(text + " page is under development.");
}

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

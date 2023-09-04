// เลือกใช้ HTML ที่เกี่ยวข้อง
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");
// เป็นฟังก์ชันการกรองการ์ดรูปภาพตามปุ่มตัวกรอง
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");
    filterableCards.forEach(card => {
        // เป็นส่วนที่ถ้ากดกรองการ์ดก็จะตรงกับที่กดหรือกดกรองทั้งหมดก็จะกรองการ์ดทั้งหมดให้แสดงออกมาตามที่ต้องการ
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}
filterButtons.forEach(button => button.addEventListener("click", filterCards));
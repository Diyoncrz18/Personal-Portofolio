const navId = document.getElementById("nav_menu");
const ToggleBtnId = document.getElementById("toggle_btn");
const CloseBtnId = document.getElementById("close_btn");

// ===== SHOW MENU ===== //
ToggleBtnId.addEventListener("click", () => {
   navId.classList.add("show");
});

// ===== HIDE MENU ===== //
CloseBtnId.addEventListener("click", () => {
   navId.classList.remove("show");
});

AOS.init();

// Logo
gsap.from(".logo", {
   opacity: 0,
   y: -10,
   delay: 1,
   duration: 0.5,
});

// nav menu
gsap.from(".nav_menu_list .nav_menu_item", {
   opacity: 0,
   y: -10,
   delay: 1,
   duration: 0.5,
   stagger: 0.3,
});

// toggle btn
gsap.from(".toggle_btn", {
   opacity: 0,
   y: -10,
   delay: 1,
   duration: 0.5,
});

// main heading
gsap.from(".main_heading", {
   opacity: 0,
   y: 20,
   delay: 2,
   duration: 0.5,
});

// btn
gsap.from(".btn_wrapper", {
   opacity: 0,
   y: 20,
   delay: 1.8,
   duration: 0.5,
});

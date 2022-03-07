const menuBtn = document.querySelector(".burguer")
const menuNav = document.querySelector(".nav__menu")

menuBtn.addEventListener("click", () =>{
    menuNav.classList.toggle("toggle")
})
const menuBoton = document.querySelector(".linea");
let menuOpen = false;

menuBoton.parentElement.addEventListener("click", () => {
    if(!menuOpen){
        menuBoton.classList.add("open");
        menuOpen = true;
    } else {
        menuBoton.classList.remove("open");
        menuOpen = false;
    }
});


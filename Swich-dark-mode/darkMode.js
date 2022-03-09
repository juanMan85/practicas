const contenedorBoton = document.querySelector(".contenedorSwich");
const teclaBoton = document.querySelector(".botonSwich");
const body = document.querySelector(".body");


contenedorBoton.addEventListener("click", ()=>{
    teclaBoton.classList.toggle("accionBoton")
    body.classList.toggle("dark")
    contenedorBoton.classList.toggle("noche")
})
const boton = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__ul")
let flag = true;

boton.addEventListener("click", ()=>{
    if(flag){
        menu.classList.add("ocultar")
        menu.classList.remove("mostrar")
        flag = false
    }
    else{
        menu.classList.remove("ocultar")
        menu.classList.add("mostrar")
        flag=true;
    }
})
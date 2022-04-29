let hamburger = document.getElementById("hamburger")
let menu = document.getElementById("menu")
let cross = document.getElementById("cross")
let background = document.getElementById("background")


let showMenu = () =>{
    menu.classList.add("menu__container--active")
    background.classList.add("menu__background--active")
}

let hideMenu = () =>{
    menu.classList.remove("menu__container--active")
    background.classList.remove("menu__background--active")
}

cross.addEventListener("click", hideMenu)
hamburger.addEventListener("click", showMenu)

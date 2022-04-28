let numbers = document.querySelectorAll(".number")
let scroll = 0
let x = 0
let y = 0
let z = 0

let x1 = 35
let x2 = 5
let x3 = 67

let fn = () => {
    setInterval(increment, 50)
}


let increment = () => {
    x < x1 ? x++ : null
    y < x2 ? y++ : null
    z < x3 ? z++ : null

    numbers[0].textContent = `${x}`
    numbers[1].textContent = `${y}`
    numbers[2].textContent = `${z}`
}
window.addEventListener('scroll',()=>{
    scroll = window.scrollY
    console.log(scroll)
    scroll > 1000 ? fn() : null
})

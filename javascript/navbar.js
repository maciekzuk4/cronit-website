let about = document.getElementById("about")
let aboutSection = document.getElementById("aboutSection")
let realisations = document.getElementById("realisations")
let realisationsSection = document.getElementById("realisationsSection")
let offer = document.getElementById("offer")
let offerSection = document.getElementById("offerSection")
let contact = document.getElementById("contact")
let contactSection = document.getElementById("contactSection")
let navbar = document.getElementById("navbar")
about.addEventListener("click",()=>{
    aboutSection.scrollIntoView()
    console.log("jhd")
})

realisations.addEventListener("click",()=>{
    realisationsSection.scrollIntoView()
})

offer.addEventListener("click",()=>{
    offerSection.scrollIntoView()
    console.log("jhd")
})

realisations.addEventListener("click",()=>{
    realisationsSection.scrollIntoView()
})

contact.addEventListener("click",()=>{
    contactSection.scrollIntoView()
})

var menuIcon = document.querySelector(".nav i")
var close = document.querySelector(".menu i")





gsap.from(".nav i ", {
    y: -20,
    delay: 0.5,
    duration: 1,

    opacity: 0
})
gsap.from(".nav h1 ", {
    y: -20,
    delay: 0.5,
    duration: 1,
    opacity: 0
})
gsap.from(".text-card", {

    delay: 1,
    duration: 1.5,
    scale: 0,
    opacity: 0
})

var tl = gsap.timeline()
tl.to(".menu", {
    right: 0,
    duration: 0.8

})
tl.from(".menu h1", {
    x: 100,
    stagger: 0.3,
    duration: 0.8

})
tl.from(".menu i", {
    opacity: 0

})

var menu = document.querySelector(".menu")
var textCard = document.querySelector(".text-card")
textCard.classList.remove("d-none")


tl.pause()

menuIcon.addEventListener("click", function() {
    tl.play(),
        menu.classList.remove("d-none")
    if (window.matchMedia("(max-width: 760px)").matches) {
        textCard.classList.add("d-none")
    }


})
textCard.classList.remove("d-none")
close.addEventListener("click", function() {
    tl.reverse(),
        menu.classList.add("d-none"),
        textCard.classList.remove("d-none")


})
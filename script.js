//cursor
var webpage = document.querySelector("#webpage")
var cursor = document.querySelector(".cursor")
webpage.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out"
    })
})



// navbar

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
//home page
gsap.from(".text-card", {

    delay: 0.5,
    duration: 1.5,
    scale: 0,
    opacity: 0
})
gsap.from(".list-img", {

    y: 20,
    delay: 0.5,
    duration: 1.5,
    opacity: 0
})


//home-page images
window.addEventListener("wheel", function(dets) {
    if (dets.deltaY > 0) {
        gsap.to(".each-img", {
            transform: 'translateX(-100%)',

            duration: 4,
            repeat: -1,
            ease: 'none'
        })

    } else {
        gsap.to(".each-img", {
            transform: 'translateX(0%)',

            duration: 4,
            repeat: -1,
            ease: 'none'
        })
        gsap.to(".each-img img", {
            rotate: 0
        })
    }

})



// menu section
var menuIcon = document.querySelector(".nav i");
var closeIcon = document.querySelector(".menu .icon");
var menu = document.querySelector(".menu");
var textCard = document.querySelector(".text-card");

// Animation timeline for opening the menu
var tl = gsap.timeline({
    paused: true
});
tl.to(menu, {
    right: 0,
    duration: 0.8
})
tl.from(".menu a", {
    x: 100,
    stagger: 0.3,
    duration: 0.8
})
tl.from(".menu .icon", {
    opacity: 0
})

// Show the text card initially
textCard.classList.remove("d-none");

// Event listener for menu icon click
menuIcon.addEventListener("click", function() {
    tl.play();
    menu.classList.remove("d-none");
    if (window.innerWidth < 768) {
        textCard.classList.add("d-none");
    }
});

closeIcon.addEventListener("click", function() {
    tl.reverse(),
        menu.classList.add("d-none"),
        textCard.classList.remove("d-none")


})
window.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        tl.reverse();
        menu.classList.add("d-none");
        textCard.classList.remove("d-none");
    }
});

// about section 
if (window.matchMedia("(min-width: 768px)").matches){
gsap.from(".about-section",{
    scale:1,
    duration:0.5,
    x:-50,
    opacity:0,
    
    scrollTrigger:{
        trigger:"#about .about-section",
        scroller:"body",
        
        start:"top 60%",
        end:"top 30%",
        scrub:2
        

    }
})
}
if (window.matchMedia("(min-width: 768px)").matches){
gsap.from(".about-img",{
    scale:1,
    opacity:0,
    x:50,
    duration:0.5,
    scrollTrigger:{
        trigger:"#about .about-img",
        scroller:"body",
        
        start:"top 60%",
        end:"top 30%",
        scrub:2

    }
})
}




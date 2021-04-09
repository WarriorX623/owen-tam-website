const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
    if (menu.classList.contains("opened")) {
        menu.classList.remove("opened");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";

    }else {
        menu.classList.add("opened");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

toggle.addEventListener('click', toggleMenu, false);


window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});
gsap.registerPlugin(ScrollTrigger);

gsap.from(".banner-h", {x:-200, duration: 1, ease: "power1"});
gsap.from(".banner-p", {x:200, duration: 1, ease: "power1"});
gsap.from(".banner-btn", {x:-200, duration: 1, ease: "power1"});
gsap.from(".services-p", {
    scrollTrigger :{
        trigger: ".services-p",
        toggleActions: "play pause resume pause"
    }, x:200, duration: 0.7, ease: "power1"});
gsap.from(".services-h", {
    scrollTrigger :{
        trigger: ".services-h",
        toggleActions: "play pause resume pause"
    }, x:-200, duration: 0.7, ease: "power1"});
gsap.from(".projects-p", {
    scrollTrigger :{
        trigger: ".projects-p",
        toggleActions: "play pause resume pause"
    }, x:200, duration: 0.7, ease: "power1"});
gsap.from(".projects-h", {
    scrollTrigger :{
        trigger: ".projects-h",
        toggleActions: "play pause resume pause"
    }, x:-200, duration: 0.7, ease: "power1"});
      
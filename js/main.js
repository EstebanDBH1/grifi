gsap.from(".divider", {
    width: "0%",
    ease: "power3.easeInOut",
    duration: 1.5
})

gsap.from(".navbar-container", {
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1.5,
    delay: 0.5
})

gsap.from(".header-container h1", {
    y: "100%",
    ease: Expo.easeInOut,
    duration: 1.5,
    delay: 0.5
})
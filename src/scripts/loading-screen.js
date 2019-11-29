import { gsap, TweenLite } from "gsap";

const LoadingScreen = {
    el: document.querySelector('.loading-screen'),
    view1: document.querySelector('.loading-screen_view1'),
    icon1: document.querySelector('.loading-screen-icons__sport-icon'),
    view2: document.querySelector('.loading-screen_view2'),
    icon2: document.querySelector('.loading-screen-icons__sport-icon2'),
    view3: document.querySelector('.loading-screen_view3'),
    icon3: document.querySelector('.loading-screen-icons__sport-icon3'),

    animateScreens() {
        var tl = gsap.timeline();
        tl.to(this.icon1, {opacity: '0', duration: 0.2, ease: "power1.out"}, 1);
        tl.to(this.view2, {x: '-100%', duration: 1, ease: "power1.out"}, 1);
        tl.to(this.icon2, {opacity: '1', duration: 1, ease: "power1.out"}, 1);
        tl.to(this.view3, {y: '-100%', duration: 1, ease: "power1.out"}, 2);
        tl.to(this.icon2, {opacity: '0', duration: 0.2, ease: "power1.out"}, 2);
        tl.to(this.icon3, {opacity: '1', duration: 1, ease: "power1.out"}, 2);
        tl.to(this.el, {opacity: '0', duration: 1, ease: "power1.out"}, 3);
    },
};

export default LoadingScreen;

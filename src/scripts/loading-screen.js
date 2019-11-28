import { gsap, TweenLite } from "gsap";

const LoadingScreen = {
    el: document.querySelector('.loading-screen'),
    view1: document.querySelector('.loading-screen_view1'),
    view2: document.querySelector('.loading-screen_view2'),
    view3: document.querySelector('.loading-screen_view3'),

    animateScreens() {

        var tl = gsap.timeline({repeat: 2, repeatDelay: 1});
        tl.to(this.view2, {x: '-100%', duration: 1});
        tl.to(this.view3, {y: '-100%', duration: 1});
    },
};

export default LoadingScreen;

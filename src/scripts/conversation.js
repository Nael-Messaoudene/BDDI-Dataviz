var gsap = require('gsap');
// TweenMax/TimelineMax will be global in v2. In v3, they will be on the gsap object
var TweenMax = TweenMax || gsap.TweenMax;
var TimelineMax = TimelineMax || gsap.TimelineMax;
factory(require('scrollmagic'), TweenMax, TimelineMax);
import ScrollMagic from 'scrollmagic';
ScrollMagic.registerGSAP(gsap);

class conversation{
    constructor(){

        this.init();

    }

    init(){

        // this.bindEvents();
        this.conversation();

    }


    conversation(){
        console.log('conversation');

        var controller = new ScrollMagic.Controller();



        var revealElements = document.getElementsByClassName("message--box");

        let tween = gsap.fromTo(revealElements,{opacity:0, y:20,},{opacity:1, duration:1, y:0});
        for (var i=0; i<revealElements.length; i++) { // create a scene for each element
            new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 50,												 // start a little later
                triggerHook: 0.9,
            })
                .setTween(tween)
                .setClassToggle(revealElements[i], "visible") // add class toggle
                .addTo(controller);
        }

    }
    // bindEvents(){
    //
    // }



}
export default conversation;

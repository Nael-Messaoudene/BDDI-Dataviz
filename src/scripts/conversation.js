import {gsap} from "gsap";
import AOS from 'aos';


class conversation{
    constructor(){

        this.init();

    }

    init(){

        // this.bindEvents();
        this.conversation();

    }


    conversation(){


// You can also pass an optional settings object
// below listed default settings
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: -300, // offset (in px) from the original trigger point


        });
        AOS.init();


    }
    // bindEvents(){
    //
    // }



}
export default conversation;

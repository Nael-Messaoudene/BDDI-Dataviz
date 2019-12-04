import {gsap} from "gsap";
import ScrollReveal from 'scrollreveal';

class conversation{
    constructor(){

        this.init();

    }

    init(){

        // this.bindEvents();
        this.conversation();

    }


    conversation(){

        ScrollReveal().reveal('.message--box', {
            container: '.desktop-msg',
            delay: 375,
            duration: 500,
            reset: true,
            distance: '50px',
            viewOffset: {
                top: 0,
            },
            viewFactor: 1.0
        });


    }


    // bindEvents(){
    //
    // }



}
export default conversation;

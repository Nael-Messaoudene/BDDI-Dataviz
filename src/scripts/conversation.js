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
            distance: '-20px',
            viewOffset: {
                top: 0,
            },
            viewFactor: 0.4
        });

        ScrollReveal().reveal('.message--box', {
            container: '.final-desktop',
            delay: 375,
            duration: 500,
            reset: true,
            distance: '-20px',
            viewOffset: {
                top: 0,
            },
            viewFactor: 0.4
        });

        window.addEventListener('resize', function () {

            ScrollReveal().reveal('.message--box', {
                container: '.final-mobile',
                delay: 100,
                duration: 500,
                reset: true,
                distance: '-20px',
                viewOffset: {
                    top: 0,
                },
                viewFactor: 0.4
            });

            //mobile
            ScrollReveal().reveal('.message--box', {
                container: '.wrap-message',
                delay: 100,
                duration: 500,
                reset: true,
                distance: '-20px',
                viewOffset: {
                    top: 0,
                },
                viewFactor: 0.4
            });
        });
        ScrollReveal().reveal('.message--box', {
            container: '.wrap-message',
            delay: 375,
            duration: 500,
            reset: true,
            distance: '-20px',
            viewOffset: {
                top: 0,
            },
            viewFactor: 0.4
        });

        //mobile final
        ScrollReveal().reveal('.message--box', {
            container: '.final-mobile',
            delay: 100,
            duration: 500,
            reset: true,
            distance: '-20px',
            viewOffset: {
                top: 0,
            },
            viewFactor: 0.4
        });

    }


    // bindEvents(){
    //
    // }



}
export default conversation;

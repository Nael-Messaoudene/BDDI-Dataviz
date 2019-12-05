import ScrollReveal from 'scrollreveal';
import {gsap} from 'gsap';

// const Popin = {
//     mapPopinHandler(open) {
//         console.log("mappopin");
//     },
//
//     endPopinHandler(open) {
//         console.log("endpopin");
//
//         function displayEndPopin(){
//             console.log('rrrrr');
//             gsap.to('#end',{duration:1, display:'flex'});
//         }
//
//         ScrollReveal().reveal('.end', {
//             container: '.final-desktop',
//             afterReveal: displayEndPopin,
//             distance: '10px',
//             viewOffset: {
//                 top: 600,
//             },
//             viewFactor: 0
//         });
//
//     }
// };

class Popin {

    constructor() {
        this.init();
    }

    init() {
        this.popin()
    }

    popin(){

        function displayEndPopin(){
            gsap.fromTo('#end',{ display:'none',yPercent: -100},{duration:1, display:'flex', opacity:1, yPercent: 0});
            gsap.to('.popin',{duration:1,position: 'fixed'});
            gsap.set('body', {overflow: 'hidden'});

            let index = document.querySelector('#goToIndex');

            index.addEventListener('click',function () {
                gsap.fromTo('.ressources',{opacity:0},{opacity:1, display:'flex', yPercent: -100});
            });

            let closeIndex = document.querySelector('.ressources .close-index');

            closeIndex.addEventListener('click',function () {
                gsap.set('.ressources', {display: 'none'});
            });


            let popinbg = document.querySelector('.popin');

            popinbg.addEventListener('click', function () {
                gsap.set('.popin',{display:'none'});
                gsap.set('body', {overflow: 'initial'});

            });


            let goBack = document.querySelector('#goToTop');

            goBack.addEventListener('click', function () {
                window.scrollTo(0,0);
            })



        }

        ScrollReveal().reveal('.popin-evt', {
            container: '.final-desktop',
            afterReveal: displayEndPopin,
            distance: '10px',
            viewFactor: 0.5
        });
    }


}


export default Popin;

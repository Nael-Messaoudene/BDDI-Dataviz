import { gsap } from 'gsap';

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

        gsap.to('.message--box', {
            duration: 2,
            opacity: 1,
            delay: 1, stagger:{
                each: 0.9
            } });

    }
    // bindEvents(){
    //
    // }



}
export default conversation;

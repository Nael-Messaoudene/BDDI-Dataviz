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
    }
    // bindEvents(){
    //     window.onresize = ()=>{this.getDims()};
    //     this.$container.addEventListener('mousemove', this.onMouse.bind(this));
    // }



}
export default conversation;

import ScrollReveal from 'scrollreveal';
import {gsap} from 'gsap';

class homeScreenAnimation {

    constructor() {
        this.init();
    }

    init() {
        this.parallax()
    }


    parallax(){

        window.addEventListener('mousemove',function (e) {
            let home = document.querySelector('.homescreen');
           let  w = home.clientWidth;
            let h = home.clientHeight;
            let offsetX = 0.5 - e.pageX / w;
            let offsetY = 0.5 - e.pageY / h;

            let div = document.querySelectorAll("div");
            console.log(div.toString());

            for(let i = 0; i < div.length; i++) {
                let data = div[i].getAttribute("data-offset");
                data = parseInt(data);
                let trans = "translate3d("+Math.round(offsetX*data)+"%,"+Math.round(offsetY*data)+"%, 0)";
                div[i].style.transform = trans;
            }
        })
    }


}


export default homeScreenAnimation;

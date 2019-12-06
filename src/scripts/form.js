import TweenLite from "gsap";

const Form = {
    form() {
        const steps = document.getElementsByClassName('inputs');
        const indicators = document.getElementsByClassName('step');

        for(let i =0; i<indicators.length; i++) {
            indicators[i].addEventListener("click", () => showstep(i))
        }

        function showstep(number) {
            const activestep = document.querySelector('.inputs-active');
            const activeindicator = document.querySelector('.step-active');

            activeindicator.classList.remove("step-active");
            activestep.classList.remove("inputs-active");

            steps[number].classList.add("inputs-active");
            indicators[number].classList.add("step-active");

            TweenLite.to(activestep, .3, {opacity:0});
            TweenLite.to(steps[number], .6, {opacity:1});
        }
    }
};

export default Form;

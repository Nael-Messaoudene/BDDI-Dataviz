import Flickity from 'flickity';

const AthleteSlider = {
    el: document.querySelector('.athlete-slider-slides'),

    slideAthletes()  {
        var flkty = new Flickity( this.el, {
            // options
            contain: true,
            infinite: true,
            wrapAround: true,
            pageDots: false,
            prevNextButtons: false,
        });
    }
};

export default AthleteSlider;

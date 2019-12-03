import Flickity from 'flickity';

const AthleteSlider = {
    el: document.querySelector('.athlete-slider-slides'),
    athleteDatas: "./datas/athletes.json",
    athletes: '',
    request: '',

    getAthletesDatas() {
        this.request = obj => {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open(obj.method || "GET", obj.url);
                xhr.onload = () => {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.statusText);
                    }
                };
                xhr.onerror = () => reject(xhr.statusText);
                xhr.send(obj.body);
            });
        };
    },

    displayAthletes()  {
        this.request({url: this.athleteDatas})
            .then(data => {
                this.athletes = JSON.parse(data);
                console.log(this.athletes);

                this.athletes.forEach(athlete => {
                    console.log(athlete.name);
                });
            })
            .catch(error => {
                console.log(error);
            });
    },

    slideAthletes()  {
        var flkty = new Flickity( this.el, {
            // options
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true

        });
    }
};

export default AthleteSlider;

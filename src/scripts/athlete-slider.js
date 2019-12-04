import Flickity from 'flickity';

const AthleteSlider = {
    el: document.querySelector('.athlete-slider-slides'),
    athleteItem: document.querySelector('.athlete-item'),
    athleteItemClose: document.querySelector('.athlete-item-close'),
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
                    this.el.insertAdjacentHTML('beforeend',
                        '<div class="athlete-slider-slides-item" data-color="'+athlete.color+'">' +
                        '                <div class="athlete-slider-slides-item__image">' +
                        '                    <img src="'+'skiing.c962b042'+'.svg'+'"></div>' +
                        '                <div class="athlete-slider-slides-item__name">' + athlete.name +
                        '                </div>' +
                        '            </div>');
                });

                const athletesList = document.querySelectorAll(".athlete-slider-slides-item");

                athletesList.forEach(athleteItem => {
                    athleteItem.addEventListener("click", () => {
                        this.athleteItem.classList.add('athlete-item-visible');
                    });
                });

                this.athleteItemClose.addEventListener("click", () => {
                    this.athleteItem.classList.remove('athlete-item-visible');
                });


            })
            .catch(error => {
                console.log(error);
            });
    },

    slideAthletes()  {
        this.request({url: this.athleteDatas})
            .then(() => {
                var flkty = new Flickity( this.el, {
                    // options
                    prevNextButtons: false,
                    pageDots: false,
                    wrapAround: true
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
};

export default AthleteSlider;

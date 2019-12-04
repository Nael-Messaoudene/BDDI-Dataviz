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
                        '                <div class="athlete-slider-slides-item__sport">' + athlete.sport +
                        '                </div>' +
                        '                <div class="athlete-slider-slides-item__birthdate">' + athlete.birthdate +
                        '                </div>' +
                        '                <div class="athlete-slider-slides-item__handicap">' + athlete.handicap +
                        '                </div>' +
                        '                <div class="athlete-slider-slides-item__history">' + athlete.history +
                        '                </div>' +
                        '       </div>');
                });

                const athletesList = document.querySelectorAll(".athlete-slider-slides-item");
                console.log(athletesList);

                athletesList.forEach((athleteItem) => {
                    const athleteInfos = {
                        athleteName: athleteItem.querySelector(".athlete-slider-slides-item__name").innerText,
                        athleteSport: athleteItem.querySelector(".athlete-slider-slides-item__sport").innerText,
                        athleteBirthdate: athleteItem.querySelector(".athlete-slider-slides-item__birthdate").innerText,
                        athleteHandicap: athleteItem.querySelector(".athlete-slider-slides-item__handicap").innerText,
                        athleteHistory: athleteItem.querySelector(".athlete-slider-slides-item__history").innerText,
                    };

                    //console.log(document.querySelector(".athlete-slider-slides-item").innerHTML);

                    athleteItem.addEventListener("click", () => {
                        this.athleteItem.classList.add('athlete-item-visible');
                        this.athleteItem.insertAdjacentHTML('beforeend', '        <span class="athlete-item-close"></span>\n' +
                            '        <span class="athlete-item-backgroundname">\n' +
                                         athleteInfos.athleteName +
                            '            DAVET\n' +
                            '        </span>\n' +
                            '        <div class="athlete-item-profile" style="background-image: url(\'/assets/images/daviet.jpg\')">\n' +
                            '            <div class="athlete-item-profile__icon">\n' +
                            '                <img src="/assets/images/skiing.svg">\n' +
                            '            </div>\n' +
                            '        </div>\n' +
                            '        <div class="athlete-item-description">\n' +
                            '            <div class="athlete-item-description-sport">\n' +
                                        athleteInfos.athleteSport +
                            '            </div>\n' +
                            '            <div class="athlete-item-description-name">\n' +
                                        athleteInfos.athleteName +
                            '            </div>\n' +
                            '            <div class="athlete-item-description-datas">\n' +
                            '                <div class="athlete-item-description-medals">\n' +
                            '                    <p class="athlete-item-description-title">MEDAILLES</p>\n' +
                            '                </div>\n' +
                            '                <div class="athlete-item-description-origin">\n' +
                            '                    <p class="athlete-item-description-title">ORIGINAIRE DE</p>\n' +
                            '                </div>\n' +
                            '            </div>\n' +
                            '            <div class="athlete-item-description-period">\n' +
                            '                <p class="athlete-item-description-title">DATE DE NAISSANCE</p>\n' +
                            '                <p class="athlete-item-description-text">' + athleteInfos.athleteBirthdate + ' </p>\n' +
                            '            </div>\n' +
                            '            <div class="athlete-item-description-birthdate">\n' +
                            '\n' +
                            '            </div>\n' +
                            '            <div class="athlete-item-description-handicap">\n' +
                            '                <p class="athlete-item-description-title">HANDICAP</p>\n' +
                            '                <p class="athlete-item-description-text">' + athleteInfos.athleteHandicap + '</p>\n' +
                            '            </div>\n' +
                            '            <div class="athlete-item-description-history">\n' +
                            '                <p class="athlete-item-description-title">PALMARÈS</p>\n' +
                            '                <p class="athlete-item-description-text">'+ athleteInfos.athleteHistory +'</p>\n' +
                            '            </div>\n' +
                            '        </div>');
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

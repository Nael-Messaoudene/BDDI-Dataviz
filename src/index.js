import "./style/styles.scss";

import LoadingScreen from "./scripts/loading-screen";
import Popin from "./scripts/popin";
import athlete from './scripts/athlete-number'
import AthleteSlider from "./scripts/athlete-slider";

import Hearings from "./scripts/hearings";
import Worldmap from "./scripts/worldmap";
import conversation from './scripts/conversation'

//Component LoadingScreen
const loadingscreen = ((loadingscreen) => {
    loadingscreen.iconsMorphing();
    loadingscreen.animateScreens();
})(LoadingScreen);

//Component Popin
// const popin = ((popin) => {
//     // open la popin map au clic sur des pays autre que la france
//     popin.mapPopinHandler(true);
//     // open la popin end une fois arrivés en bas
//     popin.endPopinHandler(true);
//     // close la popin map au clic sur le fond de popin ou sur le bouton "revenir"
//     popin.mapPopinHandler(false);
//     //close la popin end au clic sur le fond ou au clic sur les boutons
//     popin.endPopinHandler(false);
// })(Popin);

//Component LoadingScreen
const worldmap = ((worldmap) => {
    worldmap.initMap();
})(Worldmap);


//Component AthleteSlider
const athleteslider = ((athleteslider) => {
    athleteslider.getAthletesDatas();
    athleteslider.displayAthletes();
    athleteslider.slideAthletes();
})(AthleteSlider);

const hearings = ((hearings) => {
    hearings.drawGraph();
})(Hearings);


const App = {

    init(){
        window.addEventListener('DOMContentLoaded', () => {
            new conversation();
            new athlete();
            new Popin();

        });
    }
};
App.init();

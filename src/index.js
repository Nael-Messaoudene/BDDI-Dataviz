import "./style/styles.scss";

import LoadingScreen from "./scripts/loading-screen";
import Popin from "./scripts/popin";
import athlete from './scripts/athlete-number'
import AthleteSlider from "./scripts/athlete-slider";

import Hearings from "./scripts/hearings";
import Worldmap from "./scripts/worldmap";
import conversation from './scripts/conversation'
import HomeScreen from "./scripts/homescreen";
import homeScreenAnimation from './scripts/homeScreen-animations'

//Component LoadingScreen
const loadingscreen = ((loadingscreen) => {
    loadingscreen.goToTop();
    loadingscreen.iconsMorphing();
    loadingscreen.animateScreens();
})(LoadingScreen);

//Component HomeScreen
const homescreen = ((homescreen) => {
    homescreen.startStory();
})(HomeScreen);

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
            new homeScreenAnimation();
        });
    }
};
App.init();

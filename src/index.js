import "./style/styles.scss";
import LoadingScreen from "./scripts/loading-screen";
import AthleteSlider from "./scripts/athlete-slider";
import Hearings from "./scripts/hearings";
import Worldmap from "./scripts/worldmap";
import conversation from './scripts/conversation'

//Component LoadingScreen
const loadingscreen = ((loadingscreen) => {
    loadingscreen.iconsMorphing();
    loadingscreen.animateScreens();
})(LoadingScreen);

//Component LoadingScreen
const worldmap = ((worldmap) => {
    worldmap.initMap();
})(Worldmap);

const App = {

    init(){
        window.addEventListener('DOMContentLoaded', () => {
            new conversation();
        });
    }
};
App.init();

//Component AthleteSlider
const athleteslider = ((athleteslider) => {
    athleteslider.getAthletesDatas();
    athleteslider.displayAthletes();
    athleteslider.slideAthletes();
})(AthleteSlider);

const hearings = ((hearings) => {
    hearings.drawGraph();
})(Hearings);



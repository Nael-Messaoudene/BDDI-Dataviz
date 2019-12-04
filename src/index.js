import "./style/styles.scss";
import LoadingScreen from "./scripts/loading-screen";
import athlete from './scripts/athlete-number'
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
            new athlete();

        });
    }
};
App.init();

//Component Hearings
const hearings = ((hearings) => {
    hearings.drawGraph();
})(Hearings);



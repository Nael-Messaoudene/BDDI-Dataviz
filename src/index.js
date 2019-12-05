import "./style/styles.scss";
import LoadingScreen from "./scripts/loading-screen";
import athlete from './scripts/athlete-number'
import AthleteSlider from "./scripts/athlete-slider";

import Hearings from "./scripts/hearings";
import Worldmap from "./scripts/worldmap";
import conversation from './scripts/conversation'
import Form from "./scripts/form";

if (window.location.href == "http://localhost:1234/form.html") {
    //Component Form
    const form = ((form) => {
        form.initForm();
    })(Form);
} else {
    //Component LoadingScreen
    const loadingscreen = ((loadingscreen) => {
        loadingscreen.goToTop();
        loadingscreen.iconsMorphing();
        loadingscreen.animateScreens();
    })(LoadingScreen);

//Component Worldmap
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
            });
        }
    };
    App.init();
}



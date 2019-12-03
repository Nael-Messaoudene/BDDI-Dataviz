import "./style/styles.scss";
import LoadingScreen from "./scripts/loading-screen";
import AthleteSlider from "./scripts/athlete-slider";

//Component LoadingScreen
const loadingscreen = ((loadingscreen) => {
    loadingscreen.iconsMorphing();
    loadingscreen.animateScreens();
})(LoadingScreen);

//Component AthleteSlider
const athleteslider = ((athleteslider) => {
    athleteslider.getAthletesDatas();
    athleteslider.displayAthletes();
    athleteslider.slideAthletes();
})(AthleteSlider);


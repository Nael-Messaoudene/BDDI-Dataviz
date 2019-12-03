import "./style/styles.scss";
import LoadingScreen from "./scripts/loading-screen";
import Hearings from "./scripts/hearings";

//Component LoadingScreen
const loadingscreen = ((loadingscreen) => {
    loadingscreen.iconsMorphing();
    loadingscreen.animateScreens();
})(LoadingScreen);

//Component LoadingScreen
const hearings = ((hearings) => {
    hearings.drawGraph();
})(Hearings);


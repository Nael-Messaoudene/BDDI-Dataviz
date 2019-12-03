import "./style/styles.scss";
import LoadingScreen from "./scripts/loading-screen";
import WorldMap from "./scripts/worldmap";

console.log("index!");

//Component WorldMap
const worldmap = ((worldmap) => {
    worldmap.initMap();
})(WorldMap);


//Component LoadingScreen
const loadingscreen = ((loadingscreen) => {
    loadingscreen.iconsMorphing();
    loadingscreen.animateScreens();
})(LoadingScreen);

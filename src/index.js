import "./style/styles.scss";

import WorldMap from "./scripts/worldmap";

console.log("index!");

//Component WorldMap
const worldmap = ((worldmap) => {
    worldmap.initMap();
})(WorldMap);

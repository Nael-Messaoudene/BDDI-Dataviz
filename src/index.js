import "./style/styles.scss";
import LoadingScreen from "./scripts/loading-screen";

import conversation from './scripts/conversation'



//Component LoadingScreen
const loadingscreen = ((loadingscreen) => {
    loadingscreen.iconsMorphing();
    loadingscreen.animateScreens();
})(LoadingScreen);

const App = {

    init(){
        window.addEventListener('DOMContentLoaded', () => {
            new conversation();
        });
    }
};
App.init();

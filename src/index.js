import "./style/styles.scss";

console.log("index!");
import athlete from './scripts/athlete-number'

const App = {

    init(){
        window.addEventListener('DOMContentLoaded', () => {
            new athlete();
        });
    }
};

App.init();

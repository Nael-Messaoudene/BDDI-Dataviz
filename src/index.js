import "./style/styles.scss";

console.log("index!");
import conversation from './scripts/conversation'

const App = {

    init(){
        window.addEventListener('DOMContentLoaded', () => {
            new conversation();
        });
    }
};

App.init();

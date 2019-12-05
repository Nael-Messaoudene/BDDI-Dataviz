const HomeScreen = {

    button: document.querySelector('.homescreen-button'),

    startStory() {
        console.log(this.button)
        this.button.addEventListener("click", () => {
            document.body.classList.add('body-overflow');
        })
    }

};

export default HomeScreen;

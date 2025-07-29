





/* Sytle switcher */

const themeColor = () => {
    const hueSlider = document.querySelector(".js-hue-slider");
    const html = document.querySelector("html");

    const setHue = (value) => {
        html.style.setProperty("--hue", value);
        document.querySelector(".js-hue").innerHTML = value;
    };

    hueSlider.addEventListener("input", function () {
        setHue(this.value);
        /* set the user's preference in local storage */
        localStorage.setItem("--hue", this.value);
    });

    const slider = (value) => {
        hueSlider.value = value;
    };

    
};

themeColor();
 




/* Style Switcher */
document.addEventListener("DOMContentLoaded", () => {
    const styleSwitcher = document.querySelector(".js-style-switcher");
    const styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

    if (styleSwitcher && styleSwitcherToggler) {
        styleSwitcherToggler.addEventListener("click", function () {
            styleSwitcher.classList.toggle("open");

            const icon = this.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-cog");
                icon.classList.toggle("fa-times");
            }
        });
    } else {
        console.warn("Style switcher elements not found");
    }

    themeColor();
    themeLightDark();
});

/* Theme Color */
const themeColor = () => {
    const hueSlider = document.querySelector(".js-hue-slider");
    const html = document.documentElement;

    if (!hueSlider) return;

    const setHue = (value) => {
        html.style.setProperty("--hue", value);
        const hueDisplay = document.querySelector(".js-hue");
        if (hueDisplay) {
            hueDisplay.textContent = value;
        }
    };

    const slider = (val) => {
        hueSlider.value = val;
    };

    hueSlider.addEventListener("input", function () {
        setHue(this.value);
        localStorage.setItem("--hue", this.value);
    });

    const savedHue = localStorage.getItem("--hue");
    if (savedHue !== null) {
        setHue(savedHue);
        slider(savedHue);
    } else {
        const defaultHue = getComputedStyle(html).getPropertyValue("--hue").trim();
        setHue(defaultHue);
        slider(defaultHue);
    }
};

/* Theme Light & Dark Mode */
const themeLightDark = () => {
    const darkModeCheckbox = document.querySelector(".js-dark-mode");

    if (!darkModeCheckbox) return;

    const themeMode = () => {
        if (localStorage.getItem("theme-dark") === "false") {
            document.body.classList.remove("t-dark");
        } else {
            document.body.classList.add("t-dark");
        }
    };

    darkModeCheckbox.addEventListener("click", function () {
        localStorage.setItem("theme-dark", this.checked);
        themeMode();
    });

    if (localStorage.getItem("theme-dark") !== null) {
        themeMode();
    }

    if (document.body.classList.contains("t-dark")) {
        darkModeCheckbox.checked = true;
    }
};

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let firstNumber = null;
let isPercentageMode = false;

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id === "clear") {
            display.innerText = "";
            firstNumber = null;
            isPercentageMode = false;
        } else if (item.id === "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (item.id === "%") {
            if (display.innerText !== "") {
                firstNumber = parseFloat(display.innerText); // Guarda el primer número
                isPercentageMode = true;
                display.innerText = ""; // Borra la pantalla para el siguiente número
            }
        } else if (item.id === "equal") {
            if (isPercentageMode && firstNumber !== null && display.innerText !== "") {
                let percentage = parseFloat(display.innerText);
                display.innerText = firstNumber * (percentage / 100);
                isPercentageMode = false; // Restablece el modo porcentaje
            } else {
                display.innerText = eval(display.innerText);
            }
        } else {
            display.innerText += item.id;
        }
    };
});


const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
}
/*Ideal Gas Law Calculator */

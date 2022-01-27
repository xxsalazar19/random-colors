//global variables
let color;
let colorForCss;

//this allows me to accest the css of the site
const styles = document.documentElement.style;
let colorLine = "rgb"+"("+rgbGenerator()+")";
styles.setProperty("--randomLine", colorLine);

//create a function that return random RGB code
function rgbGenerator() {
    let rgbNumber = [];
    for (let index = 0; index <3; index++) {
        let randomnumber = Math.floor(Math.random()*(255 - 0 + 1));   
        rgbNumber.push(randomnumber);
    } 
    return (rgbNumber);
}

// i create functions that detects if my background is dark or light
function colorDetect(colorToTest) {
    const found = colorToTest.find(x => x >= 200);
    return found
}

// get the color of the text 
function colorText(number) {
    if (number >= 200) {
        return styles.setProperty("--textColor","rgb(0,0,0)");
    }else{
        return styles.setProperty("--textColor","rgb(255,255,255)");
    }
}

function BorderLine(number) {
    if (number >= 200) {
        return styles.setProperty("--randomLine","rgb(0,0,0)");
    }else{
        return styles.setProperty("--randomLine","rgb(255,255,255)");
    }
}

function changeTextColor(bc) {
    const testColor = colorDetect(bc);
    BorderLine(testColor);
    return colorText(testColor)
}



// i interact here with the html
function changeColor() {
    color = rgbGenerator();
    colorForCss = "rgb"+"("+color+")";
    styles.setProperty('--randomColor', colorForCss);
    const printRgbText = document.getElementById("rgbText");
    printRgbText.textContent = colorForCss;
    changeTextColor(color)
    return color
}



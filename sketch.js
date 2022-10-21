
const pixels = 32;

const container = document.getElementById("drawing");

var mousePressed = false;

container.addEventListener('mouseup', function () {
    console.log('Mouse unpressed')
    mousePressed = false;
})

container.addEventListener('mousedown', function () {
    console.log('Mouse pressed')
    mousePressed = true;
})

for (i = 0; i < pixels; i++) {
    const pixel = document.createElement("div")
    pixel.classList.add("defPixel")
    pixel.id = `pixel${i}`;
    pixel.draggable = false;
    container.appendChild(pixel)
    pixel.addEventListener("click", function () {
        changeColor(this.id)
    })
    pixel.addEventListener('mouseenter', function () {
        if (mousePressed == true) {
            changeColor(this.id)
        }
    })
}



function changeColor(element) {

    const pixel = document.getElementById(element);
    const style = window.getComputedStyle(pixel)
    const cssColor = style.getPropertyValue('background-color');
    const inlineColor = pixel.style.backgroundColor
    //console.log(`BG Color: ${bgColor}`)
    if (cssColor == 'rgb(255, 255, 255)' || inlineColor == 'white' || inlineColor == '') {
        console.log('BG Color white')
        document.getElementById(element).style.backgroundColor = 'black'
    }
    else if (cssColor == 'rgb(255, 255, 255)' || inlineColor == 'black') {
        console.log('BG Color Black')
        document.getElementById(element).style.backgroundColor = 'white'
    }
}
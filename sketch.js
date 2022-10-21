const pixels = 32;

const container = document.getElementById("drawing");

/* Mouse States */
var mousePressed = false;
// When mouse button is pressed
container.addEventListener('mouseup', function () {
    mousePressed = false;
})
// When mouse button is released
container.addEventListener('mousedown', function () {
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
        console.log('Mouse enter')
        pixel.classList.toggle('pixelHover');
        if (mousePressed == true) {
            changeColor(this.id);
        }
    })
    pixel.addEventListener('mouseleave', function () {
        pixel.classList.toggle('pixelHover');
    })
}

function changeColor(element) {
    // Inline CSS
    const pixel = document.getElementById(element);
    const inlineColor = pixel.style.backgroundColor
    // External CSS
    const style = window.getComputedStyle(pixel)
    const cssColor = style.getPropertyValue('background-color');

    if (cssColor == 'rgb(255, 255, 255)' || inlineColor == 'white' || inlineColor == '') {
        document.getElementById(element).style.backgroundColor = 'black'
    }
    else if (cssColor == 'rgb(255, 255, 255)' || inlineColor == 'black') {
        document.getElementById(element).style.backgroundColor = 'white'
    }
}
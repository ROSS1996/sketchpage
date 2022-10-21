const totalPixels = 32;

const container = document.getElementById("drawing");
const draw = document.getElementById("draw");
const erase = document.getElementById("erase");
const clear = document.getElementById("clear");

let control = 'draw';

draw.addEventListener("click", function () { control = 'draw';})
erase.addEventListener("click", function() { control = 'erase';})
clear.addEventListener("click", function() { clearFrame(); })


/* Mouse States */
let mousePressed = false;
// When mouse button is pressed
container.addEventListener('mouseup', function () {
    mousePressed = false;
})
// When mouse button is released
container.addEventListener('mousedown', function () {
    mousePressed = true;
})

for (i = 0; i < totalPixels; i++) {
    const pixel = document.createElement("div")
    pixel.classList.add("defPixel")
    pixel.id = `pixel${i}`;
    pixel.draggable = false;
    container.appendChild(pixel)
    pixel.addEventListener("click", function () {
        changeColor(this.id)
    })
    pixel.addEventListener('mouseenter', function () {
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
    if (control == 'draw') {
        document.getElementById(element).style.backgroundColor = 'black'
    }
    else if (control == 'erase') {
        document.getElementById(element).style.backgroundColor = 'white'
    }
}

function clearFrame() {
    let pixels = document.getElementsByClassName('defPixel');
    for (i = 0; i < totalPixels; i++) {
        pixels[i].style.backgroundColor = 'white';
    }
}

const container = document.getElementById("drawing");

const pixels = 32;

for (i = 0; i < pixels; i++) {
    const pixel = document.createElement("div")
    pixel.classList.add("defPixel")
    pixel.id = `pixel${i}`;
    container.appendChild(pixel)
    pixel.addEventListener("click", function () {
        changeColor(this.id)
    })
}

function changeColor(element) {
    const pixel = document.getElementById(element);
    const style = window.getComputedStyle(pixel)
    const bgColor = style.getPropertyValue('background-color');
    console.log(`BG Color: ${bgColor}`)
    if (bgColor == 'rgb(255, 255, 255)' || bgColor == 'rgb(128, 128, 128)') {
        console.log('BG Color white')
        document.getElementById(element).style.backgroundColor = 'black'
    } else {
        console.log('BG Color Black')
        document.getElementById(element).style.backgroundColor = 'white'
    }
}
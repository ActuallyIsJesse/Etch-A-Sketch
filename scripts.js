let selectedColor = "#404040";
const gridWrapper = document.querySelector('#grid-wrapper');
const colorPicker = document.querySelector('#color-select');
const gridPicker = document.querySelector('#grid-select');

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${blue}, ${green})`
}

function fadeRGB(rgbString) {
    let color = rgbString.slice(4, 7);
    color = parseInt(color);
    if (color - 25 > 64) {
        color -= 25;
        return `rgb(${color}, ${color}, ${color})`
    } else { 
        return '#404040';
    }
}

function drawGrid(gridSize) {
    while (gridWrapper.firstChild) {
        gridWrapper.removeChild(gridWrapper.firstChild); // Clear previous grid from screen
    }
    for (let i = 0; i < gridSize; i++) { //Draw Rows
        let gridRow = document.createElement(`div`);
        gridRow.classList.add('grid-row');
        gridWrapper.appendChild(gridRow);
        for (let j = 0; j < gridSize; j++) { // Draw Columns
            let gridCol = document.createElement(`div`);
            colorSquare(gridCol);
            gridCol.classList.add('grid-item');
            gridRow.appendChild(gridCol);
        }
    }
    const gridCells = document.querySelector('#grid')
}

function colorSquare(gridCol) {
    gridCol.addEventListener('mouseover', function (e) {
        selectedColor = colorPicker.value;
        switch (selectedColor) {
            case "Black":
                selectedColor = "#404040";
                break;
            case "Random":
                selectedColor = randomColor();
                break;
            case "Fade":
                let currentColor = window.getComputedStyle(gridCol);
                currentColor = (currentColor.getPropertyValue('background-color'));
                selectedColor = fadeRGB(currentColor);
                break;
        }
        e.target.style.backgroundColor = `${selectedColor}`;
        e.target.style.borderColor = `${selectedColor}`;
    });
}

drawGrid(gridPicker.value);
gridPicker.addEventListener('change', function (e) {
    drawGrid(gridPicker.value);
})
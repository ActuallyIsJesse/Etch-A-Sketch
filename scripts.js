let selectedColor = "Black";
const gridWrapper = document.querySelector('#grid-wrapper');

function drawGrid(gridSize) {
    while (gridWrapper.firstChild) {
     gridWrapper.removeChild(gridWrapper.firstChild); // Clear previous grid from screen
    }
    for (let i = 0; i < gridSize; i++) { //Draw Rows
        let gridRow = document.createElement(`div`);
        gridRow.classList.add('grid-row');
        gridWrapper.appendChild(gridRow);
        gridRow.style.height = `${((768 / gridSize)-2) + "px"}`; // Determine how high each row should be and subtract border height
        console.log(768 / gridSize);
        for (let j = 0; j < gridSize; j++) { // Draw Columns
            let gridCol = document.createElement(`div`);
            gridCol.setAttribute('id', `${i}, ${j}`);
            gridCol.style.width = `${(768 / gridSize) + "px"}`; // Determine how wide each box should be based on grid size
            gridCol.addEventListener('mouseover', function (e) {
                e.target.style.background = 'black';
              });
            gridCol.classList.add('grid-item');
            gridRow.appendChild(gridCol);
        }
    }
    const gridCells = document.querySelector('#grid')
}

drawGrid(16);
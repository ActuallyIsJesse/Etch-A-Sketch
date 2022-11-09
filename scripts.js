let gridSize = 16;
const gridWrapper = document.querySelector('#grid-wrapper');

function drawGrid() {
    for (let i = 0; i < gridSize; i++) { //Draw Rows
        let gridRow = document.createElement(`div`);
        gridRow.classList.add('grid-row');
        gridWrapper.appendChild(gridRow);
        for (let j = 0; j < gridSize; j++) { // Draw Columns
            let gridCol = document.createElement(`div`);
            gridCol.classList.add('grid-item');
            gridRow.appendChild(gridCol);
        }
    }
}

drawGrid();
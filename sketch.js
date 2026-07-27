const grid = document.getElementById('container');

let gridSize = 16;

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const input = parseInt(prompt('Size? : '));
    if (!input || (input > 100)) return;
    gridSize = input;
    grid.innerHTML = '';
    grid.style.height = `${gridSize * 40}px`
    grid.style.width = `${gridSize * 40}px`
    generateGrid(gridSize);
    
})

function generateGrid(gridSize) {for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)},
                                          ${Math.round(Math.random() * 255)},
                                          ${Math.round(Math.random() * 255)}`;
    });
    grid.appendChild(cell);
    }

}

generateGrid(gridSize);
const grid = document.getElementById('container');

for (let i = 0; i < 256; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)},
                                          ${Math.round(Math.random() * 255)},
                                          ${Math.round(Math.random() * 255)}`;
    });
    grid.appendChild(cell);
}


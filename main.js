//Etch-a-sketch


const input = document.querySelector('input');
const newGrid = document.querySelector('#newGrid');
const container = document.querySelector('#container');

newGrid.addEventListener('click', makeGrid);


function makeGrid() {

    clearGrid();
    
    const gridSize = input.value;
    console.log(gridSize);
    if (gridSize === '') {

    }
    else {
        container.setAttribute('style', 'grid-template-columns: repeat('+ gridSize +', 1fr)');
        for (let i = 0; i < gridSize ** 2; i++)
        {
            const div = document.createElement('div');
            div.classList.add('square');
            container.appendChild(div);
        }
        document.querySelectorAll('.square').forEach(square => square.addEventListener('mouseover', changeColor));
    }
    input.value = '';
    console.log("makeGrid was called");
}

function clearGrid() {
    container.textContent = '';
}

function changeColor() {
    
}
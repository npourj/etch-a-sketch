//Etch-a-sketch
//Nick Pourjalilvand


const input = document.querySelector('input');
const newGridbtn = document.querySelector('#newGrid');
const clearGridbtn = document.querySelector('#clearGrid');
const rainbowbtn = document.querySelector('#rainbow');
const container = document.querySelector('#container');

newGridbtn.addEventListener('click', makeGrid);
clearGridbtn.addEventListener('click', clearGrid);

function makeGrid() {

    deleteGrid();
    
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

function deleteGrid() {
    container.textContent = '';
}

function clearGrid() {
    document.querySelectorAll('.square').forEach(square => square.classList.remove('blacksquare'));
}

function changeColor() {
    this.classList.add('blacksquare');
}
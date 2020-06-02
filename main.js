//Etch-a-sketch
//Nick Pourjalilvand

const input = document.querySelector('input');
const newGridbtn = document.querySelector('#newGrid');
const clearGridbtn = document.querySelector('#clearGrid');
const blackbtn = document.querySelector('#black');
const rainbowbtn = document.querySelector('#rainbow');
const container = document.querySelector('#container');

let blackMode = true;
let rainbowMode = false;

newGridbtn.addEventListener('click', makeGrid);
clearGridbtn.addEventListener('click', clearGrid);
blackbtn.addEventListener('click', black);
rainbowbtn.addEventListener('click', rainbow);

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
    document.querySelectorAll('.square').forEach(square => square.style.backgroundColor = 'white');
}

function changeColor() {
    if (blackMode === true) {
        this.style.backgroundColor = 'black';
    }
    else if (rainbowMode === true) {
        this.style.backgroundColor = getRandomColor();
    }
}

function black() {
    blackMode = true;
    rainbowMode = false;
}

function rainbow() {
    rainbowMode = true;
    blackMode = false;
}

function randomNumber(max) {
    let random = Math.floor(Math.random() * (max + 1));
    return random;
}

function getRandomColor() {
    const R = randomNumber(255);
    const G = randomNumber(255);
    const B = randomNumber(255);
    return `rgb(${R}, ${G}, ${B})`;
}
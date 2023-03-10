const DEFAULTCOLOR = '#000000';
const DEFAULTMODE = 'Classic';
let usingColor = DEFAULTCOLOR;
let mode = DEFAULTMODE;

let gridsizevalue = document.getElementById('sizevalue');
let sizeslider = document.getElementById('sliderInput');
let gridcontainer = document.querySelector('.grid-space');
let colorPicker = document.querySelector('#colorpicker');
let classicMode = document.querySelector('#singlecolor');
let funkyMode = document.querySelector('#multicolor');
let eraseMode = document.querySelector('#eraser');
let clearbtn = document.querySelector('#clear');

colorPicker.addEventListener('input', () => {
    usingColor = colorPicker.value;
});

classicMode.addEventListener('click', () => {
    mode = 'Classic';
    classicMode.classList.add('selected');
    funkyMode.classList.remove('selected');
    eraseMode.classList.remove('selected');
})

funkyMode.addEventListener('click', () => {
    mode = 'Funky';
    classicMode.classList.remove('selected');
    funkyMode.classList.add('selected');
    eraseMode.classList.remove('selected');
});

eraseMode.addEventListener('click', () => {
    mode = 'Eraser';
    classicMode.classList.remove('selected');
    funkyMode.classList.remove('selected');
    eraseMode.classList.add('selected');
});

clearbtn.addEventListener('click', () => {
    gridcontainer.innerHTML = '';
    constructGrid(sizeslider.value);
})

sizeslider.addEventListener('click', () => {
    gridsizevalue.textContent = showGridDensity();
    if (gridcontainer.childElementCount > 0) {
        gridcontainer.innerHTML = '';
    }
    constructGrid(sizeslider.value);
});

randomnColor = function () {
    let letters = '0123456789ABCDEF';
    let color = '#'
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
};

let changeColor = function () {
    if (mode === 'Classic') {
        usingColor = colorPicker.value;
        return (usingColor)
    } else if (mode === 'Funky') {
        usingColor = randomnColor();
        return (usingColor)
    } else if (mode === 'Eraser') {
        usingColor = '#FFFFFF';
        return (usingColor)
    }
};

let showGridDensity = function () {
	return (gridsizevalue.textContent = sizeslider.value + " X " + sizeslider.value);
};

let constructGrid = function (x) {
    gridcontainer.style.display = 'grid';
    gridcontainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    gridcontainer.style.gridTemplateRows = `repeat(${x}, 1fr)`;
    for (let i = 1; i <= (x**2); i++) {
        let gridelement = document.createElement('div');
        gridcontainer.appendChild(gridelement);
        gridelement.classList.add('grid-element');
        gridelement.addEventListener('mouseover', () => {
            gridelement.style.backgroundColor = changeColor();
        });
        gridelement.addEventListener('mouseout', () => {
            gridelement.style.backgroundColor = changeColor();
        });
    };
};

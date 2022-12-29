let gridsizevalue = document.getElementById('sizevalue');

let sizeslider = document.getElementById('sliderInput');

let gridcontainer = document.querySelector('.grid-space');

let colorPicker = document.querySelector('#colorpicker');

const DEFAULTCOLOR = '#000000';
let currentColor = DEFAULTCOLOR;
let usingColor = currentColor;

colorPicker.addEventListener('input', () => {
    currentColor = colorPicker.value;
    usingColor = colorPicker.value;
    console.log(currentColor);
})

// this is for the click throuugh effect : addEventListener('click', () => {
// mouseover = true;
// mouseout = false;
// })

let classicMode = document.querySelector('#singlecolor');

classicMode.addEventListener('click', () => {
    usingColor = colorPicker.value;
})

let eraseMode = document.querySelector('#eraser');

eraseMode.addEventListener('click', () => {
    usingColor = '#ffffff';
});

let clearbtn = document.querySelector('#clear');

clearbtn.addEventListener('click', () => {
    gridcontainer.innerHTML = '';
    constructGrid(sizeslider.value);
});

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
        usingColor = currentColor
        gridelement.addEventListener('mouseover', () => {
            gridelement.style.backgroundColor = usingColor;
        });
        gridelement.addEventListener('mouseout', () => {
            gridelement.style.backgroundColor = usingColor;
        });
    };
};

sizeslider.addEventListener('click', () => {
    gridsizevalue.textContent = showGridDensity();
    if (gridcontainer.childElementCount > 0) {
        gridcontainer.innerHTML = '';
    }
    constructGrid(sizeslider.value);
})

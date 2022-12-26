let gridsizevalue = document.getElementById('sizevalue');

let sizeslider = document.getElementById('sliderInput');

let gridcontainer = document.querySelector('.grid-space');

let showGridDensity = function () {
	return (gridsizevalue.textContent = sizeslider.value + " X " + sizeslider.value);
};

let constructGrid = function (x) {
    gridcontainer.style.display = 'grid';
    gridcontainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    gridcontainer.style.gridTemplateRows = `repeat(${x}, 1fr)`;
    for (let i = 1; i <= (sizeslider.value**2); i++) {
        let gridelement = document.createElement('div');
        gridcontainer.appendChild(gridelement);
        gridelement.classList.add('grid-element');
    };
}

sizeslider.addEventListener('click', () => {
    gridsizevalue.textContent = showGridDensity();
    constructGrid(sizeslider.value);
})

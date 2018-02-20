// Select color input
// Select size input
let pickerColor;

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
    // prevent the page from reloading on submit
    event.preventDefault();
    
    const gridHeight = document.querySelector('#inputHeight');
    const gridWidth = document.querySelector('#inputWidth');

    //store the parent canvas table element in a var
    const canvas = document.querySelector('#pixelCanvas');

    //clear out the old table elements
    while (canvas.firstElementChild) {
        canvas.removeChild(canvas.firstElementChild);
    }
    
    //create table rows and cells and append to canvas
    for (let i = 0; i < gridHeight.value; i++) {
        let row = document.createElement('tr');

        for(let x = 0; x < gridWidth.value; x++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }
  }

//gets the new color and stores in a global variable  
function changeColor(event) {
    pickerColor = event.value;
}  

function pickCell(event) {

}

const sizeForm = document.querySelector('#sizePicker');
sizeForm.addEventListener('submit',makeGrid);

const picker = document.querySelector('#colorPicker');
picker.addEventListener('change',changeColor);



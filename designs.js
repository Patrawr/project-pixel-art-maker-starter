// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const sizeForm = document.querySelector('#sizePicker');

sizeForm.addEventListener('submit',makeGrid);


function makeGrid(event) {
  event.preventDefault();
  console.log('The form has been submitted');
  
}

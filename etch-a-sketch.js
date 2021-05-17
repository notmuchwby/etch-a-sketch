const container = document.getElementById("container");

// Here we make the grid
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

// And here we paint it up 
function leaveTrait() {
    const divs = document.querySelectorAll('.grid-item');

    divs.forEach((div)  => {
      div.addEventListener('mouseover', () => {
        div.style.background = 'black';
      });
    });
    
}

leaveTrait();

function clearGrid() {
  const divs = document.querySelectorAll('.grid-item');
  const btn = document.querySelector('button');

  divs.forEach((div) => {
    btn.addEventListener('click', () => {
      div.style.background = 'white';
    });
  });

}

function newSize() {
  clearGrid();

  document.querySelector('button').onclick = function Click() {
    const size = prompt("Enter the new size");

    if(size <= 0 || size > 64) {
      alert("Enter the number between 1-64");
      Click();
    } else {
      makeRows(size, size);
    }
  }
 }

 newSize();
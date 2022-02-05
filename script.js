let main = document.getElementById("main");
let button = document.getElementById("button");
let children = document.querySelector("div").children;

let buttonClick = () => {
  let gridSize = prompt("how large of grid?", 64);
  deleteChild();
  let gridUnit = "1fr ";
  let gridString = gridUnit.repeat(gridSize);
  main.style.gridTemplateColumns = `${gridString}`;

  createGrid(gridSize);
};

button.addEventListener("click", buttonClick);

let changeClass = () => {
  let test = event.target;
  test.className = "hoverOn";
  test.style.backgroundColor = "green";
};

function deleteChild() {
  let child = main.lastElementChild;
  while (child) {
    main.removeChild(child);
    child = main.lastElementChild;
  }
}

let createGrid = (num) => {
  for (let i = 0; i < num * num; i++) {
    let row = main.appendChild(document.createElement("div"));
    row.className = "box";
    row.addEventListener("mouseover", changeClass);
  }
};

// createGrid(64);

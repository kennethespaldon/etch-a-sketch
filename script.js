"use strict";

const colorPicker = document.querySelector("#color-picker");
const dimensionSize = document.querySelector("#dimension-size");
const clearBtn = document.querySelector(".clear-btn");
const grid = document.querySelector(".grid");

const colorBlack = "#000000";

function generateGrid(event)
{  
  let size = 16;
  let newSize = dimensionSize.value;
  let oldSize = null;

  if (newSize <= 0 || newSize >= 100) 
  {
    newSize = size;
    oldSize = size;
  }

  if (size !== newSize && newSize !== "")
  {
    removeCurrentGrid();
    oldSize = size;
    size = newSize;
  }

  if (size !== oldSize)
  {
    for (let i = 0; i < size; i++)
    {
      const row = document.createElement("div");
      row.classList.add("row");

      for (let j = 0; j < size; j++)
      {
        const square = document.createElement("span");
        square.classList.add("square");

        row.appendChild(square);
      }

      grid.appendChild(row);
    }
  }
}

function setColorToSquare(event)
{
  const currentColor = colorPicker.value;
  const square = event.target.classList.contains("square");

  if(square)
  {
    event.target.style.backgroundColor = currentColor;
  }
}

function clearGrid()
{
  const squares = document.querySelectorAll(".square");

  for (let square of squares)
  {
    square.style.backgroundColor = colorBlack;
  }
}

function removeCurrentGrid()
{
  while (grid.firstChild)
  {
    grid.removeChild(grid.lastChild);
  }
}

function runGame()
{
  generateGrid();
}

grid.addEventListener("mouseover", setColorToSquare);
clearBtn.addEventListener("click", clearGrid);
dimensionSize.addEventListener("change", generateGrid);

runGame();
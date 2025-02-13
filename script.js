"use strict";

const colorPicker = document.querySelector("#color-picker");
const dimensionSize = document.querySelector("#dimension-size");
const clearBtn = document.querySelector(".clear-btn");
const grid = document.querySelector(".grid");

const colorBlack = "#000000";

function isSizeWithinRange(newSize)
{
  if (newSize < 1 || newSize > 100)
  {
    return false;
  }

  return true;
}

function isNewSizeValid(currentSize, newSize)
{
  if (currentSize !== newSize && newSize !== "")
  {
    return true;
  }

  return false;
}

function generateGrid(size)
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

function generateNewGrid(currentSize)
{
  let newSize = Number(dimensionSize.value);

  if (!isSizeWithinRange(newSize)) 
  {
    newSize = currentSize;
  }
  
  if (isNewSizeValid(currentSize, newSize))
  {
    removeCurrentGrid();
    generateGrid(newSize);
  }
}

function generateInitialGrid()
{
  generateGrid(16);
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
  let size = 16;
  generateGrid(size);

  dimensionSize.addEventListener("change", () => generateNewGrid(size));
}

grid.addEventListener("mouseover", setColorToSquare);
clearBtn.addEventListener("click", clearGrid);

runGame();
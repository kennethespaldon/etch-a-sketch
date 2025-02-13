"use strict";

const colorPicker = document.querySelector("#color-picker");
const dimensionSize = document.querySelector("#dimension-size");
const clearBtn = document.querySelector(".clear-btn");
const grid = document.querySelector(".grid");

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

function runGame()
{
  generateGrid(16);
}

runGame();
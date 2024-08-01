function createGrid(gridSize, width) {
    for (let numColumns = 0; numColumns < gridSize; numColumns++) {
        const columns = document.createElement("div");
        columns.setAttribute("class", "invisible-grid");
        for (let numRows = 0; numRows < gridSize; numRows++) {
            let gridColor = "rgb(255,192,203,1)";
            let newGridColor = "";
            const rows = document.createElement("div");
            rows.setAttribute("class", "original-grid");
            rows.style["background-color"] = gridColor;
            rows.style.width = width + "vw";
            rows.style.height = width * 2 + "vh";
            defaultMode.addEventListener("click", () => {
                newGridColor = "rgb(255,0,0,1)";
                rows.onmouseenter = () => {
                    rows.style["background-color"] = newGridColor;
                };
            });
            randomMode.addEventListener("click", () => {
                newGridColor =
                    "rgb(" +
                    randomRGBValue() +
                    "," +
                    randomRGBValue() +
                    "," +
                    randomRGBValue() +
                    ", 1)";
                rows.onmouseenter = () => {
                    rows.style["background-color"] = newGridColor;
                };
            });
            darkenMode.addEventListener("click", () => {
                let numOfHovers = 0;
                rows.onmouseenter = () => {
                    numOfHovers++;
                    rows.style.opacity = 1 - numOfHovers / 5;
                };
            });
            columns.appendChild(rows);
        }
        container.appendChild(columns);
        if (currentMode === 3) {
            darkenMode.click();
        } else if (currentMode === 2) {
            randomMode.click();
        } else {
            defaultMode.click();
        }
    }
}

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function determineGridWidth(gridSize) {
    return 32 / gridSize;
}

function randomRGBValue() {
    return Math.floor(Math.random() * 256);
}

const container = document.querySelector(".container");
const input = document.querySelector("#input");
const defaultContainer = document.querySelector(".default-container");
const defaultMode = document.querySelector(".default");
const randomMode = document.querySelector(".random");
const darkenMode = document.querySelector(".darken");
const reset = document.querySelector(".reset");
let gridSize = 16;
let currentMode = null;

createGrid(gridSize, determineGridWidth(gridSize));

input.addEventListener("input", () => {
    gridSize = input.value;
    resetGrid();
    createGrid(gridSize, determineGridWidth(gridSize));
});

reset.addEventListener("click", () => {
    resetGrid();
    createGrid(gridSize, determineGridWidth(gridSize));
});

defaultMode.addEventListener("click", () => {
    currentMode = 1;
});

randomMode.addEventListener("click", () => {
    currentMode = 2;
});

darkenMode.addEventListener("click", () => {
    currentMode = 3;
});

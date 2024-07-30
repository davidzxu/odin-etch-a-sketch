function createGrid(gridSize, width) {
    for (let numColumns = 0; numColumns < gridSize; numColumns++) {
        const columns = document.createElement("div");
        columns.setAttribute("class", "invisible-grid");
        for (let numRows = 0; numRows < gridSize; numRows++) {
            const rows = document.createElement("div");
            rows.setAttribute("class", "default-grid");
            rows.style["background-color"] = "rgb(255,192,203,1)";
            rows.style.width = width + "vw";
            rows.style.height = width * 2 + "vh";
            if (modeNum === 1) {
                rows.addEventListener("mouseenter", () => {
                    rows.style["background-color"] = "rgb(255,0,0,1)";
                });
            } else if (modeNum === 2) {
                rows.addEventListener("mouseenter", () => {
                    rows.style["background-color"] =
                        "rgb(" +
                        randomRGBValue() +
                        "," +
                        randomRGBValue() +
                        "," +
                        randomRGBValue() +
                        ", 1)";
                });
            }
            columns.appendChild(rows);
        }
        container.appendChild(columns);
    }
}

function createDarkenGrid(gridSize, width) {
    for (let numColumns = 0; numColumns < gridSize; numColumns++) {
        const columns = document.createElement("div");
        columns.setAttribute("class", "invisible-grid");
        for (let numRows = 0; numRows < gridSize; numRows++) {
            const rows = document.createElement("div");
            rows.setAttribute("class", "default-grid");
            rows.style["background-color"] = "rgb(255,192,203,1)";
            rows.style.width = width + "vw";
            rows.style.height = width * 2 + "vh";
            rows.addEventListener("mouseenter", () => {
                // Separate RGBA value by commas
                let opacitySubString =
                    rows.style["background-color"].split(",");
                // In cases where opacity is 100%
                if (opacitySubString.length !== 4) {
                    opacityValue = 1;
                } else {
                    opacityValue = opacitySubString[3].substring(
                        0,
                        opacitySubString[3].length - 1
                    );
                }
                rows.style["background-color"] =
                    "rgb(255,192,203," + (opacityValue - 0.1) + ")";
            });
            columns.appendChild(rows);
        }
        container.appendChild(columns);
    }
}

function resetGrid() {
    while (container.firstChild) {
        // alert(container.children[0].style.color);
        container.removeChild(container.firstChild);
    }
}

// Figure out a way to copy the grid
function copyGrid() {
    while (container.firstChild) {
        alert(container.firstChild.style);
        container.removeChild(container.firstChild);
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
const defaultMode = document.querySelector(".default");
const randomMode = document.querySelector(".random");
const darkenMode = document.querySelector(".darken");
let gridSize = 16;
let modeNum = 1;

randomRGBValue();

createGrid(gridSize, determineGridWidth(gridSize));

// Add code to allow grid size to not default to default mode
input.addEventListener("input", () => {
    gridSize = input.value;
    resetGrid();
    createGrid(gridSize, determineGridWidth(gridSize));
});

defaultMode.addEventListener("click", () => {
    resetGrid();
    modeNum = 1;
    createGrid(gridSize, determineGridWidth(gridSize));
});
randomMode.addEventListener("click", () => {
    resetGrid();
    modeNum = 2;
    createGrid(gridSize, determineGridWidth(gridSize));
});
darkenMode.addEventListener("click", () => {
    resetGrid();
    modeNum = 3;
    createDarkenGrid(gridSize, determineGridWidth(gridSize));
});

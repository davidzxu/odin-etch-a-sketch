function createDefaultGrid(gridSize, width) {
    for (let numColumns = 0; numColumns < gridSize; numColumns++) {
        const columns = document.createElement("div");
        columns.setAttribute("class", "invisible-grid");
        for (let numRows = 0; numRows < gridSize; numRows++) {
            const rows = document.createElement("div");
            rows.setAttribute("class", "default-grid");
            rows.style["background-color"] = "aqua";
            rows.style.width = width + "vw";
            rows.style.height = width * 2 + "vh";
            rows.addEventListener("mouseenter", () => {
                rows.style["background-color"] = "red";
            });
            columns.appendChild(rows);
        }
        container.appendChild(columns);
    }
}

function createRandomGrid(gridSize, width) {
    for (let numColumns = 0; numColumns < gridSize; numColumns++) {
        const columns = document.createElement("div");
        columns.setAttribute("class", "invisible-grid");
        for (let numRows = 0; numRows < gridSize; numRows++) {
            const rows = document.createElement("div");
            rows.setAttribute("class", "default-grid");
            rows.style["background-color"] =
                "rgb(" +
                randomRGBValue() +
                "," +
                randomRGBValue() +
                "," +
                randomRGBValue() +
                ")";
            rows.style.width = width + "vw";
            rows.style.height = width * 2 + "vh";
            rows.addEventListener("mouseenter", () => {
                rows.style["background-color"] =
                    "rgb(" +
                    randomRGBValue() +
                    "," +
                    randomRGBValue() +
                    "," +
                    randomRGBValue() +
                    ")";
            });
            columns.appendChild(rows);
        }
        container.appendChild(columns);
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
const defaultMode = document.querySelector(".default");
const randomMode = document.querySelector(".random");
const darkenMode = document.querySelector(".darken");
let gridSize = 16;
let modeNum = 1;

randomRGBValue();

createDefaultGrid(gridSize, determineGridWidth(gridSize));

// Add code to allow gridsize to not default to default mode
input.addEventListener("input", () => {
    gridSize = input.value;
    resetGrid();
    createDefaultGrid(gridSize, determineGridWidth(gridSize));
});

defaultMode.addEventListener("click", () => {
    resetGrid();
    createDefaultGrid(16, determineGridWidth(16));
});
randomMode.addEventListener("click", () => {
    resetGrid();
    createRandomGrid(16, determineGridWidth(16));
});
darkenMode.addEventListener("click", () => {
    resetGrid();
});

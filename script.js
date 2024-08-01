function createGrid(gridSize, width) {
    let gridColor = "rgb(255,192,203,1)";
    let newGridColor = "rgb(255,0,0,1)";
    let rgbaArray = newGridColor.split(",");
    rInput.setAttribute("value", rgbaArray[0].replace(/\D/g, ""));
    gInput.setAttribute("value", rgbaArray[1]);
    bInput.setAttribute("value", rgbaArray[2]);
    oInput.setAttribute("value", 100 * rgbaArray[3].replace(/\D/g, ""));
    for (let numColumns = 0; numColumns < gridSize; numColumns++) {
        const columns = document.createElement("div");
        columns.setAttribute("class", "invisible-grid");
        for (let numRows = 0; numRows < gridSize; numRows++) {
            const rows = document.createElement("div");
            rows.setAttribute("class", "original-grid");
            rows.style["background-color"] = gridColor;
            rows.style.width = width + "vw";
            rows.style.height = width * 2 + "vh";
            defaultMode.addEventListener("click", () => {
                newGridColor =
                    "rgb(" +
                    rInput.value +
                    "," +
                    gInput.value +
                    "," +
                    bInput.value +
                    "," +
                    oInput.value / 100 +
                    ")";
                enableButtons();
                defaultMode.disabled = true;
                rInput.disabled = false;
                gInput.disabled = false;
                bInput.disabled = false;
                oInput.disabled = false;
                recolor.disabled = false;
                recolor.addEventListener("click", () => {
                    newGridColor =
                        "rgb(" +
                        rInput.value +
                        "," +
                        gInput.value +
                        "," +
                        bInput.value +
                        "," +
                        oInput.value / 100 +
                        ")";
                });
                rows.onmouseenter = () => {
                    rows.style["background-color"] = newGridColor;
                };
            });
            randomMode.addEventListener("click", () => {
                enableButtons();
                randomMode.disabled = true;
                rows.onmouseenter = () => {
                    newGridColor =
                        "rgb(" +
                        randomRGBValue() +
                        "," +
                        randomRGBValue() +
                        "," +
                        randomRGBValue() +
                        ", 1)";
                    rows.style["background-color"] = newGridColor;
                };
            });
            darkenMode.addEventListener("click", () => {
                let numOfHovers = 0;
                enableButtons();
                darkenMode.disabled = true;
                rows.onmouseenter = () => {
                    numOfHovers++;
                    rows.style.opacity = 1 - numOfHovers / 5;
                };
            });
            columns.appendChild(rows);
        }
        container.appendChild(columns);
        enableButtons();
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

function enableButtons() {
    defaultMode.disabled = false;
    randomMode.disabled = false;
    darkenMode.disabled = false;
    rInput.disabled = true;
    gInput.disabled = true;
    bInput.disabled = true;
    oInput.disabled = true;
    recolor.disabled = true;
}

const container = document.querySelector(".container");
const cellInput = document.querySelector(".cell-input");
const resize = document.querySelector(".resize");
const defaultContainer = document.querySelector(".default-container");
const defaultMode = document.querySelector(".default");
const rInput = document.querySelector(".r-input");
const gInput = document.querySelector(".g-input");
const bInput = document.querySelector(".b-input");
const oInput = document.querySelector(".o-input");
const recolor = document.querySelector(".recolor");
const randomMode = document.querySelector(".random");
const darkenMode = document.querySelector(".darken");
const reset = document.querySelector(".reset");
let gridSize = 16;
let currentMode = null;

createGrid(gridSize, determineGridWidth(gridSize));

resize.addEventListener("click", () => {
    gridSize = cellInput.value;
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

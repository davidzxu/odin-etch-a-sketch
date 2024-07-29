function createGrid(gridSize) {
    for (let numColumns = 0; numColumns < gridSize; numColumns++) {
        const columns = document.createElement("div");
        columns.setAttribute("class", "invisible-grid");
        for (let numRows = 0; numRows < gridSize; numRows++) {
            const rows = document.createElement("div");
            rows.setAttribute("class", "default-grid");
            rows.addEventListener("mousemove", () => {
                rows.removeAttribute("class");
                rows.setAttribute("class", "new-grid");
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

const container = document.querySelector(".container");
const input = document.querySelector("#input");
let gridSize = 16;

createGrid(gridSize);

input.addEventListener("input", () => {
    gridSize = input.value;
    resetGrid();
    createGrid(gridSize);
});

function createGrid() {
    for (let numColumns = 0; numColumns < 16; numColumns++) {
        const columns = document.createElement("div");
        columns.setAttribute("class", "grid");
        columns.textContent = "0";
        for (let numRows = 0; numRows < 15; numRows++) {
            const rows = document.createElement("div");
            rows.setAttribute("class", "grid");
            rows.textContent = "0";
            columns.appendChild(rows);
        }
        container.appendChild(columns);
    }
}

const container = document.querySelector(".container");

createGrid();

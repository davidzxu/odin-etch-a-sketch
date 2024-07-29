function createGrid() {
    for (let numColumns = 0; numColumns < 16; numColumns++) {
        const columns = document.createElement("div");
        columns.setAttribute("class", "invisible-grid");
        for (let numRows = 0; numRows < 16; numRows++) {
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

const container = document.querySelector(".container");

createGrid();

const container = document.getElementById("container");

function createGrid(size) {
    container.innerHTML = "";
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Basic hover effect
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "white";
        });

        container.appendChild(square);
    }
}

// Default grid
createGrid(16);

// Reset button
document.getElementById("reset-btn").addEventListener("click", () => {
    let newSize = prompt("Enter new grid size (1-100):");
    newSize = parseInt(newSize);

    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

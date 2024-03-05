document.addEventListener("DOMContentLoaded", function() {   
    const container = document.getElementById("container");
    let gridSize =75;
    const flexBasis = 100 / gridSize;

    // Function to generate grid
    function generateGrid(gridSize) {
        const flexBasis = 100 / gridSize;
        container.innerHTML = ""; // Clear previous grid

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.style.flex = `1 0 ${flexBasis}%`; // Corrected backticks here
        container.appendChild(gridItem);

        gridItem.addEventListener("mouseenter", function() {
            gridItem.style.backgroundColor = "black"; 
        });

        gridItem.addEventListener("mouseleave", function() {
            gridItem.style.backgroundColor = "";
        });
    }
}
// Function to handle resetting the grid
function resetGrid() {
    let newSize = prompt("Enter the number of squares per side for the new grid (maximum 100):");
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    gridSize = newSize;
    generateGrid(gridSize);
}
// Generate default grid
generateGrid(gridSize);

// Add event listener to reset button
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetGrid);
});



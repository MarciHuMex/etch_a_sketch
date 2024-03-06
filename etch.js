document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    let gridSize = 16; // Default grid size

    // Function to generate grid
    function generateGrid(gridSize) {
        const flexBasis = 100 / gridSize;
        container.innerHTML = ""; // Clear previous grid

        for (let i = 0; i < gridSize * gridSize; i++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.style.flex = `1 0 ${flexBasis}%`;
            gridItem.dataset.darkness = 0; // Initialize darkness level
            container.appendChild(gridItem);

            // Add event listener for hover effect
            gridItem.addEventListener("mouseenter", function() {
                darkenGridItem(gridItem);
            });
        }
    }

    // Function to darken the grid item
    function darkenGridItem(gridItem) {
        let darkness = parseFloat(gridItem.dataset.darkness);
        if (darkness < 1) {
            darkness += 0.25; // Increase darkness by 25%
            gridItem.dataset.darkness = darkness;
            const colorValue = Math.round((1 - darkness) * 255); // Reverse the darkness to get lighter color
            gridItem.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
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

document.addEventListener("DOMContentLoaded", function() {   
    const container = document.getElementById("container");
    let gridSize =75;
    const flexBasis = 100 / gridSize;

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
});



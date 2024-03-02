document.addEventListener("DOMContentLoaded", function() {   
    const container = document.getElementById("container");

    for (let i = 0; i < 16 * 16 ; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);
    }
});
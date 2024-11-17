// - 11.1
function createPifagorTable() {
    let table = document.createElement("table");

    for (let i = 1; i <= 10; i++) {
        let row = document.createElement("tr");

        for (let j = 1; j <= 10; j++) {
            let cell = document.createElement("td");
            cell.textContent = i * j;
            cell.style.border = "1px solid black";
            cell.style.padding = "2px";

            row.appendChild(cell);
        }

        table.appendChild(row);
    }
    document.body.appendChild(table);
}
createPifagorTable();

// - 11.2

const textElement = document.getElementById("text");
const button = document.getElementById("toggleColorButton");
let isColorChanged = false;
button.addEventListener("click", function () {
    if (isColorChanged) {
        textElement.style.color = "black";
    } else {

        textElement.style.color = "blue";
    }
    isColorChanged = !isColorChanged;
});


// - 11.3
document.addEventListener("DOMContentLoaded", function () {

    const images = [
        "1.jpeg",
        "2.jpeg",
        "3.jpeg",
        "4.jpeg",
        "5.jpeg",
        "6.jpeg",
        "7.jpeg",
        "8.jpeg",
        "9.jpeg"
    ];

    const randomImage = document.getElementById("randomKit");
    const kitbutton = document.getElementById("randomImageButton");
    function getRandomKit() {
        const randomIndex = Math.floor(Math.random() * images.length);
        const imagePath = `kit/${images[randomIndex]}`;
        console.log("Шлях до зображення:", imagePath);
        randomImage.src = imagePath;
    }
    getRandomKit();

    kitbutton.addEventListener("click", getRandomKit);
});


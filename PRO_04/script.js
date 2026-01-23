const btn = document.getElementById("btn");
const colorText = document.getElementById("colorName");

btn.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    colorText.textContent = "Color: " + randomColor;
});

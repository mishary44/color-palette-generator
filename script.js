const generatebtn = document.getElementById("generator-btn");
const palatteContainer = document.querySelector(".palette-container");

generatebtn.addEventListener("click", generatePalette);

function generatePalette() {
  const colors = [];
  for (let i = 0; i < 5; i++) {
    colors.push(generateRandomColor());
  }
  updatePalatteDisplay(colors);
}
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function updatePalatteDisplay(colors) {
  const colorBoxes = document.querySelectorAll(".color-box");
  colorBoxes.forEach((box, index) => {
    const color = colors[index];
    const colorDiv = box.querySelector(".color");
    const hexValue = box.querySelector(".hex");
    colorDiv.style.backgroundColor = color;
    hexValue.textContent = color;
  });
}
generatePalette();

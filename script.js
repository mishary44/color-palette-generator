const generatebtn = document.getElementById("generator-btn");
const palatteContainer = document.querySelector(".palette-container");

generatebtn.addEventListener("click", generatePalette);
palatteContainer.addEventListener("click", function (e) {
  console.log();
  if (e.target.classList.contains("copy-btn")) {
    const hexValue = e.target.previousElementSibling.textContent;
    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess())
      .catch((err) => console.log(err));
  } else if (e.target.classList.contains("color")) {
    const hexValue =
      e.target.nextElementSibling.querySelector(".hex").textContent;

    navigator.clipboard
      .writeText(hexValue)
      .then(() => showCopySuccess())
      .catch((err) => console.log(err));
  }
});

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
function showCopySuccess() {
  CopyBtn.classList.remove("far", "fa-copy");
  CopyBtn.classList.add("fas", "fa-check");
  CopyBtn.style.color = "#48bb78";
  setTimeout(() => {
    CopyBtn.classList.remove("fas", "fa-check");
    CopyBtn.classList.add("far", "fa-copy");
    CopyBtn.style.color = "";
  }, 1500);
}
generatePalette();

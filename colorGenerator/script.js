let colorBox = document.querySelector(".colorBox");
let colorValue = document.getElementById("colorValue");
let copyBtn = document.getElementById("copy");
let generateBtn = document.getElementById("generate");
let rgbMode = document.getElementById("rgbMode");
let hexMode = document.getElementById("hexMode");










let mode = "rgb"; // default mode

function randomRgb() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function randomHex() {
  const hexDigits = "0123456789ABCDEF";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += hexDigits[Math.floor(Math.random() * 16)];
  }
  return hex;
}

generateBtn.addEventListener("click", () => {
  let color = mode === "rgb" ? randomRgb() : randomHex();
  colorValue.textContent = color;
  colorBox.style.backgroundColor = color;
  document.body.style.backgroundColor = color;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(colorValue.textContent);
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
});

rgbMode.addEventListener("click", () => {
  mode = "rgb";
  rgbMode.classList.add("active");
  hexMode.classList.remove("active");
});

hexMode.addEventListener("click", () => {
  mode = "hex";
  hexMode.classList.add("active");
  rgbMode.classList.remove("active");
});




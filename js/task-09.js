const refs = {
  color: document.querySelector(".color"),
  changeColor: document.querySelector(".change-color"),
};
refs.changeColor.addEventListener("click", getColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = document.body.style.backgroundColor;
}

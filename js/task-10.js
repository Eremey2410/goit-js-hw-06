const refs = {
  amount: document.querySelector("#controls input"),
  createBtn: document.querySelector("button[ data-create]"),
  destroyBtn: document.querySelector("button[ data-destroy]"),
  boxes: document.querySelector("#boxes"),
};
refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);
refs.amount.addEventListener("input", getAmount);

function getAmount() {}

function createBoxes(amount) {}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

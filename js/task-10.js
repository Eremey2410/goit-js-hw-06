const refs = {
  amount: document.querySelector("#controls input"),
  createBtn: document.querySelector("button[ data-create]"),
  destroyBtn: document.querySelector("button[ data-destroy]"),
  boxes: document.querySelector("#boxes"),
};
refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);
refs.amount.addEventListener("input", getAmount);

function getAmount() {
  console.log(refs.amount.value);
}

function createBoxes(amount) {
  refs.amount.value = document.createElement("div");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

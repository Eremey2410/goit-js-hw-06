const refs = {
  color: document.querySelector(".color"),
  changeColor: document.querySelector(".change-color"),
};
refs.changeColor.addEventListener("click", () => {
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
  refs.color.textContent = document.body.style.backgroundColor;
});

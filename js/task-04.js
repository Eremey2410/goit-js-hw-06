let counterValue = 0;
const counter = document.querySelectorAll("#counter button");
const value = document.querySelector("#value");
counter[1].addEventListener("click", () => {
  value.textContent = counterValue += 1;
});
counter[0].addEventListener("click", () => {
  value.textContent = counterValue -= 1;
});

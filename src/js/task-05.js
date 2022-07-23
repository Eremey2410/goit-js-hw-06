const refs = {
  input: document.querySelector("#name-input"),
  nameLable: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", onInputChange);
function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.nameLable.textContent = event.currentTarget.value;
}

const listsEl = document.querySelectorAll(".item");
console.log(`Number of categories:`, listsEl.length);
for (const list of listsEl) {
  console.log(`Category:`, list.firstElementChild.textContent);
  console.log(`Elements:`, list.lastElementChild.children.length);
}

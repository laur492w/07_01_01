fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(categories) {
  //looper og kaldershowProduct
  categories.forEach(showCategory);
}

function showCategory(product) {
  //fang template
  const template = document.querySelector(".categories").content;
  //lav kopi
  const copy = template.cloneNode(true);
  copy.querySelector("a").textContent = product.category;
  copy.querySelector("a").href = `list.html?category=${product.category}`;
  document.querySelector(".grid_1-1-1 ol").appendChild(copy);
}

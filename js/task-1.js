const categories = document.querySelector("#categories");

console.log(`Number of categories: ${categories.children.length}`);

[...categories.children].forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  //console.log(item.lastElementChild);
  let innerList = item.querySelector("ul");
  let elementsCount = innerList.children.length;
  console.log(`Elements: ${elementsCount}`);
});

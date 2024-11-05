function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNum = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createMarkup);

function createMarkup(event) {
  if (Number(inputNum.value) <= 0 || Number(inputNum.value) > 100) {
    console.log("the number is not within the range 1-100");
    return;
  }

  createBoxes(+inputNum.value);
}

function createBoxes(amount) {
  const arr = [];

  let sizes = 30;

  for (let i = 0; i < amount; i++) {
    const myBox = document.createElement("div");
    myBox.style.width = `${sizes}px`;
    myBox.style.height = `${sizes}px`;
    myBox.style.backgroundColor = getRandomHexColor();
    arr.push(myBox);

    sizes += 10;
  }
  boxes.append(...arr);
  inputNum.value = "";
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  boxes.innerHTML = "";
  inputNum.value = "";
}

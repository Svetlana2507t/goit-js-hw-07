function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");

btn.addEventListener("click", eventHandler);

const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");

function eventHandler(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();

  //console.log(bodyEl.style.backgroundColor);

  spanEl.textContent = String(bodyEl.style.backgroundColor);
}

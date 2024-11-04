const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

input.addEventListener("input", inputHandler);

function inputHandler(event) {
  if (event.target.value.trim() !== "") {
    output.textContent = event.target.value.trim();
  } else {
    output.textContent = "Anonimous";
  }
}

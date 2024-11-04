const form = document.querySelector(".login-form");

form.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const elements = Array.from(event.target.elements);

  for (let element of elements) {
    if (element.type !== "submit" && element.value.trim() === "") {
      alert("All form fields must be filled in");
      return;
    }
  }

  const obj = {};
  elements.forEach((element) => {
    if (element.name && element.type !== "submit") {
      obj[element.name] = element.value.trim();
    }
  });

  console.log(obj);
  return obj;
}

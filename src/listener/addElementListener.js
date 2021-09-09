import { newElement } from "../handler/addElementHandler.js";

const inputField = document.getElementById("inputText");
const addButton = document.getElementById("addButton");

inputField.addEventListener("keydown", (event) => {
  if (event.which === 13) {
    newElement();
  }
});

addButton.addEventListener("click", newElement);

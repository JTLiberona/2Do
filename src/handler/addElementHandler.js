export const newElement = () => {
  //read and process the user input.
  const inputField = document.getElementById("inputText");
  const userInput = inputField.value; // read the value that the user has input.

  const olEl = document.getElementById("ordered-list"); // targeting the OL where the LI must be pushed.
  const liEl = document.createElement("li"); // create an empty LI element in the DOM.

  liEl.innerHTML = `${userInput}
    <div class="cssBtn">
    <input type="image" id="edit" src="public/img/edit.png" class="editBtn" />
    <input type="image" id="delete" src="public/img/delete.png" class="deleteBtn" />
    </div>`;

  olEl.appendChild(liEl);

  // log action for developers
  console.log(userInput.value);
  console.log(olEl);
};

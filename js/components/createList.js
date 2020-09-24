import { saveToStorage } from "./storage.js";
import { listKey } from "../settings/settings.js";

export function createList(array) {
  const resultList = document.querySelector("ul");

  resultList.innerHTML = "";

  array.forEach((array) => {
    let opacity = "";
    let checked = "";
    if (array.completed === true) {
      opacity = "opacity";
      checked = "checked";
    }
    resultList.innerHTML += `
    <li class="${opacity}"> <input type="text" data-id="${array.id}" value="${array.name}">  <input ${checked} type="checkbox" data-id="${array.id}"></li>
    `;
  });

  const textBoxes = document.querySelectorAll("li input[type=text]");
  console.log(textBoxes);
  textBoxes.forEach(function (textBox) {
    console.log(textBox);
    textBox.addEventListener("keyup", updateValue);
  });

  function updateValue() {
    const id = event.target.dataset.id;
    const value = event.target.value.trim();
    const newArray = updateValueInList(array, id, value);
    saveToStorage(listKey, newArray);
  }

  //

  const checkboxes = document.querySelectorAll("input[type=checkbox]");

  checkboxes.forEach((box) => {
    box.addEventListener("click", toggleCheckbox);
  });

  function toggleCheckbox() {
    const id = event.target.dataset.id;
    const checked = event.target.checked;
    const updatedArray = updateList(array, id, checked);
    saveToStorage(listKey, updatedArray);
    location.reload();
  }
}

//
//
function updateList(array, id, checked) {
  const findIndex = array.findIndex(function (item) {
    if (item.id === parseInt(id)) {
      return true;
    }
  });
  console.log(array);
  array[findIndex].completed = checked;
  return array;
}

function updateValueInList(array, id, value) {
  const findIndex = array.findIndex(function (item) {
    if (item.id === parseInt(id)) {
      return true;
    }
  });
  array[findIndex].name = value;
  return array;
}

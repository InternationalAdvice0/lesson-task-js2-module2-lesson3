import { saveToStorage } from "./components/storage.js";
import { getItem } from "./components/storage.js";
import { clearButton } from "./components/clearButton.js";
import { createList } from "./components/createList.js";
import { listKey } from "./settings/settings.js";

const input = document.querySelector("#textField");
const btn = document.querySelector("button");

const toDos = getItem(listKey);
createList(toDos);

clearButton();

btn.addEventListener("click", handleAdd);

function handleAdd() {
  const value = input.value.trim();

  if (value.length >= 1) {
    const object = { id: Date.now(), name: value };
    toDos.push(object);
    input.value = "";
    input.focus();
  } else {
    console.log("error");
  }

  createList(toDos);
  saveToStorage(listKey, toDos);
}

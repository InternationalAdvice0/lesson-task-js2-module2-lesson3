import { createList } from "./createList.js";

export function clearButton() {
  const clearBtn = document.querySelector("#clear");

  clearBtn.addEventListener("click", function () {
    if (confirm("Are you sure?")) {
      localStorage.clear();
      createList([]);
      location.reload();
    }
  });
}

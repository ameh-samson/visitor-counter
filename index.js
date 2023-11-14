let increaseBtn = document.querySelector("#increase-btn");
let saveBtn = document.querySelector("#save-btn");
let countEl = document.querySelector("#count-el");
let saveEl = document.querySelector("#save-el");

increaseBtn.addEventListener("click", increment);
saveBtn.addEventListener("click", save);

let count = 0;

// handles the increment
function increment() {
  count += 1;
  countEl.textContent = count;
}

// handle the save
function save() {
  let saveCount = " " + count + " - ";
  saveEl.textContent += saveCount;

  //   it reset the counter back to zero
  countEl.textContent = 0;
  count = 0;
}

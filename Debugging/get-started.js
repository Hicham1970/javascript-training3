// selection des elements:
let inputs = document.querySelectorAll("input");
let label = document.querySelector("p");
let button = document.querySelector("button");

//Creation d'évènement:
button.addEventListener("click", onClick);


/**
 * Validates if inputs are empty, updates label with calculation if not empty,
 * otherwise updates label with error message.
 */
function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = "Error: l'un ou les 2 champs  sont vide.";
    return;
  }
  updateLabel();
}

/**
 * Checks if either input value is an empty string.
 * Returns true if either input is empty, false if both have values.
 */
function inputsAreEmpty() {
  if (getNumber1() === "" || getNumber2() === "") {
    return true;
  } else {
    return false;
  }
}
function updateLabel() {
  let addend1 = getNumber1();
  let addend2 = getNumber2();
  let sum = parseInt(addend1) + parseInt(addend2);
  label.textContent = addend1 + " + " + addend2 + " = " + sum;
}
function getNumber1() {
  return inputs[0].value;
}
function getNumber2() {
  return inputs[1].value;
}


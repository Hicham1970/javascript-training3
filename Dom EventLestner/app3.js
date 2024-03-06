// document.forms["inscription"]["email"];
// console.log(document.forms["inscription"]["email"]);

/**
 * This code snippet adds an event listener to the 'email2' input field.
 * Whenever the user types into the 'email2' input field, the function is triggered.
 * It compares the value of the 'email2' input field with the value of the 'email' input field.
 * If the values are different, it sets the innerHTML of the 'error' paragraph element to "Email different".
 * Otherwise, it sets the innerHTML of the 'error' paragraph element to an empty string.
 */

document.getElementById("email2").addEventListener("input", function () {
  let paragraphError = document.getElementById("error");
  if (this.value != document.getElementById("email").value) {
    paragraphError.innerHTML = "Email different";
  } else {
    paragraphError.innerHTML = "";
  }
});

/**
 * Adds a submit event listener to the form with id 'inscription'. 
 * On submit:
 * - Prevents default submit behavior
 * - Checks each input value in the form
 *   - If any are empty, sets error message and prevents submit
 * - If no errors, logs submit and updates #error element 
 */
document.forms["inscription"].addEventListener("submit", function (e) {
  // e.preventDefault();
  // return false;

  let error;
  let inputs = this;
  // traitement cas par cas (champs unique)
  // if (inputs["email"].value != "sgs@sgs.com") {
  //   error = "email is incorrect";

  // }

  // cas générique
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      console.log(inputs[i].name);
      error = `${inputs[i].name} is required`;
      break;
    }
  }

  if (error) {
    e.preventDefault();
    document.getElementById("error").innerHTML = error;
    return false;
  } else {
    console.log("Form submitted");
    document.getElementById("error").innerHTML = "Formulaire envoi";
  }
});
//Recuperation des noms des champs du formulaire
//-------------------------------------------
let firstName = document.formulaire.firstName;
let lastName = document.formulaire.lastName;
let email = document.formulaire.email;
let password = document.formulaire.password;
let confirmPassword = document.formulaire.confirmPassword;
let genre = document.formulaire.genre;
let modules = document.formulaire.module;

/**
 * Dans ce modules on a tout les choix du checkbox, js css nodejs ...on peut faire une boucle for pour isoler le module qu'on desire */
// console.log(modules);

let message_error = document.getElementById("error");

function verifier_form() {
  let nbModule = 0;
  if (firstName.value == "") {
    alert("Veuillez remplir le champs du firstName");
    message_error.innerHTML = "Veuillez remplir le champs du firstName";
    message_error.style.color = "red";
    return false;
  }
  if (lastName.value == "") {
    alert("Veuillez remplir le champs du lastName");
    message_error.innerHTML = "Veuillez remplir le champs du lastName";
    message_error.style.color = "red";
    return false;
  }
  if (email.value == "") {
    alert("Veuillez remplir le champs du email");
    message_error.innerHTML = "Veuillez remplir le champs de l'email";
    message_error.style.color = "red";
    return false;
  }
  if (password.value == "") {
    alert("Veuillez remplir le champs du password");
    message_error.innerHTML = "Veuillez remplir le champs du password";
    message_error.style.color = "red";
    return false;
  }
  if (confirmPassword.value == "") {
    alert("Veuillez remplir le champs du confirmPassword");
    message_error.innerHTML =
      "Veuillez remplir le champs de la confirmation du psw";
    message_error.style.color = "red";
    return false;
  }
  if (genre.selectedIndex == "") {
    alert("Veuillez remplir le champs du genre");
    message_error.innerHTML = "Veuillez remplir le champs du sex";
    message_error.style.color = "red";
    return false;
  }

  for (let i = 0; i < modules.length; i++) {
    if (modules[i].checked) {
      ++nbModule;
      console.log("Module selectionner : " + modules[i].value);
    }
  }
  if (nbModule != 3) {
    alert("Veuillez selectionner 3 modules ni plus ni moins");
    message_error.innerHTML =
      "Veuillez selectionner 3 modules ni plus ni moins";
    message_error.style.color = "red";
    return false;
  }
  console.log("Formulaire valide");
  message_error.innerHTML = "Votre inscription est valide";
  message_error.style.color = "green";

  return true;
}

firstName.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    e.preventDefault();
    lastName.focus();
    verifier_form();
  }
});

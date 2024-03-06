document.getElementById("inscription").addEventListener("submit", function (e) {
  // e.preventDefault();
  // return false;

  let error;
  let pseudo = document.getElementById("pseudo");
  let email = document.getElementById("email");
  let email2 = document.getElementById("email2");
  let psw = document.getElementById("psw");
  // verify if any field is empty:
  if (!psw.value) {
    error = "Password is required";
  }
  if (!email2.value) {
    error = "email2 is required";
  }
  if (!email.value) {
    error = "email is required";
  }
  if (!pseudo.value) {
    error = "Pseudo is required";
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

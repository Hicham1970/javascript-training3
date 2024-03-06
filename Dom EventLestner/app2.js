document.getElementById("inscription").addEventListener("submit", function (e) {
  // e.preventDefault();
  // return false;

  let error;
  let inputs = this.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    console.log(inputs[i].name);
    if (!inputs[i].value) {
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

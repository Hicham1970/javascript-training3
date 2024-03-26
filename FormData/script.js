// selection du form:

let form = document.querySelector("form");

// ajoute d'un ecouteur d'evenement au submit du form:

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirm_password = formData.get("confirmPassword");

  const data_Object = Object.fromEntries(formData);
  const data_json = JSON.stringify(data_Object);
  console.log(data_Object);
  console.log(data_json);
});

/*
les donnees sont enmagasiner sous form du array de 2 dimension:
  formData = [[name, value1],[lastname, value],[age, value],[...]]
  et on a besoin de convertir cette array verc un objet javascript
  comment ca? ==> .fromEntries() method
  */

// Selection des Elements:
let firstName = document.getElementById("the-firstName");
let nickNameName = document.getElementById("the-nickName");
let allSpan = document.querySelectorAll(".buttons span");
let résultat = document.querySelector(".résultat>span");

// On ajoute un ecouteur d'évènement sur chaque span de la selection:
/**
 * Chaque span est identifier par une class unique,
 * On ajoute un ecouteur d’événement sur chaque span pour appeler la fonction correspondante quand elle est cliqué on peut donc utiliser cette propriété pour déterminer quelle fonction appeler lors d'un clic.
 * e.target.classList.contains("check-item") permet de vérifier si l'élément cliqué contient la classe check-item et appeler la fonction.
 */
allSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }

    if (e.target.classList.contains("add-item")) {
      addItem();
    }

    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }

    if (e.target.classList.contains("show-item")) {
      showItem();
    }
  });
});

function showMessage() {
  résultat.innerHTML = "Aucune donnée à verifier";
}

function checkItem() {
  if (firstName.value !== "") {
    if (localStorage.getItem(firstName.value)) {
      résultat.innerHTML = `Une donnée trouvée  associe à <span>${firstName.value}</span>`;
    } else {
      résultat.innerHTML = `Aucune donnée trouvée  associe à <span>${firstName.value}</span>`;
    }
  } else {
    showMessage();
  }
}

function addItem() {
  if (firstName.value !== "") {
    localStorage.setItem(firstName.value, "test");
    résultat.innerHTML = `Le localStorage Element<span>${firstName.value}</span> a été ajoute avec success`;
    firstName.value = "";
  } else {
    showMessage();
  }
}

function deleteItem() {
  if (firstName.value !== "") {
    if (localStorage.getItem(firstName.value)) {
      localStorage.removeItem(firstName.value);
      résultat.innerHTML = `Une donnée du LocalStorage associée à :<span>${firstName.value}</span> a ete supprimée avec succès`;
      firstName.value = "";
    } else {
      résultat.innerHTML = `Aucune donnée trouvée  associée à <span>${firstName.value}</span>`;
    }
  } else {
    showMessage();
  }
}

function showItem() {
  if (localStorage.length) {
    résultat.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      résultat.innerHTML += `<span class="keys">${key} : ${value}</span><br />`;
    }

    // console.log(
    //   `elements trouvée dans le localStorage: ${Object.keys(localStorage)}`
    // );
    // console.log(`elements trouvée : ${localStorage.length}`);
  } else {
    résultat.innerHTML = "LocalStorage est vide !";
  }
}

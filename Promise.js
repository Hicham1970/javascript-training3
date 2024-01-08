// A Promise object represents the eventual completion or failure of an asynchronous operation and its resulting value.
/**Une promise en JavaScript est un objet qui represent l'achèvement d'une operation asynchrone(par exemple une requête réseau, une opération de fichier, etc.).
Les promesses peuvent avoir l'un des trois états possibles :
non résolu (pending) : l'opération n'est pas encore terminée.
résolu (fulfilled) : l'opération a réussi et la promesse est résolue avec la valeur retournée par l'opération.
rejeté (rejected) : l'opération a échoué et la promesse est rejetée avec la raison de l'échec.
Voici un exemple simple d'une promesse en JavaScript : */

// Création d'une nouvelle promesse
let promesse = new Promise((resolve, reject) => {
    // Simulation d'une opération asynchrone (par exemple une requête réseau)
    setTimeout(() => {
        // L'opération réussit et la promesse est résolue avec la valeur 'OK'
        resolve('OK');
    }, 1000);
});

// Gestion des cas de figure pour la promesse
promesse
    .then(valeur => {
        console.log('Promesse résolue avec la valeur :', valeur);
    })
    .catch(raison => {
        console.log('Promesse rejetée avec la raison :', raison);
    });
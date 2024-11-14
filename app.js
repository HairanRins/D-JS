// Manipulation Avancée des Objets

const utilisateur = {
    nom: "Eric",
    age: 25,
    adresse: {
      ville: "Paris",
      codePostal: "22000"
    }
};

const { nom, adresse: { ville }} = utilisateur;
console.log(nom); // Eric
console.log(ville);  // Paris


// Gestion des Promesses et Async/Await

function obtenirUtilisateur() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ id: 1, nom: "Eric" }), 1000);
    });
}
  
async function afficherUtilisateur() {
    const utilisateur = await obtenirUtilisateur();
    console.log(utilisateur.nom); // "Eric" après 1 seconde
}
  
afficherUtilisateur();

const utilisateur1 = {
    nom: "Ethan",
    saluer() {
      console.log(`Bonjour, je suis ${this.nom}`);
    }
  };
  
utilisateur1.saluer(); // "Bonjour, je suis Ethan"
  
const salutation = utilisateur1.saluer;
salutation(); // "Bonjour, je suis undefined"

// Solution  : On peut lier le contexte avec .bind()
const salutationLiee = utilisateur1.saluer.bind(utilisateur1);
salutationLiee(); // "Bonjour, je suis Ethan"


// Closures (Fermetures)
function creerCompteur() {
    let compteur = 0;
    return function() {
      compteur++;
      return compteur;
    };
}

const compteur1 = creerCompteur();
console.log(compteur1()); // 1 
console.log(compteur1()); // 2

const compteur2 = creerCompteur();
console.log(compteur2()); // 1


// Fonctionnalités Modernes (ES6+)

function ajouter(a, b = 10) {
    return a + b;
}

const nombres = [1, 2, 3];
const copieNombres = [...nombres, 4, 5];
console.log(ajouter(5)); // 15
console.log(copieNombres); // [1, 2, 3, 4, 5]
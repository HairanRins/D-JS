# Concepts importants en JavaScript 
Ce sont des concepts clés 
 Ces concepts incluent la manipulation avancée des objets, la gestion des promesses, les modules, le contexte this, les closures, et les fonctionnalités récentes de l'ES6+.

## 1. Manipulation Avancée des Objets

Comme **les destructurations** et **les méthodes d’ES6+**

```
const utilisateur = {
  nom: "Jean",
  age: 25,
  adresse: {
    ville: "Paris",
    codePostal: "75000"
  }
};

const { nom, adresse: { ville } } = utilisateur;
console.log(nom);  // "Jean"
console.log(ville); // "Paris"

```

* La **destructuration** d'objet permet d'extraire des valeurs spécifiques directement.
* Ici, on récupère ``nom`` et ``ville`` directement depuis l'objet utilisateur, ce qui réduit le besoin de syntaxe redondante.

## 2. Gestion des Promesses et Async/Await

Pour gérer des opérations asynchrones, JavaScript propose les promesses et le mot-clé ``async/await`` introduit avec ES8.

```
function obtenirUtilisateur() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, nom: "Jean" }), 1000);
  });
}

async function afficherUtilisateur() {
  const utilisateur = await obtenirUtilisateur();
  console.log(utilisateur.nom); // "Jean" après 1 seconde
}

afficherUtilisateur();

```

* ``obtenirUtilisateur`` est une fonction qui retourne une promesse. Après une seconde, elle résout la promesse avec un objet.
* La fonction ``afficherUtilisateur`` est déclarée avec ``async``, ce qui permet d'utiliser ``await`` pour attendre que ``obtenirUtilisateur()`` soit résolue.
* Cela rend le code asynchrone plus lisible et évite la complexité des ``then``.

## 3. Modules JavaScript (ES6)

Les modules permettent d’organiser le code en plusieurs fichiers facilitant ainsi la maintenance et la réutilisation.

module.js : 
```
export const saluer = (nom) => `Bonjour, ${nom}!`;

export class Utilisateur {
  constructor(nom) {
    this.nom = nom;
  }

  salutation() {
    return `Salut, ${this.nom}`;
  }
}

```

main.js : 
```
import { Utilisateur, saluer } from "./module";

console.log(saluer("Eric")); // "Bonjour, Eric!"
const user = new Utilisateur("Eric");
console.log(user.salutation()); // "Salut, Eric"
```

* ``export`` dans module.js permet de définir des éléments disponibles pour d’autres fichiers.
* ``import`` dans main.js permet d’inclure les éléments exportés et de les utiliser.

## 4. Le Contexte ``this``

Il varie elon comment une fonction est appelée. Il est essentiel de comprendre cela pour éviter des erreurs.

```
const utilisateur = {
  nom: "Eric",
  saluer() {
    console.log(`Bonjour, je suis ${this.nom}`);
  }
};

utilisateur.saluer(); // "Bonjour, je suis Eric"

const salutation = utilisateur.saluer;
salutation(); // "Bonjour, je suis undefined"

```

* Dans ``utilisateur.saluer()``, ``this`` fait référence à utilisateur.
* En assignant ``salutation = utilisateur.saluer``, on perd le contexte ``this``, donc nom devient ``undefined``.

**Solution** : On peut lier le contexte avec ``.bind()`` :

```
const salutationLiee = utilisateur.saluer.bind(utilisateur);
salutationLiee(); // "Bonjour, je suis Eric"
```

## 5. Closures (Fermetures)
Une closure est une fonction qui se souvient de l’environnement dans lequel elle a été créée. Elle permet d’avoir des variables privées.

```
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

```

* ``creerCompteur`` retourne une fonction qui peut accéder à ``compteur``, même après que ``creerCompteur`` soit terminée.
* Cela permet de créer des **variables privées** pour chaque instance de compteur (``compteur1`` et ``compteur2`` ont leur propre compteur).

## 6. Fonctionnalités Modernes (ES6+)
Des fonctionnalités comme le paramètre par défaut, l’opérateur de déstructuration, et l’opérateur de propagation sont utiles pour écrire un code plus compact et puissant.

```
function ajouter(a, b = 10) {
  return a + b;
}

const nombres = [1, 2, 3];
const copieNombres = [...nombres, 4, 5];
console.log(ajouter(5)); // 15
console.log(copieNombres); // [1, 2, 3, 4, 5]

```

* ``...`` est l’opérateur de propagation qui permet d'étendre un tableau ``(nombres)`` dans un nouveau ``(copieNombres)``.



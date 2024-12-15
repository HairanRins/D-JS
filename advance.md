# JavaScript avancé 

JavaScript, le langage polyvalent et omniprésent du web, a été énormément utilisé depuis sa création. 
Autrefois considéré comme un simple langage de script pour les pages Web, il est aujourd’hui une véritable centrale de programmation qui alimente à la fois les applications front-end et back-end.
Alors que de nombreux développeurs ont une solide compréhension des bases de JavaScript, c’est dans les concepts avancés que la magie opère vraiment.

1. **Fermetures : déverrouillage de la portée et de la confidentialité**

Les fermetures sont l’une des fonctionnalités les plus puissantes de JavaScript, mais elles déroutent souvent même les développeurs expérimentés.
Une fermeture est créée chaque fois qu’une fonction accède à une variable en dehors de sa portée lexicale immédiate.

***Comment fonctionnent les fermetures***

En JavaScript, les fonctions ont accès aux variables définies dans leur portée environnante, même après l’exécution de cette fonction externe.
Cela signifie qu’une fonction « se souvient » de l’environnement dans lequel elle a été créée, même lorsqu’elle est appelée en dehors de cet environnement.

```
function outerFunction() {
    let counter = 0;
    
    function innerFunction() {
        counter++;
        console.log(counter);
    }

    return innerFunction;
}

const increment = outerFunction();
increment(); // Output: 1
increment(); // Output: 2
```

Dans cet exemple, il est capable d’accéder et de modifier même après la fin de l’exécution.
Cela se produit parce que la fonction interne forme une fermeture, capturant les variables de la fonction externe.
`innerFunction counter outerFunction`

***Cas d’utilisation pratiques***

* **Confidentialité des données** : À l’aide de fermetures, on peut créer des variables privées qui ne sont pas accessibles directement à partir de la portée globale.

* **Rappels et gestionnaires d’événements :** Les fermetures aident à maintenir l’état du code asynchrone, ce qui les rend essentielles pour la programmation complexe pilotée par les événements.

2. **Promesses et JavaScript asynchrone**

Les applications Web modernes reposent fortement sur des opérations asynchrones, telles que la récupération de données à partir d’API.
Dans le passé, JavaScript gérait cela avec des fonctions de rappel, mais cela a conduit à un « enfer de rappel » – un code profondément imbriqué et difficile à lire.
Les promesses offrent une approche plus propre et plus facile à gérer pour gérer les tâches asynchrones.

*Que sont les promesses ?*

Une **promesse** représente l’achèvement (ou l’échec) d’une opération asynchrone. Il comporte trois états :
  * **En instance** : État initial, ni accompli ni rejeté.
  * **Remplies** : L’opération s’est déroulée avec succès.
  * **Rejeté** : L’opération a échoué.

Voici comment fonctionne une promesse :

```
const asyncOperation = new Promise((resolve, reject) => {
 setTimeout(() => {
 const success = true ;
  if (success) {
 resolve('Opération réussie') ;
 } else {
 reject('Échec de l’opération') ;
 }
 }, 1000) ; 
}) ; 

asyncOperation
 .then(résultat => console.log(result))  Sortie : Opération réussie
 . catch(error => console.log(error)) ;
```

*Async/Wait : une approche moderne*

Les promesses se sont encore améliorées avec l’introduction de et , qui font ressembler le code asynchrone et se comportent davantage comme du code synchrone.
Cela améliore considérablement la lisibilité. `async await`

```
async function fetchData() {
 try {
 const response = await fetch('https://api.example.com/data') ;
  const data = await response.json() ; 
 console.log(data) ; 
 } catch (error) {
 console.error('Erreur :', error) ;
    }
}
```

3. **La boucle d’événements : comprendre le modèle de simultanéité de JavaScript**

La **boucle d’événements** est un concept clé dans le modèle de concurrence de JavaScript, 
ce qui est essentiel pour comprendre comment le code asynchrone fonctionne sous le capot.

*Fonctionnement de la boucle d’événements*

JavaScript est **monothread**, ce qui signifie qu’il ne peut effectuer qu’une seule tâche à la fois.
Cependant, il utilise une boucle d’événements pour gérer plusieurs opérations en déplaçant les tâches entre différentes files d’attente
(pile d’appels, file d’attente de rappel, file d’attente de microtâches) et en les gérant de manière asynchrone.

Voici une répartition simplifiée de la boucle d’événements :

* **Pile d’appels :**  Contient le code en cours d’exécution.

* **File d’attente de rappel :** Stocke les tâches telles que les rappels d’événements qui sont prêts à être exécutés une fois la pile vide.

* **File d’attente de microtâches :** Gère les microtâches comme les promesses, qui sont plus prioritaires que les rappels réguliers.

```
console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);
Promise.resolve().then(() => {
    console.log('Promise');
});
console.log('End');
// Output: 
// Start
// End
// Promise
// Timeout
```

Ici, bien qu’elle ait un délai de 0, la promesse est résolue en premier, car les promesses vont dans la file d’attente des microtâches, 
qui a la priorité sur la file d’attente de rappel.`setTimeout`

4.  **Prototypes et héritage : JavaScript orienté objet**

JavaScript n’est pas basé sur des classes comme beaucoup d’autres langages POO, mais il prend en charge l’héritage par le biais de **prototypes**. 
Chaque objet en JavaScript a un prototype, qui est un autre objet dont il peut hériter de propriétés et de méthodes.

*Hérédité prototypique*

Voyons comment cela fonctionne :

```
function Person(name) {
 this.name = name ; 
}

Person.prototype.greet = function() {
 console.log('Bonjour, je m’appelle ${this.name}') ; 
} ; 
const person1 = new Person('Alice') ; 
person1.greet() ;  Sortie : Bonjour, je m’appelle Alice
```
Ici, la méthode est définie sur le prototype, c’est-à-dire que toutes les instances de partagent cette méthode `.greet Person Person`

*Classes en JavaScript moderne*

Avec ES6, JavaScript a introduit une syntaxe qui fournit une structure plus familière pour les développeurs issus de langages basés sur des classes comme Java ou C++. `class`

```
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
const dog = new Dog('Rex');
dog.speak(); // Output: Rex barks.
```

Malgré l’apparence, les classes JavaScript sont toujours basées sur des prototypes en coulisses.

5. **Currying : transformer les fonctions**

Le **currying** est une technique de programmation fonctionnelle où une fonction est transformée en une série de fonctions, chacune prenant un seul argument. 
Ceci est particulièrement utile lorsqu'on doit réutiliser des fonctions avec des arguments prédéfinis.

```
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiply(2);
console.log(double(5)); // Output: 10
```

Ici, renvoie une nouvelle fonction qui multiplie n’importe quel nombre par 2.
Currying permet de créer des fonctions réutilisables qui peuvent être adaptées à des scénarios spécifiques.`multiply(2)`

6. **Modules : structurer des applications à grande échelle**

JavaScript a été conçu à l’origine pour les petits scripts, mais avec la croissance des applications Web, la gestion de grandes bases de code est devenue difficile. 
ES6 a introduit des modules pour permettre l’organisation et la réutilisation du code dans tous les fichiers.

*Importation et exportation de modules*

```
// math.js
export function add(a, b) {
    return a + b;
}

// app.js
import { add } from './math.js';
console.log(add(2, 3)); // Output: 5
```

Les modules vous aident à encapsuler les fonctionnalités, ce qui rend le code plus facile à maintenir et à comprendre.

7. **Le mot-clé « this » : contexte et confusion**

Le mot-clé en JavaScript peut prêter à confusion car sa valeur dépend du contexte d’exécution. 
Il ne se comporte pas comme dans d’autres langages, où il fait toujours référence à l’instance actuelle .this `this`

*Comment fonctionne « this »*

* **Contexte mondial :** Dans le scope global, fait référence à l’objet global (dans les navigateurs).`this window`

* **Contexte de la fonction :** Dans une fonction, fait référence à l’objet qui appelle la fonction. `this`

* **Fonctions fléchées :** Contrairement aux fonctions normales, les fonctions fléchées ne lient pas leurs propres fonctions, mais les héritent de la portée parente.`this`

```
const obj = {
    name: 'Alice',
    regularFunction: function() {
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(this.name);
    }
};

obj.regularFunction(); // Output: Alice
obj.arrowFunction();   // Output: undefined (or global value depending on the environment)
```



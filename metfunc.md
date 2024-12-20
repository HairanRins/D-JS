# Méthodes et Fonctions JavaScript Essentielles

## 1. **`addEventListener`**
Permet d'attacher un gestionnaire d'événement à un élément HTML.

### Syntaxe
```javascript
element.addEventListener(event, handler, options);
```

### Paramètres
- `event` : Le type d'événement (ex : "click", "mouseover").
- `handler` : La fonction appelée lorsque l'événement est déclenché.
- `options` (facultatif) : Objet pour options comme `capture`, `once`, `passive`.

### Exemple
```javascript
document.getElementById('button').addEventListener('click', () => {
    alert('Bouton cliqué!');
});
```

---

## 2. **`querySelector` / `querySelectorAll`**
Sélectionne un ou plusieurs éléments HTML en fonction d'un sélecteur CSS.

### `querySelector` (Un seul élément)
```javascript
const element = document.querySelector('.my-class');
console.log(element);
```

### `querySelectorAll` (Tous les éléments)
```javascript
const elements = document.querySelectorAll('.my-class');
elements.forEach(el => console.log(el));
```

---

## 3. **`setTimeout` et `setInterval`**
### `setTimeout`
Exécute une fonction après un délai spécifié.
```javascript
setTimeout(() => {
    console.log('Cette fonction s\'exécute après 2 secondes');
}, 2000);
```

### `setInterval`
Exécute une fonction à intervalles réguliers.
```javascript
setInterval(() => {
    console.log('Cela s\'exécute toutes les 3 secondes');
}, 3000);
```

---

## 4. **`map`, `filter` et `reduce`** (Tableaux)

### `map`
Crée un nouveau tableau en appliquant une fonction à chaque élément.
```javascript
const numbers = [1, 2, 3];
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9]
```

### `filter`
Retourne un tableau filtré selon une condition.
```javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```

### `reduce`
Cumule les valeurs d'un tableau en une seule valeur.
```javascript
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 6
```

---

## 5. **`localStorage` et `sessionStorage`**
Permettent de stocker des données dans le navigateur.

### Stockage
```javascript
localStorage.setItem('name', 'Alice');
sessionStorage.setItem('sessionID', '12345');
```

### Récupération
```javascript
const name = localStorage.getItem('name');
console.log(name); // "Alice"
```

### Suppression
```javascript
localStorage.removeItem('name');
sessionStorage.clear(); // Supprime tout
```

---

## 6. **`fetch`**
Permet de faire des requêtes HTTP.

### Exemple simple
```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erreur:', error));
```

### Exemple avec `async/await`
```javascript
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erreur:', error);
    }
}
getData();
```

---

## 7. **`classList`**
Manipule les classes d'un élément HTML.

### Ajout de classe
```javascript
document.getElementById('box').classList.add('active');
```

### Suppression de classe
```javascript
document.getElementById('box').classList.remove('active');
```

### Basculement (toggle)
```javascript
document.getElementById('box').classList.toggle('active');
```

---

## 8. **`Math`**
Fournit des fonctions mathématiques utiles.

### Exemples
```javascript
console.log(Math.random()); // Nombre aléatoire entre 0 et 1
console.log(Math.floor(4.7)); // 4
console.log(Math.max(1, 5, 3)); // 5
```

---

## 9. **`JSON.parse` et `JSON.stringify`**
Manipule des données au format JSON.

### Conversion JSON en objet
```javascript
const jsonString = '{"name": "Alice"}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // "Alice"
```

### Conversion objet en JSON
```javascript
const obj = { name: 'Alice' };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"Alice"}'
```

---

## 10. **`event.preventDefault` et `event.stopPropagation`**
### Empêcher le comportement par défaut
```javascript
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Soumission annulée');
});
```

### Stopper la propagation
```javascript
document.querySelector('.child').addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Propagation arrêtée');
});
```

---

Ces fonctions sont fondamentales pour développer en JavaScript moderne et interactif. Vous pouvez les intégrer dans presque tous vos projets web.

---

---

## 11. **`Object.keys`, `Object.values`, `Object.entries`**
Ces méthodes permettent de travailler avec les propriétés des objets.

### `Object.keys` (Clés)
Retourne un tableau contenant les clés de l'objet.
```javascript
const user = { name: 'Alice', age: 25 };
console.log(Object.keys(user)); // ["name", "age"]
```

### `Object.values` (Valeurs)
Retourne un tableau contenant les valeurs de l'objet.
```javascript
console.log(Object.values(user)); // ["Alice", 25]
```

### `Object.entries` (Clés et valeurs)
Retourne un tableau de paires `[clé, valeur]`.
```javascript
console.log(Object.entries(user)); // [["name", "Alice"], ["age", 25]]
```

---

## 12. **`Array.prototype.forEach`**
Exécute une fonction pour chaque élément d'un tableau.

### Exemple
```javascript
const numbers = [1, 2, 3];
numbers.forEach(num => {
    console.log(num * 2); // Affiche 2, 4, 6
});
```

---

## 13. **`Array.prototype.find` et `Array.prototype.findIndex`**
### `find`
Retourne le premier élément correspondant à une condition.
```javascript
const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2 }
```

### `findIndex`
Retourne l'index du premier élément correspondant à une condition.
```javascript
const index = users.findIndex(u => u.id === 2);
console.log(index); // 1
```

---

## 14. **`Array.prototype.some` et `Array.prototype.every`**
### `some`
Retourne `true` si au moins un élément satisfait une condition.
```javascript
const numbers = [1, 2, 3];
console.log(numbers.some(num => num > 2)); // true
```

### `every`
Retourne `true` si tous les éléments satisfont une condition.
```javascript
console.log(numbers.every(num => num > 0)); // true
```

---

## 15. **`Promise`**
Permet de gérer les opérations asynchrones.

### Exemple simple
```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Succès!'), 1000);
});

promise.then(result => console.log(result)); // "Succès!"
```

---

## 16. **`try...catch`**
Gère les erreurs dans le code.

### Exemple
```javascript
try {
    const result = JSON.parse('invalid JSON');
} catch (error) {
    console.error('Erreur détectée:', error.message);
}
```

---

## 17. **`splice`, `slice`**
### `splice` (Modifie un tableau)
Ajoute ou supprime des éléments.
```javascript
const array = [1, 2, 3, 4];
array.splice(1, 2, 'a', 'b');
console.log(array); // [1, "a", "b", 4]
```

### `slice` (Crée une copie partielle)
Retourne une partie du tableau.
```javascript
const array = [1, 2, 3, 4];
const part = array.slice(1, 3);
console.log(part); // [2, 3]
```

---

## 18. **`String.prototype.includes` et `startsWith`**
### `includes`
Vérifie si une chaîne contient une sous-chaîne.
```javascript
const text = 'Bonjour, monde!';
console.log(text.includes('monde')); // true
```

### `startsWith`
Vérifie si une chaîne commence par une sous-chaîne.
```javascript
console.log(text.startsWith('Bonjour')); // true
```

---

## 19. **`typeof` et `instanceof`**
### `typeof`
Retourne le type d'une variable.
```javascript
console.log(typeof 'hello'); // "string"
console.log(typeof 42); // "number"
```

### `instanceof`
Vérifie si un objet est d'une certaine instance.
```javascript
console.log([] instanceof Array); // true
```

---

## 20. **`document.createElement`**
Crée un nouvel élément HTML.
```javascript
const div = document.createElement('div');
div.textContent = 'Hello World!';
document.body.appendChild(div);
```

---

## 21. **`parentNode`, `children`, et `nextSibling`**
### Naviguer dans le DOM
```javascript
const parent = document.getElementById('child').parentNode;
console.log(parent);

const children = document.getElementById('parent').children;
console.log(children);

const next = document.getElementById('child').nextSibling;
console.log(next);
```

---

## 22. **`cloneNode`**
Clone un élément du DOM.
```javascript
const original = document.getElementById('box');
const clone = original.cloneNode(true);
document.body.appendChild(clone);
```

---

## 23. **`String.prototype.replace`**
Remplace une sous-chaîne dans une chaîne.
```javascript
const text = 'Bonjour, monde!';
const newText = text.replace('monde', 'JavaScript');
console.log(newText); // "Bonjour, JavaScript!"
```

---

## 24. **`RegExp` (Expressions régulières)**
Permet de travailler avec des motifs dans les chaînes.
```javascript
const regex = /\d+/;
console.log(regex.test('123')); // true
console.log('abc123'.match(regex)); // ["123"]
```

---

## 25. **`Array.prototype.sort`**
Trie un tableau.
```javascript
const numbers = [3, 1, 4];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 3, 4]
```

---


Un large éventail d'outils pour manipuler des données, interagir avec le DOM et gérer les opérations asynchrones.



---

Il y a encore d'autres méthodes et concepts essentiels en JavaScript, surtout si l'on inclut des notions modernes ou spécifiques comme celles liées à l'**ES6+** et au fonctionnement avancé du langage. Voici une autre liste de fonctions et concepts importants :

---

## 26. **`Array.prototype.reduce`**
Permet de réduire un tableau à une seule valeur en appliquant une fonction de cumul.

### Exemple
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

---

## 27. **`setTimeout` et `setInterval`**
### `setTimeout`
Exécute une fonction après un délai spécifié.
```javascript
setTimeout(() => {
    console.log('Message après 2 secondes');
}, 2000);
```

### `setInterval`
Exécute une fonction périodiquement.
```javascript
const intervalId = setInterval(() => {
    console.log('Message toutes les 2 secondes');
}, 2000);

// Pour arrêter l'intervalle
clearInterval(intervalId);
```

---

## 28. **`fetch`**
Permet de faire des requêtes HTTP pour interagir avec des API.

### Exemple
```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erreur:', error));
```

---

## 29. **`Map` et `Set`**
Structures de données modernes introduites en ES6.

### `Map`
Un dictionnaire clé-valeur.
```javascript
const map = new Map();
map.set('name', 'Alice');
console.log(map.get('name')); // "Alice"
```

### `Set`
Un ensemble de valeurs uniques.
```javascript
const set = new Set([1, 2, 3, 3]);
console.log(set.size); // 3
```

---

## 30. **`JSON.stringify` et `JSON.parse`**
### `JSON.stringify`
Convertit un objet JavaScript en une chaîne JSON.
```javascript
const obj = { name: 'Alice', age: 25 };
const json = JSON.stringify(obj);
console.log(json); // '{"name":"Alice","age":25}'
```

### `JSON.parse`
Convertit une chaîne JSON en objet JavaScript.
```javascript
const parsed = JSON.parse(json);
console.log(parsed); // { name: 'Alice', age: 25 }
```

---

## 31. **`Math`**
Des outils mathématiques intégrés.
```javascript
console.log(Math.random()); // Nombre aléatoire entre 0 et 1
console.log(Math.round(4.5)); // 5
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.sqrt(16)); // 4
```

---

## 32. **`new Date`**
Travaille avec les dates et heures.
```javascript
const now = new Date();
console.log(now.toISOString()); // ISO string
console.log(now.getFullYear()); // Année actuelle
```

---

## 33. **`encodeURIComponent` et `decodeURIComponent`**
Permettent d'encoder et de décoder des URI.

### Exemple
```javascript
const url = 'https://example.com/?search=hello world';
const encoded = encodeURIComponent(url);
console.log(encoded);

const decoded = decodeURIComponent(encoded);
console.log(decoded);
```

---

## 34. **`Array.prototype.flat`**
Aplatie un tableau multidimensionnel.
```javascript
const nested = [1, [2, [3]]];
const flat = nested.flat(2);
console.log(flat); // [1, 2, 3]
```

---

## 35. **`nullish coalescing (??)`**
Retourne la première valeur définie (non `null` ou `undefined`).
```javascript
const name = null ?? 'Default';
console.log(name); // "Default"
```

---

## 36. **`Optional Chaining (?.)`**
Permet d'accéder aux propriétés d'un objet sans risque d'erreur si elles sont `undefined`.
```javascript
const user = { name: 'Alice', address: { city: 'Paris' } };
console.log(user?.address?.city); // "Paris"
console.log(user?.phone?.number); // undefined
```

---

## 37. **`Proxy`**
Permet de personnaliser le comportement d'un objet.
```javascript
const handler = {
    get: (target, prop) => (prop in target ? target[prop] : 'Propriété inexistante'),
};
const obj = new Proxy({ name: 'Alice' }, handler);
console.log(obj.name); // "Alice"
console.log(obj.age); // "Propriété inexistante"
```

---

## 38. **`WeakMap` et `WeakSet`**
Similaires à `Map` et `Set`, mais avec des références faibles, idéales pour le stockage temporaire.
```javascript
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'value');
console.log(weakMap.get(obj)); // "value"
```

---

## 39. **`Array.prototype.map`**
Transforme chaque élément d'un tableau.
```javascript
const numbers = [1, 2, 3];
const squared = numbers.map(num => num ** 2);
console.log(squared); // [1, 4, 9]
```

---

## 40. **`Intl`**
API pour l'internationalisation.
```javascript
const number = 123456.789;
console.log(new Intl.NumberFormat('fr-FR').format(number)); // 123 456,789
```

---

Cela couvre quasiment tous les concepts essentiels pour manipuler efficacement JavaScript.

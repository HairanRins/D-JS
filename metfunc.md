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

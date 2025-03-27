Les tableaux en JavaScript et TypeScript disposent de nombreuses méthodes utiles pour manipuler et traiter des données. Voici une liste des méthodes les plus courantes, avec des exemples et des explications.

---

## **1. Ajout et suppression d'éléments**
### **push()** – Ajouter un élément à la fin
```ts
let fruits = ["pomme", "banane"];
fruits.push("orange");
console.log(fruits); // ["pomme", "banane", "orange"]
```

### **pop()** – Supprimer le dernier élément
```ts
let lastFruit = fruits.pop();
console.log(fruits); // ["pomme", "banane"]
console.log(lastFruit); // "orange"
```

### **unshift()** – Ajouter un élément au début
```ts
fruits.unshift("fraise");
console.log(fruits); // ["fraise", "pomme", "banane"]
```

### **shift()** – Supprimer le premier élément
```ts
let firstFruit = fruits.shift();
console.log(fruits); // ["pomme", "banane"]
console.log(firstFruit); // "fraise"
```

---

## **2. Recherche d'éléments**
### **indexOf()** – Trouver l’index d’un élément
```ts
let numbers = [10, 20, 30, 40];
console.log(numbers.indexOf(30)); // 2
console.log(numbers.indexOf(50)); // -1 (non trouvé)
```

### **includes()** – Vérifier si un élément est présent
```ts
console.log(numbers.includes(20)); // true
console.log(numbers.includes(50)); // false
```

### **find()** – Trouver le premier élément correspondant à une condition
```ts
let found = numbers.find(num => num > 25);
console.log(found); // 30
```

### **findIndex()** – Trouver l’index du premier élément correspondant à une condition
```ts
let foundIndex = numbers.findIndex(num => num > 25);
console.log(foundIndex); // 2
```

---

## **3. Modification des éléments**
### **map()** – Transformer chaque élément du tableau
```ts
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [20, 40, 60, 80]
```

### **filter()** – Filtrer les éléments selon une condition
```ts
let filtered = numbers.filter(num => num > 25);
console.log(filtered); // [30, 40]
```

### **reduce()** – Réduire un tableau à une seule valeur
```ts
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 100
```

### **forEach()** – Itérer sur chaque élément (sans retourner de nouveau tableau)
```ts
numbers.forEach(num => console.log(num * 2));
// 20
// 40
// 60
// 80
```

---

## **4. Manipulation de structure**
### **slice()** – Extraire une portion du tableau (sans modifier l'original)
```ts
let sliced = numbers.slice(1, 3);
console.log(sliced); // [20, 30]
console.log(numbers); // [10, 20, 30, 40] (inchangé)
```

### **splice()** – Ajouter ou supprimer des éléments (modifie l’original)
```ts
numbers.splice(1, 2, 25, 35); // Remplace 2 éléments à l'index 1
console.log(numbers); // [10, 25, 35, 40]
```

---

## **5. Fusion et tri**
### **concat()** – Fusionner plusieurs tableaux
```ts
let moreNumbers = [50, 60];
let merged = numbers.concat(moreNumbers);
console.log(merged); // [10, 25, 35, 40, 50, 60]
```

### **sort()** – Trier un tableau
```ts
let unsorted = [3, 1, 4, 1, 5, 9];
unsorted.sort(); 
console.log(unsorted); // [1, 1, 3, 4, 5, 9] (ordre alphabétique par défaut)

unsorted.sort((a, b) => a - b); // Tri numérique ascendant
console.log(unsorted); // [1, 1, 3, 4, 5, 9]
```

### **reverse()** – Inverser l’ordre du tableau
```ts
numbers.reverse();
console.log(numbers); // [40, 35, 25, 10]
```

---

## **6. Conversion et affichage**
### **join()** – Transformer en chaîne de caractères
```ts
let joined = numbers.join(" - ");
console.log(joined); // "40 - 35 - 25 - 10"
```

### **toString()** – Convertir en chaîne
```ts
console.log(numbers.toString()); // "40,35,25,10"
```

---

## **7. Vérifications avancées**
### **every()** – Vérifier si tous les éléments respectent une condition
```ts
console.log(numbers.every(num => num > 5)); // true
console.log(numbers.every(num => num > 30)); // false
```

### **some()** – Vérifier si au moins un élément respecte une condition
```ts
console.log(numbers.some(num => num > 30)); // true
console.log(numbers.some(num => num > 50)); // false
```

---

### **Bonus : flat() – Aplatir un tableau imbriqué**
```ts
let nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat(2)); // [1, 2, 3, 4, 5, 6]
```

---

Ces méthodes sont très utiles en JavaScript et TypeScript pour manipuler des données efficacement.

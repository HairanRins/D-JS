En JavaScript, on utilise `forEach` et d'autres méthodes d'itération pour parcourir et manipuler des tableaux (`Array`).
Ces méthodes offrent des alternatives plus lisibles et expressives aux boucles classiques comme `for` et `while`.  

## 🔹 `forEach`
La méthode `.forEach()` permet d'exécuter une fonction sur chaque élément d'un tableau. Contrairement à `map()`, elle ne retourne **rien** (elle retourne `undefined`).  

### 📌 Exemple :
```js
const nombres = [1, 2, 3, 4];

nombres.forEach((nombre) => {
  console.log(nombre * 2); // Affiche 2, 4, 6, 8
});
```
✅ Utile pour parcourir un tableau et effectuer une action (affichage, modification d'une variable externe, etc.).  
❌ Ne permet pas de **créer un nouveau tableau** (contrairement à `map()`).  

---

## 🔹 Les autres méthodes similaires

### 1️⃣ `map()`
- 📌 Retourne **un nouveau tableau** avec les éléments modifiés.  
- ✅ Idéal quand on veut **transformer** un tableau.  

```js
const nombresDoubles = nombres.map((n) => n * 2);
console.log(nombresDoubles); // [2, 4, 6, 8]
```

---

### 2️⃣ `filter()`
- 📌 Retourne **un nouveau tableau** contenant seulement les éléments qui remplissent une condition.  

```js
const pairs = nombres.filter((n) => n % 2 === 0);
console.log(pairs); // [2, 4]
```

---

### 3️⃣ `reduce()`
- 📌 Permet d’**accumuler** une valeur en parcourant un tableau.  

```js
const somme = nombres.reduce((acc, n) => acc + n, 0);
console.log(somme); // 10
```

---

### 4️⃣ `find()`
- 📌 Retourne **le premier élément** qui remplit une condition.  

```js
const premierPair = nombres.find((n) => n % 2 === 0);
console.log(premierPair); // 2
```

---

### 5️⃣ `some()` et `every()`
- `some()` → Vérifie si **au moins un** élément remplit une condition.  
- `every()` → Vérifie si **tous** les éléments remplissent une condition.  

```js
console.log(nombres.some((n) => n > 2)); // true
console.log(nombres.every((n) => n > 0)); // true
```

---

## 🏁 Conclusion
- `forEach()` ➝ Exécute une action sur chaque élément (sans créer un nouveau tableau).  
- `map()` ➝ Transforme un tableau.  
- `filter()` ➝ Filtre un tableau.  
- `reduce()` ➝ Réduit un tableau à une seule valeur.  
- `find()` ➝ Trouve un élément spécifique.  
- `some()` / `every()` ➝ Vérifient des conditions sur le tableau.  

👉 **Lequel utiliser ?**  
Tout dépend de ce que tu veux faire ! 🔥

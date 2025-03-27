## 🚀 **Pourquoi utiliser les fonctions fléchées (`arrow functions`) et `async/await` ?**  

Les **fonctions fléchées (`=>`)** et **`async/await`** sont deux fonctionnalités clés de JavaScript/TypeScript qui améliorent 
la lisibilité et la gestion des fonctions, notamment en **programmation asynchrone**.

---

# **1️⃣ Les Fonctions Fléchées (`Arrow Functions`)**
Les **fonctions fléchées** offrent une syntaxe plus concise que les fonctions classiques et améliorent la gestion du `this`.

### ✅ **Pourquoi utiliser les fonctions fléchées ?**
1. **Syntaxe plus courte et lisible**  
2. **Évite les problèmes de `this`**  
3. **Idéal pour les fonctions anonymes et les callbacks**  
4. **Utilisation simplifiée dans les méthodes de tableau (`map`, `filter`, etc.)**

---

### **🔹 Syntaxe classique vs fonction fléchée**
#### **1. Avec une fonction classique :**
```ts
function addition(a: number, b: number): number {
  return a + b;
}
console.log(addition(2, 3)); // 5
```

#### **2. Avec une fonction fléchée :**
```ts
const addition = (a: number, b: number): number => a + b;
console.log(addition(2, 3)); // 5
```
📌 **Différences** :
- Moins de code (`function` supprimé)
- Pas besoin de `{}` et `return` si une seule expression

---

### **🔹 Gestion du `this` dans les fonctions fléchées**
Dans une fonction classique, `this` change en fonction du contexte, ce qui peut poser problème.

#### **1. Avec une fonction classique :**
```ts
class Timer {
  seconds = 0;

  start() {
    setInterval(function () {
      this.seconds++;
      console.log(this.seconds); // ❌ Erreur : `this` est `undefined`
    }, 1000);
  }
}

const timer = new Timer();
timer.start();
```
📌 **Problème** : `this` dans `setInterval` ne fait plus référence à l'objet `Timer`, mais au contexte global.

---

#### **2. Avec une fonction fléchée :**
```ts
class Timer {
  seconds = 0;

  start() {
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds); // ✅ `this` fonctionne correctement
    }, 1000);
  }
}

const timer = new Timer();
timer.start();
```
✅ **Pourquoi ça marche ?**  
- Les **fonctions fléchées ne créent pas leur propre `this`**, elles utilisent celui du contexte parent.

---

### **🔹 Utilisation dans les méthodes de tableau**
```ts
const numbers = [1, 2, 3, 4];

// Avec une fonction classique
const squares1 = numbers.map(function (num) {
  return num * num;
});

// Avec une fonction fléchée
const squares2 = numbers.map(num => num * num);

console.log(squares1); // [1, 4, 9, 16]
console.log(squares2); // [1, 4, 9, 16]
```
✅ **Moins de code, plus lisible !**

---

# **2️⃣ `async/await` pour la gestion des promesses**
Avant `async/await`, on utilisait **les promesses avec `.then()`**, ce qui pouvait créer un code difficile à lire (**callback hell**).

---

### ✅ **Pourquoi utiliser `async/await` ?**
1. **Code plus lisible et plus proche du synchrone**  
2. **Évite les `.then()` imbriqués (callback hell)**  
3. **Gère les erreurs avec `try/catch` au lieu de `.catch()`**  
4. **Facilite la gestion des requêtes asynchrones (`fetch`, API, BDD...)**  

---

### **🔹 Avant : Avec `.then()` (chaînage de promesses)**
```ts
function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("Erreur :", error);
    });
}

fetchData();
```
📌 **Problème** : Chaque `.then()` ajoute une couche d’imbrication.

---

### **🔹 Après : Avec `async/await`**
```ts
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erreur :", error);
  }
}

fetchData();
```
✅ **Avantages** :
- Code plus clair
- Pas besoin de `.then()`
- Gestion des erreurs avec `try/catch`

---

### **🔹 `await` pour exécuter des tâches en séquence**
Si plusieurs opérations dépendent les unes des autres, **`await` permet d'exécuter les tâches dans l'ordre**.

```ts
async function process() {
  console.log("Début");
  await new Promise(resolve => setTimeout(resolve, 2000)); // Attente 2s
  console.log("Après 2 secondes");
}

process();
```

✅ **Résultat** :
```
Début
(Après 2 secondes...)
Après 2 secondes
```

---

### **🔹 `Promise.all()` pour exécuter plusieurs tâches en parallèle**
Si plusieurs appels peuvent être exécutés **en parallèle**, on utilise `Promise.all()`.

```ts
async function fetchAll() {
  try {
    let [user, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
      fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(res => res.json())
    ]);

    console.log(user);
    console.log(posts);
  } catch (error) {
    console.error("Erreur :", error);
  }
}

fetchAll();
```
✅ **Avantages** :
- Les requêtes s’exécutent **en parallèle** (plus rapide)
- Code propre et clair

---

# 🎯 **Conclusion**
| **Concept** | **Avantages** | **Exemple** |
|------------|--------------|------------|
| **Arrow Functions (`=>`)** | - Syntaxe plus courte <br> - Gestion propre du `this` <br> - Idéal pour les méthodes de tableau (`map`, `filter`, etc.) | `const add = (a, b) => a + b;` |
| **`async/await`** | - Code lisible <br> - Plus simple que `.then()` <br> - Gestion d'erreurs avec `try/catch` | `await fetch(url).then(res => res.json());` |
| **Combinaison des deux** | - Idéal pour les requêtes asynchrones | `const fetchData = async () => {}` |

---

### 🌟 **Combiner les deux : Arrow Function + Async/Await**
```ts
const fetchData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erreur :", error);
  }
};

fetchData();
```
✅ **Code ultra lisible, rapide et efficace !**

---

# Les méthodes et concepts sur les tableaux et autres eb JavaScript 

En JavaScript, `forEach` est une méthode des tableaux qui permet d'exécuter une fonction donnée sur chaque élément du tableau.  

### Syntaxe :
```javascript
array.forEach(function(element, index, array) {
  // Code à exécuter pour chaque élément
});
```
Ou avec une fonction fléchée :
```javascript
array.forEach((element, index, array) => {
  // Code à exécuter pour chaque élément
});
```

### Paramètres :
- `element` : L'élément actuel du tableau.
- `index` *(optionnel)* : L'index de l'élément actuel.
- `array` *(optionnel)* : Le tableau sur lequel `forEach` est appelé.

### Exemple :
```javascript
const nombres = [1, 2, 3, 4];

nombres.forEach((nombre) => {
  console.log(nombre * 2);
});
```
**Sortie :**
```
2
4
6
8
```

### Points importants :
1. **Ne retourne rien** (`undefined`), contrairement à `map` qui retourne un nouveau tableau.
2. **Ne peut pas être interrompu** (pas de `break` ou `return` possible comme dans une boucle `for`).
3. **Modifie pas le tableau** directement, sauf si vous changez ses éléments à l'intérieur de la fonction.

C'est une méthode pratique pour exécuter une action sur chaque élément sans modifier le tableau d'origine.

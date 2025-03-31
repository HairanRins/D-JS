# Valeurs Truthy et Falsy en JavaScript

En JavaScript, chaque valeur peut être évaluée dans un contexte booléen (comme dans une condition `if`). 
Les valeurs sont classées en deux catégories : **truthy** (évaluées à `true`) et **falsy** (évaluées à `false`).

## Valeurs Falsy (équivalentes à `false`)

Voici la liste complète des valeurs falsy en JavaScript :

```javascript
false     // Booléen false
0         // Zéro
-0        // Zéro négatif
0n        // BigInt zero
""        // Chaîne vide
null      // Valeur null
undefined // Valeur undefined
NaN       // Not a Number
```

### Exemples de valeurs falsy

```javascript
if (false) { console.log("Ceci ne s'affichera pas"); }
if (0) { console.log("Ceci ne s'affichera pas"); }
if ("") { console.log("Ceci ne s'affichera pas"); }
if (null) { console.log("Ceci ne s'affichera pas"); }
if (undefined) { console.log("Ceci ne s'affichera pas"); }
if (NaN) { console.log("Ceci ne s'affichera pas"); }
```

## Valeurs Truthy (équivalentes à `true`)

Toutes les valeurs qui ne sont pas dans la liste falsy sont truthy. Voici des exemples courants :

```javascript
true        // Booléen true
1           // Tout nombre non-zero
-1          // Même les nombres négatifs
"0"         // Chaîne contenant "0"
"false"     // Chaîne non-vide
[]          // Tableau vide (même s'il est vide !)
{}          // Objet vide
function(){} // Fonction
```

### Exemples de valeurs truthy

```javascript
if (true) { console.log("Ceci s'affichera"); }
if (1) { console.log("Ceci s'affichera"); }
if ("hello") { console.log("Ceci s'affichera"); }
if ([]) { console.log("Ce tableau vide est truthy!"); }
if ({}) { console.log("Cet objet vide est truthy!"); }
if (function(){}) { console.log("Cette fonction est truthy!"); }
```

## Cas particuliers intéressants

```javascript
// Chaîne vide vs chaîne avec espace
if (" ") { console.log("Espace est truthy"); }
if ("") { console.log("Ceci ne s'affichera pas"); }

// Tableau vide
if ([]) { console.log("Tableau vide est truthy!"); }

// Objet vide
if ({}) { console.log("Objet vide est truthy!"); }

// Comparaisons
console.log(false == 0); // true (à cause de la coercion de type)
console.log(false === 0); // false (comparaison stricte)
console.log(null == undefined); // true
console.log(null === undefined); // false
```

## Utilisation pratique

### Vérification de valeur truthy

```javascript
function afficherMessage(msg) {
  if (msg) { // Équivalent à if (msg !== "" && msg !== null && msg !== undefined, etc.)
    console.log(msg);
  } else {
    console.log("Message vide ou non fourni");
  }
}

afficherMessage("Bonjour"); // Affiche "Bonjour"
afficherMessage("");        // Affiche "Message vide ou non fourni"
afficherMessage(null);      // Affiche "Message vide ou non fourni"
```

### Valeur par défaut avec l'opérateur ||

```javascript
function configurer(options) {
  const couleur = options.couleur || "bleu"; // "bleu" si options.couleur est falsy
  const taille = options.taille || "medium";
  console.log(`Couleur: ${couleur}, Taille: ${taille}`);
}

configurer({ couleur: "rouge" }); // Couleur: rouge, Taille: medium
configurer({ couleur: "" });      // Couleur: bleu, Taille: medium
```

### Nouvel opérateur de coalescence des nuls (??)

L'opérateur `??` est plus strict que `||` car il ne considère que `null` et `undefined` comme falsy:

```javascript
const valeur = 0;
console.log(valeur || 10); // 10 (car 0 est falsy)
console.log(valeur ?? 10); // 0 (car seulement null/undefined sont considérés)
```

## Conclusion

Comprendre les valeurs truthy et falsy est essentiel pour :
- Écrire des conditions concises
- Gérer les valeurs par défaut
- Éviter des bugs subtils dans les comparaisons
- Optimiser le code conditionnel

Rappelez-vous que les tableaux et objets vides sont truthy, ce qui peut parfois surprendre, et que la coercion de type peut mener à des comparaisons contre-intuitives 
si on n'utilise pas l'égalité stricte (`===`).

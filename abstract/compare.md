# Opérateurs de Comparaison et Logiques en JavaScript

Voici une explication détaillée des opérateurs de comparaison et logiques en JavaScript avec des exemples pratiques.

## 1. Opérateurs d'Égalité

### `==` (Égalité faible - avec coercion de type)
Compare les valeurs après conversion de type si nécessaire.

```javascript
5 == '5'    // true (string '5' converti en number)
true == 1   // true (boolean true converti en 1)
false == 0  // true (boolean false converti en 0)
null == undefined // true
```

### `===` (Égalité stricte - sans coercion de type)
Compare les valeurs ET les types.

```javascript
5 === '5'   // false (même valeur mais types différents)
true === 1  // false
false === 0 // false
null === undefined // false
```

### `!=` (Inégalité faible)
```javascript
5 != '5'    // false
true != 1   // false
```

### `!==` (Inégalité stricte)
```javascript
5 !== '5'   // true
true !== 1  // true
```

## 2. Opérateur de Coalescence des Nuls (`??`)

Retourne l'opérande de droite seulement si l'opérande de gauche est `null` ou `undefined`.

```javascript
const valeur1 = null ?? 'défaut'; // 'défaut'
const valeur2 = 0 ?? 'défaut';    // 0 (car 0 n'est pas null/undefined)
const valeur3 = '' ?? 'défaut';   // '' (car chaîne vide n'est pas null/undefined)
```

## 3. Opérateur OU Logique (`||`)

Retourne le premier opérande truthy ou le dernier opérande si tous sont falsy.

```javascript
const nom = '' || 'Invité';       // 'Invité' (car '' est falsy)
const age = 0 || 25;              // 25 (car 0 est falsy)
const valide = false || true;     // true
```

## 4. Opérateur ET Logique (`&&`)

Retourne le premier opérande falsy ou le dernier opérande si tous sont truthy.

```javascript
true && false && true  // false (retourne le premier falsy)
true && 'Hello'        // 'Hello' (tous truthy, retourne le dernier)
0 && true              // 0 (retourne le premier falsy)
```

## 5. Opérateur OPTIONNEL (`?.`)

Permet d'accéder à des propriétés imbriquées sans erreur si une référence est null/undefined.

```javascript
const user = {
  profile: {
    name: 'Jean'
  }
};

console.log(user?.profile?.name); // 'Jean'
console.log(user?.address?.street); // undefined (pas d'erreur)
```

## 6. Comparaisons Relationnelles

### `>`, `<`, `>=`, `<=`
Comparaison de valeurs (avec coercion de type si nécessaire).

```javascript
'10' > 5     // true (string '10' converti en number)
'10' < '5'   // true (comparaison lexicographique)
'a' < 'b'    // true (ordre Unicode)
```

## Tableau Comparatif des Opérateurs

| Opérateur | Nom | Exemple | Comportement |
|-----------|-----|---------|--------------|
| `==` | Égalité faible | `'5' == 5` | `true` (coercion) |
| `===` | Égalité stricte | `'5' === 5` | `false` |
| `??` | Coalescence des nuls | `null ?? 'def'` | `'def'` |
| `||` | OU logique | `0 || 10` | `10` |
| `&&` | ET logique | `1 && 0` | `0` |
| `?.` | Chaînage optionnel | `obj?.prop` | `undefined` si `obj` null |

## Exemples Pratiques

### Validation avec `&&`
```javascript
const age = 25;
age >= 18 && console.log("Majeur"); // Affiche "Majeur" seulement si age >= 18
```

### Valeur par défaut avec `||` et `??`
```javascript
const config = {
  timeout: 0
};

const timeout1 = config.timeout || 3000; // 3000 (car 0 est falsy)
const timeout2 = config.timeout ?? 3000; // 0 (seulement null/undefined)
```

### Accès sécurisé avec `?.`
```javascript
function getCity(user) {
  return user?.address?.city || "Inconnue";
}

getCity({}); // "Inconnue"
```

### Combinaison d'opérateurs
```javascript
const valeur = null;
const result = valeur ?? (10 > 5 && 'Valide') || 'Défaut';
// Évalue à 'Valide' car:
// 1. 10 > 5 → true
// 2. true && 'Valide' → 'Valide'
// 3. null ?? 'Valide' → 'Valide'
// 4. 'Valide' || 'Défaut' → 'Valide'
```

## Bonnes Pratiques

1. Préférez toujours `===` et `!==` à `==` et `!=` pour éviter les surprises de coercion
2. Utilisez `??` plutôt que `||` quand vous voulez seulement éviter `null/undefined`
3. Le chaînage optionnel (`?.`) est très utile pour les objets imbriqués
4. Les opérateurs logiques peuvent servir à des affectations conditionnelles concises

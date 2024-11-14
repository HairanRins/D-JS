import { Utilisateur, saluer } from "./module";

console.log(saluer("Eric")); // "Bonjour, Eric!"
const user = new Utilisateur("Eric");
console.log(user.salutation()); // "Salut, Eric"




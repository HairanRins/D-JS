export const saluer = (nom) => `Bonjour, ${nom}!`;

export class Utilisateur {
  constructor(nom) {
    this.nom = nom;
  }

  salutation() {
    return `Salut, ${this.nom}`;
  }
}


class Persona {
  //nom;
  constructor (nom) {
    this.nom = nom;
  }

  dirNom() {
    return this.nom;
  }
}

const arg = "Toni";
let p = new Persona(arg);

console.log(p.dirNom);

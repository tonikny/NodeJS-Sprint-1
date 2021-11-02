
class Persona {
  //nom;
  constructor (nom) {
    this.nom = nom;
  }
}
let personFactory = (arg)=>{
  return new Persona(arg);
}

const arg = "Toni";
let p = personFactory(arg);
console.log(p.nom);

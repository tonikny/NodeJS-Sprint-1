//'use strict';

class Persona {
  //nom;
  constructor (nom) {
    this.nom = nom;
  }

  dirNom() {
    return this.nom;
  }
}

/* class Personas {
  constructor() {
    const p = new Persona('Toni');
  }
  nomPersona() {
    return this.p.dirNom();
  }
} */
/* 
function usaPersones(){
  let p = new Persona('Joan');
  console.log(p.dirNom());
  let j = new Persona('Jordi');
  console.log(j.dirNom());
} */

module.exports = Persona;
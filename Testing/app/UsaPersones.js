
const Persona = require('./Persona');

class UsaPersones {
  constructor(llistaNoms=[]) {
    this.persones = [];
    llistaNoms.forEach(p => {
      //console.log('Afegint persona ', p);
      this.persones.push(new Persona(p));
    });
    
  }

  llistaPersones() {
    this.persones.forEach(p => {
      console.log(p.dirNom());
    });
  }
}

//const u = new UsaPersones(["Toni", "Pep"]);
//u.llistaPersones();

module.exports = UsaPersones;
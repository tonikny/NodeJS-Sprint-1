
// Classe abstracta
class Abs {
  constructor () {
    if (new.target === Abs) {
      throw new Error( 'No es pot instanciar la classe abstracta Abs' );
    }
  }
}

// Classe concreta
class Miclasse extends Abs {
  constructor(nom) {
    super();
    this.nom = nom;
  }
  saluda() {
    console.log('Hola', this.nom);
  }
}

function creaObjecteAbs () {
  try {
    // instanciar classe abstracta -> error
    const c = new Abs();
  } catch (err) {
    console.error(err.message);
  }
}

function creaObjecteMiclasse (nom) {
  try {
    // instanciar classe concreta
    const mc = new Miclasse(nom);
    console.log('Miclasse instanciada');
    return mc;
  } catch (err) {
    console.error(err.message);
  }
}

const abs = creaObjecteAbs();
const obj1 = creaObjecteMiclasse('Toni');
const obj2 = creaObjecteMiclasse('Omar');

obj1.saluda();
obj2.saluda();

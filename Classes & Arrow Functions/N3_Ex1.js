
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
  saluda() {
    console.log('Hola');
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

function creaObjecteMiclasse () {
  try {
    // instanciar classe concreta
    const mc = new Miclasse();
    console.log('Miclasse instanciada');
    return mc;
  } catch (err) {
    console.error(err.message);
  }
}

const abs = creaObjecteAbs();
const mic = creaObjecteMiclasse();
mic.saluda();

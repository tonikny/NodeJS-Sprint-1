
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
}


function creaObjectes () {
  try {
    // instanciar classe abstracta -> error
    const c = new Abs();
  } catch (err) {
    console.error(err.message);
  }
  // instanciar classe concreta
  const mc = new Miclasse();
  console.log('Miclasse instanciada');
}

creaObjectes();
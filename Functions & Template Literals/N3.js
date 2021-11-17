
/**
 * N3 Ex1
 */

let mi_array = new Array(10);

for (let index = 0; index < 10; index++) {
   mi_array[index] = () => {
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }
  };
}

for (let j = 0; j < 10; j++) {
  mi_array[j]();
}



/**
 * N3 Ex2
 */

const nom = 'Toni';

let mifunc = (arg => {
  console.log('Hola', arg);
})(nom);
 

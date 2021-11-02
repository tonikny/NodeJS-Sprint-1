function promesa(n) {
  resolta = n>10;
  return new Promise ((resolve, reject) => {
    if (resolta) {
      resolve(`S'ha resolt la promesa.`);
    } else {
      reject(new Error(`No s'ha pogut resoldre la promesa.`));
    }
  });
}

// prova promise resolta
promesa(2)
  .then(res=>console.log(res))
  .catch(err=>console.log(err.message));

// prova promise no resolta
promesa(12)
  .then(res=>console.log(res))
  .catch(err=>console.log(err.message));

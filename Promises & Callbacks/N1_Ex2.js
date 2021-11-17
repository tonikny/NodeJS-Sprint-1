
function exemple (valor, callback) {
  let missatge = valor.toString();
  if (valor < 10) missatge = 'Aquest nombre és massa petit';
  else if (valor > 100) missatge = 'Aquest nombre és massa gran';
  callback(missatge);
}

function callback (param) {
    console.log(param)
}

exemple(4, callback);
exemple(14, callback);
exemple(141, callback);

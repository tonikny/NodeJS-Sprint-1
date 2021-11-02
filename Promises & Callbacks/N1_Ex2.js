
function exemple (valor, callback) {
  callback(valor);
}

function callback (param) {
    console.log(param)
}

exemple(4,callback);
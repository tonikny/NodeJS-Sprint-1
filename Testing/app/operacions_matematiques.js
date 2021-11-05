/**
 * Suma tots els arguments, arg1+arg2+...+argN
 */
function sumar (...arg) {
  if (arg.every((elem)=>!isNaN(elem))) {
    if (arg.length>1) {
      let res = 0;
      while (arg.length>0) {
        res += arg.shift();
      }
      return res;
    } else console.error('Arguments insuficients');
  } else console.error('Arguments no numèrics');
}

/**
 * Resta del primer argument els seguents, arg1-arg2-...-argN
 */
function restar (...arg) {
  if (arg.every((elem)=>!isNaN(elem))) {
    if (arg.length>1) {
      let res = arg.shift();
      while (arg.length>0) {
        res -= arg.shift();
      }
      return res;
    } else console.error('Arguments insuficients');
  } else console.error('Arguments no numèrics');
}

/**
 * Multiplica tots els arguments, arg1*arg2*...*argN
 */
 function multiplicar (...arg) {
  if (arg.every((elem)=>!isNaN(elem))) {
    if (arg.length>1) {
      let res = 1;
      while (arg.length>0) {
        res *= arg.shift();
      }
      return res;
    } else console.error('Arguments insuficients');
  } else console.error('Arguments no numèrics');
}

/**
 * divideix del primer argument els seguents ((arg1/arg2)/...)/argN
 */
function dividir (...arg) {
  if (arg.every((elem)=>!isNaN(elem))) {
    if (arg.length>1) {
      let res = arg.shift();
      while (arg.length>0) {
        let aux = arg.shift();
        if (aux===0) {
          console.error('Divisió per zero');
          return;
        }
        res /= aux;
      }
      return res;
    } else console.error('Arguments insuficients');
  } else console.error('Arguments no numèrics');
}

module.exports = {sumar,restar,multiplicar,dividir};

/*
console.log(sumar(2,3,4));
console.log(restar(12,3,2,1,4));
console.log(multiplicar(2,3,4));
console.log(dividir(12,3,2));
*/
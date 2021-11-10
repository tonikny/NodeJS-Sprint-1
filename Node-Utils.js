
/**
 * Nivell 1 Exercici 1
 */

const { rejects } = require('assert');

function missatges(missatge) {
  timerID = setInterval(() => console.log(missatge), 1000);
}
/** Prova d'execució */ 
//missatges('provant ...')


/**
 * Nivell 1 Exercici 2
 */

function escriu (frase, file) {
  const fs = require('fs');
  fs.writeFileSync(file,frase,'utf8');
  console.log('Arxiu escrit:', file, frase);
}
/** Prova d'execució */ 
//escriu('Frase de prova','node_utils.txt');


/**
 * Nivell 1 Exercici 3
 */

function llegeix (file) {
  const fs2 = require('fs');
  const res = fs2.readFileSync(file,'utf8');
  console.log('Arxiu llegit:',file, res);
  return res;
}
/** Prova d'execució */ 
//console.log('Retorna:', llegeix('node_utils.txt'));


/**
 * Nivell 2 Exercici 1
 */
  
function comprimeix (file) {
  const fs3 = require('fs');
  const zlib = require("zlib");
  const dades = fs3.readFileSync(file,'utf8');
  zlib.gzip(dades, (err, buffer) => {
    if (!err) {
      //console.log(buffer.toString('base64'));
      fs3.writeFile(file+'.gz', buffer,'utf8',(err)=>{
        if (err) console.log(err);
        else console.log('Dades comprimides...');
      });
    }
    else console.log(err);
  });
}
/** Prova d'execució */ 
//comprimeix('node_utils.txt');


function llista() {
  const os = require('os');
  const { exec } = require('child_process');

  exec('dir ' + os.homedir(), (error, stdout, stderr) => {
    if (error) {
      console.error(error.message);
      return;
    }
    if (stderr) {
      console.error(stderr);
      return;
    }
    console.log(stdout);
  });
}
/** Prova d'execució */ 
//llista()

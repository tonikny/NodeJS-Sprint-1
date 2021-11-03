
/**
 * Nivell 1 Exercici 1
 */

function missatges(missatge) {
  timerID = setInterval(() => console.log(missatge), 1000);
}

/** Prova d'execució */ 
//missatges('provant ...')


/**
 * Nivell 1 Exercici 2
 */

function escriu (frase) {
  const fs = require('fs');
  fs.writeFile('node_utils.txt',frase,'utf8',(err)=>{
    if (err) console.log(err);
    else console.log('Frase escrita.');
  });
}

/** Prova d'execució */ 
//escriu('Frase de prova');


/**
 * Nivell 1 Exercici 3
 */

 function llegeix () {
  const fs2 = require('fs');
  fs2.readFile('node_utils.txt','utf8',(err, data)=>{
    if (err) console.log(err);
    else console.log('Frase llegida:', data);
  });
 }

/** Prova d'execució */ 
//llegeix();


 /**
 * Nivell 2 Exercici 1
 */
  
  function comprimeix () {
    const fs3 = require('fs');
    const zlib = require("zlib");
    const dades = fs3.readFileSync('node_utils.txt','utf8');
    zlib.gzip(dades, (err, buffer) => {
      if (!err) {
        //console.log(buffer.toString('base64'));
        fs3.writeFile('node_utils.txt.gz', buffer,'utf8',(err)=>{
          if (err) console.log(err);
          else console.log('Dades comprimides...');
        });
      }
      else console.log(err);
    });
  }

/** Prova d'execució */ 
//comprimeix();

function llista() {
  const { exec } = require('child_process');
  exec('ls --color', (error, stdout, stderr) => {
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



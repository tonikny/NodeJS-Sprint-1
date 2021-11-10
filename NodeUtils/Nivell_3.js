
 /**
  * Nivell 3 Exercici 1
  */

const fs = require('fs');
const crypto = require('crypto');
const { Buffer } = require('buffer');

function escriu (frase, file) {
  fs.writeFileSync(file,frase,'utf8');
  console.log('Arxiu escrit:', file, frase);
}

function llegeix (file) {
  const res = fs.readFileSync(file,'utf8');
  console.log('Arxiu llegit:',file, res);
  return res;
}
 
function codifica(file) {
  try {
    const content = llegeix(file);
    const cont_b64 = Buffer.from(content).toString('base64');
    escriu(cont_b64, file+'.b64');
    const cont_hex = Buffer.from(content).toString('hex');
    escriu(cont_hex, file+'.hex');
  } catch(err){
    console.error(err);
  }
}
 
function encriptaString(text) {
  const algorithm = 'aes-192-cbc';
  const password = 'Password used to generate key';
  const iv = new Uint8Array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

  // Primero, generaremos la clave. La longitud de la clave depende del algoritmo.
  // En este caso para aes192, es de 24 bytes (192 bits).
  return new Promise((resolve,reject)=>{
    crypto.scrypt(password, 'salt', 24, (err, key) => {
      if (err) throw err;
      const cipher = crypto.createCipheriv(algorithm, key, iv);
      let encrypted = cipher.update(text, 'utf8', 'hex');
      encrypted += cipher.final('hex');
      resolve(encrypted);
    });
  });
}
 
async function encripta(file) {
  const content = llegeix(file);
  const encriptat = await encriptaString(content)
  const arxiuEnc = file+'.enc';
  console.log(content,'===>>>', encriptat);
  escriu(encriptat, arxiuEnc);
  fs.unlink(file, (err) => {
    if (err) throw err;
    console.log('Arxiu esborrat: ', file);
  });
}

function desencriptaString(encrypted) {
  const algorithm = 'aes-192-cbc';
  const password = 'Password used to generate key';
  const iv = new Uint8Array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

  // Primero, generaremos la clave. La longitud de la clave depende del algoritmo.
  // En este caso para aes192, es de 24 bytes (192 bits).
  return new Promise((resolve,reject)=>{
    //generate encryption key using secret
    crypto.scrypt(password, 'salt', 24, (err, key) => {
      if (err) throw err;
      //create decipher object
      const decipher = crypto.createDecipheriv(algorithm, key, iv);
      let decrypted = '';
      decipher.on('readable', () => {
        while (null !== (chunk = decipher.read())) {
          decrypted += chunk.toString('utf8');
        }
      });
      decipher.on('end', () => resolve(decrypted));
      decipher.on('error', (err) => reject(err))
      decipher.write(encrypted, 'hex');
      decipher.end();
    });
  });
}

async function desencripta(basefile) {

  let encrypted = llegeix(basefile+'.b64.enc');
  let decrypted = await desencriptaString(encrypted);
  let buff = new Buffer.from(decrypted, 'base64').toString('utf-8');
  let decoded = buff.toString('utf-8');
  console.log(encrypted,'===>>>', decoded);

  encrypted = llegeix(basefile+'.hex.enc');
  decrypted = await desencriptaString(encrypted);
  buff = new Buffer.from(decrypted, 'hex').toString('utf-8');
  decoded = buff.toString('utf-8');
  console.log(encrypted,'===>>>', decoded);
}

/** Prova d'execució */ 
;(async () => {
  const Reset = "\x1b[0m";
  const FgRed = "\x1b[31m";
  console.log(FgRed,'\n'+'Escriu l\'arxiu\n----------------------------',Reset);
  escriu('Frase de prova','node_utils.txt');  // escriu un text a un arxiu

  await sleep(3000);
  console.log(FgRed,'\n'+'Codifica l\'arxiu:\n----------------------------',Reset);
  codifica('node_utils.txt');                 // codifica a base64 i hex
  await sleep(3000);
  console.log(FgRed,'\n'+'Encripta els arxius:\n----------------------------',Reset);
  encripta('node_utils.txt.b64');             // encripta arxiu i esborra original
  encripta('node_utils.txt.hex');             // encripta arxiu i esborra original

  await sleep(3000);
  console.log(FgRed,'\n'+'Desencripta i decodifica:\n----------------------------',Reset);

  await desencripta('node_utils.txt');
  await sleep(3000);
  console.log('\n'+'bye');

})().then(process.exit);

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


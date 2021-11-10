# Node Utils Nivell 3

## **Funcions:**
  * llegeix(file)           ---> llegeix un arxiu
  * escriu(text,file)       ---> escriu un text a un arxiu
  * codifica(file)          ---> codifica un arxiu a base64 i hex i escriu els nous arxius
  * encripta(file)          ---> encripta arxiu, l'escriu i esborra original
  * desencripta(basefile)   ---> desencripta i decodifica els arxius a partir del nom original
  
## **Funcions auxiliars:**
  * encriptaString(text)
  * desencriptaString(text)
  * sleep(ms)

## **Execució de les proves:**
Les proves s'executen en ordre amb 3 segons de retard entre elles:
  * escriu
  * codifica
  * encripta
  * desencripta
  
  ### Execució
  * node Nivell_3.js
   

/*Descrizione:
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/


// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
  nome: "nicolas",
  cognome: "de santis",
  eta: 29
};

console.log(studente);

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (var key in studente) {
  console.log(studente[key]);
}


// Creare un array di oggetti di studenti.
var studenti = [
  studente = {
    nome: "gino",
    cognome: "paperino",
    eta: 33
  },
  studente = {
    nome: "pino",
    cognome: "alberino",
    eta: 33
  },
  studente = {
    nome: "pinetta",
    cognome: "paletta",
    eta: 33
  }
];

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i]["nome"],studenti[i]["cognome"]);
}


// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

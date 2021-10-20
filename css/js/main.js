

//ottenere nome del visitatore

const nome = prompt(`Come ti chiami?`);
console.log(nome);

//ottenere cognome visitatore

const cognome = prompt(`Qualè il tuo cognome?`);
console.log(cognome);

//ottenere colore preferito

const colore = prompt(`Qualè il tuo colore preferito?`);
console.log(colore);

//mostrare risultato

document.getElementById(`dati`).innerHTML = `${nome}${cognome}${colore}21`;




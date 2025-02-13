/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo.
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"*/

// inserimento numero utente
alert('Lancia i dadi!')
let userDice = Math.floor(Math.random() * 6) +1;
console.log(`Il tuo dado ha fatto ${userDice}`);
alert(`Il tuo dado ha fatto ${userDice}`);

// inserimento numero PC
alert('Ora è il turno del tuo avversario!')
let machineDice = Math.floor(Math.random() * 6) +1;
console.log(`L'avversario hai fatto ${machineDice}`);
alert(`L'avversario hai fatto ${machineDice}`);

// comparazione dei risultati e dichiarazione vincitore
if(userDice > machineDice){
    console.log('Complimenti hai vinto!')
    alert('Complimenti hai vinto!')
} else {
    console.log('Peccato, hai perso!')
    alert('Peccato, hai perso!')
}
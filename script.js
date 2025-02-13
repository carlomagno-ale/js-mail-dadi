/* Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) . Si puó fare??
eh si!  Basta ragionare un po’.*/

const invitedList = [
    'Marco',
    'Paolo',
    'Signor Pizza Vegana',
    'Fabio',
    'Giuliano',
    'Alessandro'
];

const userName = prompt('Inserisci il tuo nome per controllare se sei fra gli invitati:');

for (let i = 0; i < invitedList.length; i++) {
   
    if (userName === invitedList[i]) {
        console.log('sei nella lista');
    } 
    
}


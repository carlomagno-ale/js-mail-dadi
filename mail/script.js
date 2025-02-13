/* Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) . Si puó fare??
eh si!  Basta ragionare un po’.*/

const inviteList = [
    'pizzavegana@gmail.com',
    'fabio@gmail.com',
    'giuliano@gmail.com',
    'alessandro@gmail.com',
    'fabiola@gmail.com',
];

const userName = prompt('Inserisci la tua email per controllare se sei fra gli invitati:');

let isUserListed = null;

for (let i = 0; i < inviteList.length; i++) {

    if (userName === inviteList[i]) {
        isUserListed = true;
    }
}

if (isUserListed) {
    console.log('sei nella lista');
} else {
    console.log('non sei nella lista');
}




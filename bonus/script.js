/* Mail Bonus:
Dopo aver svolto l'esercizio con il for  fai una cartella bonus e svolgilo anche anche usando un metodo delle array tipo includes
Nota: Non è necessario provvedere alla validazione delle email*/

const inviteList = [
    'pizzavegana@gmail.com',
    'fabio@gmail.com',
    'giuliano@gmail.com',
    'alessandro@gmail.com',
    'fabiola@gmail.com',
];

const userName = prompt('Inserisci la tua email per controllare se sei fra gli invitati:');

const isUserListed = inviteList.includes(userName);

if (isUserListed) {
  console.log("Sei fra gli invitati!")
} else {
  console.log("Non sei fra gli invitati!")
}
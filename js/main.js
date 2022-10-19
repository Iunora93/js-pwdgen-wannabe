"use strict";

/* 
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito76 
*/

/* Chiedi all'utente il suo nome */
const firstName = prompt("Ciao inserisci il tuo nome");
console.log(firstName);

/* Chiedi all'utente il suo cognome */
const lastName = prompt("Inserisci il tuo cognome");
console.log(lastName);

/* Chiedi all'utente il suo colore preferito */
const favoriteColor = prompt("Inserisci il tuo colore preferito");
console.log(favoriteColor);

/* Scrivi sulla pagina nomecognomecolorepreferito76 */
const totalInformation = firstName + lastName + favoriteColor + 76;
console.log(totalInformation);

document.querySelector("h1").innerHTML = totalInformation;
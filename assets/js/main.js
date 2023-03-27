/* 
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.



Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?

    (i % 3) == 0

    ciclo for per arrivare da 1 a 100
    ogni i deve stampare una card su DOM
    max-5 per riga


Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/


for (let mario = 1 ; mario <=100 ; mario++) {
    if (mario % 3 == 0 && mario % 5 == 0 ) {
        document.querySelector('.row').innerHTML += `<div class="square square-fizzbuzz">FizzBuzz</div>`
    } else if (mario % 3 == 0 ) {
        document.querySelector('.row').innerHTML += `<div class="square square-buzz">Buzz</div>`
    } else if (mario % 5 == 0 ) {
        document.querySelector('.row').innerHTML += `<div class="square square-fizz">Fizz</div>`
    } else {
        document.querySelector('.row').innerHTML += `<div class="square square-numero">${mario}</div>`
    }
}
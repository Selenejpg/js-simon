 //Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//Visualizzare in pagina 5 numeri casuali.

while (i < n) {
    let arr = []

    //Ognuno formato da 10 numeri casuali da 1 a 99
    for (let c = 0; c < 5; c++) {
        let numeroCasuale = Math.floor(Math.random() * 99) +1; 
        //Ogni volta che ne crei uno, stampalo.
        arr.push(numeroCasuale)
    }

    console.log(arr)
    i++;
    
}

setTimeout(timer, 30000);

function timer() {
    for (let i = 0; i < 5; i++) {
        let risposta = prompt("Inserisci ad uno a uno i numeri appena visti")
    }
}
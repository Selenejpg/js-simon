let arr = []
let risultato = [];
let scartati = [];

//Numeri casuali da 1 a 99
for (let c = 0; c < 5; c++) {
    let numeroCasuale = Math.floor(Math.random() * 99) +1; 
    //Ogni volta che ne crei uno, stampalo.
    arr.push(numeroCasuale)
    
}
document.getElementById("stamp").innerHTML = arr

console.log(arr)

//Da la parte un timer di 30 secondi.
setTimeout(timer, 29000);
setTimeout(timer2, 30000);

function timer() {
    document.getElementById("stamp").style.display = "none";
}


function timer2() {
    
    
    for (let i = 0; i < 5; i++) {
        //Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
        let risposta = parseInt(prompt("Inserisci i numeri che hai appena visto!"));

        console.log(risposta);
        if (arr.includes(risposta)) {
            risultato.push(risposta);
        } else {
            scartati.push(risposta);
            
        }
  
    }

    console.log(scartati);
    document.getElementById("risultati").innerHTML = `Hai totalizzato ${risultato.length} punti!`;
    document.getElementById("stamp").style.display = "block";
    document.getElementById('numeriIndovinati').innerHTML = `Congratulazioni! I numeri corretti che hai inserito sono: ${risultato}`;

}


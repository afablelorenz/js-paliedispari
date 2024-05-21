const numComputer = generateRandom();
let pariDispariUser = prompt('Pari o Dispari').trim().toLowerCase();
while (pariDispariUser !== 'pari' && pariDispariUser !== 'dispari'){
    alert('Inserire pari o dispari!');
    pariDispariUser = prompt('Pari o Dispari').trim().toLowerCase();
}

let numUtente = Number.parseInt(prompt('scegli un numero da 1 a 5').trim(),10);
while (Number.isNaN(numUtente) || numUtente < 1 || numUtente > 5){
    alert('Inserire un numero da 1 a 5!');
    numUtente = Number.parseInt(prompt('scegli un numero da 1 a 5').trim(),10);
}



console.log('Hai scelto '+ pariDispariUser + ' , ' + numUtente);
let somma = numComputer + numUtente;
console.log('Il computer ha scelto ' + numComputer);

if (pariDispari(somma)){
    console.log('Hai vinto');
}else{
    console.log('Hai perso');
}

function generateRandom(){
    const numRandom = Math.floor(Math.random() * 5) + 1;
    return numRandom;
}

function pariDispari(somma){
    if (somma % 2 === 0){
        return true;
    }else{
        return false;
    }
}


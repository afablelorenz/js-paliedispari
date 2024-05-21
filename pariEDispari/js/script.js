let pariDispariUser = prompt('Pari o Dispari').trim().toLowerCase();
while (pariDispariUser !== 'pari' && pariDispariUser !== 'dispari'){
    alert('Inserire pari o dispari!');
    pariDispariUser = prompt('Pari o Dispari').trim().toLowerCase();
}

let numUtente = Number.parseInt(prompt('scegli un numero da 1 a 5').trim(),10);
while (Number.isNaN(numUtente) || numUtente < 1 || numUtente > 5){
    alert('Inserire un numero da 1 a 5!');
    Number.parseInt(prompt('scegli un numero da 1 a 5').trim(),10);
}
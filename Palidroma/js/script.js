let utenteString = prompt('Inserisci una stringa');

reverseString(utenteString);

function reverseString(string){
    let reversed = '';

    for(let i = string.length - 1; i >= 0; i--){
        reversed += string[i];
    }
    if (string === reversed){
        console.log(string,reversed);
        console.log('E\' una palindroma!');
    }else{
        console.log(string,reversed);
        console.log('Non è una palindroma');
    }
}
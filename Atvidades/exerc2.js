// A entrada do seu programa é composta de uma variável do tipo booleana chamada olhosNasLaterais, que 
// indica se o animal analisado tem ou não olhos nas laterais da cabeça. O valor de true quer dizer que 
// o animal tem olhos nas laterais e false que não tem.
// Seu programa deve retornar:

// PRESA: se o animal tiver olhos nas laterais da cabeça;

// PREDADOR: se não tiver olhos nas laterais da cabeça.


function solucao(olhosNasLaterais) {

    if(olhosNasLaterais){
        return "PRESA"
    }
    else {
        return "PREDADOR"
    }

}

console.log(solucao(true));
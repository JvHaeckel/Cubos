// Todo mês depositar na conta um valor até chegar em 100.000 sabendo que ela rende 10% ao ano
// em quanto meses chega? Dados: 

let conta = 0;
let deposito = 500;
let objetivo = 100000;
let rendimento = 0.1;
let ano = 12

/* --------------------------*/

let meses = 0;

while(conta < objetivo){
    conta += deposito; // conta = conta + deposito;
    conta += conta * rendimento / ano;
    meses ++;
}
let anos = meses / 12
console.log("vai demorar : " + meses + " meses para chegar no valor de: R$ " + conta);

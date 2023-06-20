// Considere uma balança com dois pesos de cada lado e diga para qual lado ela vai pender dados:

let pesoA1 = 10;
let pesoA2 = 5;
let pesoB1 = 20;
let pesoB2 = 10;

function soma(pesoA1, pesoA2, pesoB1,pesoB2) {
    let somaA = pesoA1 + pesoA2;
    let somaB = pesoB1 + pesoB2;
    console.log("A soma A foi de: " + somaA + " A soma B foi de: " + somaB)
    pendendo(somaA,somaB)
}

function pendendo(somaA, somaB) {
    if (somaA > somaB) {
        console.log("Lado A pesa mais");
    }
    else if (somaA < somaB) {
        console.log("Lado B pesa mais");
    } else {console.log("Equilibrio");}
}

soma(pesoA1,pesoA2,pesoB1,pesoB2);

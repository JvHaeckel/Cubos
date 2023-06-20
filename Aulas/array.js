// Soma dos elementos
let list = [34, 56, 768, 8, 81, 3, 6, 10]

let soma = 0;

// Forma Tradicional :
for (let i = 0; i < list.length ; i++){
    soma += list[i]  /* soma = soma + list[i] */
}

// Usando o For of :

// for(let numbers of list){
//  soma += numbers;
// }

console.log(soma)
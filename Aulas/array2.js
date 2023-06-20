// Imprima o menor deles

let list = [34, 56, 768, 8, 81, 3, 6, 10]

let menor;

// Usando o For of :

/* for( let number of list){

//     if(menor === undefined){
//         menor = number;
//     } else{
//         if(number < menor){
//             menor = number;
//         }
//     }
 }  

console.log(menor);                */


// Forma Tradicional :
for (let i = 0; i < list.length; i++) {
    if (menor === undefined) {
        menor = list[i];
    } else {

        if (list[i] < menor) {
            menor = list[i];
        }
    }
}
console.log(menor);
// multiplos de 17 entre 1 e 1000

let cont = 0;
let number = 1;

while (number <= 100000){
   
   if(number % 17 === 0){
    cont ++;
   } 
    number ++;
}

console.log(cont);
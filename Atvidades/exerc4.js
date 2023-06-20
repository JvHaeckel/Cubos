/* Você foi contratado pelo UFC, maior evento de artes maciais mistas (MMA) do mundo, para desenvolver um programa que os 
ajude a saber se uma luta entre dois lutadores pode ou não acontecer. A única restrição para que uma luta aconteça é que
 os lutadores tenham uma diferença máxima de peso de 5 kg. A entrada do seu programa será composta por uma variável chamada 
 pesos, do tipo array de number, que armazena, respectivamente, o peso do Lutador A e do Lutador B, ambos em quilogramas, 
 sendo esses os lutadores analisados.*/


 function solucao(peso1, peso2) {

    let peso = [peso1, peso2];
    let diferenca = Math.abs(peso[0] - peso[1]);

    if(diferenca <= 5){
        return 'PODEM LUTAR';
    } else {
        return 'NÃO PODEM LUTAR';
    }

}

console.log(solucao(50,55))


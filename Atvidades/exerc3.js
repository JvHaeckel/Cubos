/*Você, desenvolvedor sênior do UFC, maior evento de artes maciais mistas (MMA) do mundo, deve desenvolver um programa 
que indique à organização do novo evento que sua empresa vai fazer se dois lutadores podem ou não lutar. Os lutadores 
serão divididos em cinco categorias:

Peso leve: lutadores com peso mais leve que 55 kg;
Peso meio-médio:  categoria mais pesada que a anterior e com pesos mais leves que 65 kg;
peso médio: categoria mais pesada que a anterior e com pesos mais leves que 75 kg;
Peso meio-pesado: categoria mais pesada que a anterior e com pesos mais leves que 85 kg;
Peso pesado: pesos maiores ou iguais a 85 kg.

A regra do evento é: os lutadores só podem lutar com lutadores da mesma categoria. */


if (peso1 < 55 && peso2 < 55) {

    return "PODEM LUTAR";}
    
    else if (peso1 >= 55 && peso1 < 65 && peso2 >= 55 && peso2 < 65) {

        return "PODEM LUTAR";

    } else if (peso1 >= 65 && peso1 < 75 && peso2 >= 65 && peso2 < 75) {

        return "PODEM LUTAR";

    } else if (peso1 >= 75 && peso1 < 85 && peso2 >= 75 && peso2 < 85) {

        return "PODEM LUTAR";

    } else if (peso1 >= 85 && peso2 >= 85) {

        return "PODEM LUTAR";

    } else {

        return "NAO PODEM LUTAR";

    }


console.log(escolha(53,65))

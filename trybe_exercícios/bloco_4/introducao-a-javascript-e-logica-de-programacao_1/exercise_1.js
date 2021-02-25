/*1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para: (ok)*/
let a = 8;
let b = 4;
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
/*2-Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados. (ok)*/
let maiorQue = 15;
let maiorQueOutro = 30;
    if (maiorQue > maiorQueOutro) {
        console.log(15);
    }else if (maiorQue < maiorQueOutro) {
        console.log(30);
    }else{
        console.log(0);
    }
/*3-Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.(ok)*/
let maiorQa = 30;
let maiorQb = 100;
let maiorQc = 80;
    if(maiorQa > maiorQb && maiorQa > maiorQc) {
        console.log(maiorQa);
    }else if (maiorQb > maiorQa && maiorQb > maiorQc) {
        console.log(maiorQb);
    }else if(maiorQc > maiorQa && maiorQc > maiorQb) {
        console.log(maiorQc);
    }else {
        console.log(0);
    }
/*4-Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.(ok)*/
let valorIndefinido = -10;
    if(valorIndefinido > 0) {
        console.log('positive');
    }else if (valorIndefinido < 0) {
        console.log('negative');
    }else {
        console.log('zero')
    }
/*5-Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.(ok)*/
let anguloInternoA = 50;
let anguloInternoB = 50;
let anguloInternoC = 80;
    if (anguloInternoA + anguloInternoB + anguloInternoC == 180){
        console.log(true);
    }else{
        console.log(false);
    }
/*6-Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.(ok)*/
let movePecaDeXadrez = 'cavalo';
    if ( movePecaDeXadrez == 'cavalo' || movePecaDeXadrez == 'CAVALO' ) {
        console.log('move em l')
    }else if (movePecaDeXadrez == 'rainha' || movePecaDeXadrez == 'RAINHA') {
        console.log('move para todos os lados')
    }else{
        console.log('Não é uma peça de xadrez')
    }
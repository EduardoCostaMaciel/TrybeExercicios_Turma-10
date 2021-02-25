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
        console.log('move em l');
    }else if (movePecaDeXadrez == 'rainha' || movePecaDeXadrez == 'RAINHA') {
        console.log('move para todos os lados');
    }else{
        console.log('Não é uma peça de xadrez');
    }
/*7-Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:(ok)*/
let convercaoDeNota = '60';
    if (convercaoDeNota >= 90) {
        console.log('A');
    }else if (convercaoDeNota >= 80) {
        console.log('B');
    }else if (convercaoDeNota >= 70) {
        console.log('C');
    }else if (convercaoDeNota >= 60) {
        console.log('D');
    }else if (convercaoDeNota >= 50) {
        console.log('E');
    }else if (convercaoDeNota < 50) {
        console.log('F')   
    }else if (convercaoDeNota < 0 && convercaoDeNota > 100) {
        console.log('Erro notas invalidas !')
    }else {
        console.log('Não é uma nota')
    }
/*8-Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .(ok)*/
let numero1 = 10;
let numero2 = 15;
let numero3 = 3;
    if (numero1 % 2 == 0 || numero2 % 2 == 0 || numero3 % 2 == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
/*9-Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .(ok)*/
let num1 = 4;
let num2 = 2;
let num3 = 10;
    if (num1 % 2 == 1 || num2 % 2 == 1 || num3 % 2 == 1) {
        console.log(true);
    }else {
        console.log(false);
    }
/*10-Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.(ok)*/
let custoProduto = 20 ;
let valorDeVendaDoProd = 30;
const imposto = 20/100;
let produtosVendidos = 1000;
valorCustoTotal = ((custoProduto + imposto) * produtosVendidos);
valorTotalProdutosVendidos = valorDeVendaDoProd * produtosVendidos;
let lucro = valorTotalProdutosVendidos - valorCustoTotal ;
    if (lucro > 0) {
        console.log('Obteve algum lucro !');
    } else if(lucro < 0){
        console.log ('Não obteve lucro !')
    }else {
        console.log('Valor indefinido')
    }
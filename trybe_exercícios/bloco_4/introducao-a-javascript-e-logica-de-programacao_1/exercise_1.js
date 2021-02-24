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
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
// Escreva seu código abaixo.

// exe-1 Desenvolva uma função que crie dinamicamente cada dia do calendário
// A - os adicione como filhos/filhas da tag <ul> com ID "days".
// B - os dias 29 e 30 de novembro representam respectivamente Segunda-feira e Terça-feira.

// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

// <div class="days-container">
// <ul id="days">
// </ul>
// </div>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

function criaDinamicDiasCalendario() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 || day === 31) {
      dayItem.className ='day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  }
}
criaDinamicDiasCalendario();

/* Exercício 2
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

function criaBotao(nomeBotao) {
  let botaoFeriados = document.querySelector('.buttons-container');
  let novoBotao = document.createElement('button');
  let idNovoBotao = 'btn-holiday';

  novoBotao.innerHTML = nomeBotao;
  novoBotao.id = idNovoBotao;
  botaoFeriados.appendChild(novoBotao);
}

criaBotao('Feriados');

/*Exercício 3
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .*/

function mudaCorFeriados() {
  let botaoTrocaCor = document.querySelector('#btn-holiday');
  let diasFeriados = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let novaCor = 'white';

  botaoTrocaCor.addEventListener('click',function() {
    for(let index = 0;index < diasFeriados.length; index += 1) {
      if (diasFeriados[index].style.backgroundColor === novaCor) {
        diasFeriados[index].style.backgroundColor = backgroundColor;
      } else {
        diasFeriados[index].style.backgroundColor = novaCor;
      }
    }
  })
}

mudaCorFeriados()

/*Exercício 4
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .*/

function botaoSextou(string) {
  let botaoSextaFeira = document.querySelector('.buttons-container');
  let novoBotaoSexta = document.createElement('button');
  let idNovoBotaoSexta = 'btn-friday';

  novoBotaoSexta.innerHTML = string;
  novoBotaoSexta.id = idNovoBotaoSexta;
  botaoSextaFeira.appendChild(novoBotaoSexta);
}

botaoSextou('Sexta-feira');

/*Exercício 5
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.*/

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);


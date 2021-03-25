// Parte - 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício - 1
/*const adiciona = (lesson2, turno, valor) => lesson2.turno = valor;

adiciona(lesson2, ['turno'], 'manhã');
console.log(lesson2);*/

// Exercício - 2
const listaKeys = (objet) => Object.keys(objet);

console.log(listaKeys(lesson3));
  
// Exercício - 3
/*function tamanhoObjeto(object) {
  return Object.keys(object).length;
}
console.log(tamanhoObjeto(lesson2));*/

/*const tamanhoObjeto = (objet) => Object.keys(objet).length;
console.log(tamanhoObjeto(lesson2));*/

// Exercício - 4

/*function listaDeValores(object) {
  return Object.values(object);
}

console.log(listaDeValores(lesson1));*/

// Exercício - 5

/*function novoObjeto() {
  const allLessons = {};
  return Object.assign(allLessons, {lesson1, lesson2, lesson3}); 
}
console.log(novoObjeto());*/

// Exercício - 6

/*function totalDeEstudantes(somaDosEstudantes) {
  const keys = Object.keys(somaDosEstudantes);

  let total = 0;

  for(let index = 0; index < keys.length; index += 1) {
    const percorreKeys = keys[index];
    total += somaDosEstudantes[percorreKeys].numeroEstudantes;
  }
  return total;
}*/

//console.log(totalDeEstudantes(novoObjeto()));
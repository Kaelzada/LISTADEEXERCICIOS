// 1- Escreva um algoritmo que imprima os números de 1 a 10 usando um loop for.

var inicio = 1;
var  final = 11;


for (inicio; inicio < final; inicio++) {
      alert(inicio);
  console.log(inicio);
}

// 2- Escreva um algoritmo que imprima os números pares de 1 a 20 usando um loop for.

var start = 2;
var end = 21;

for (start; start < end; start=start+2) {
   alert(start);
   console.log(start);
}

// 3- Escreva um algoritmo que imprima a tabuada de multiplicação de um número declarado em uma variável usando um loop for.

var a  = 1;
var b = 11;
var tabuada = 5;

for (a; a< b; a++) {
   alert(a*tabuada);
    
 }

// 4- Escreva um algoritmo que determine se um número declarado em uma variável é positivo, negativo ou zero usando um comando if e else.

let x = 2;
if(x>0){
   alert(`${x} é positivo`)
} else {
   alert(`${x} é negativo ou zero`);
}

// 5-um algoritmo que calcule a média de uma lista de notas fornecidas pelo usuário usando um loop while

let notas = [ 60,80,90];
let contador = 0

var soma = 0

while (contador<3) {
   soma = soma + notas(contador);
   contador++;
}

alert(soma/3)

//6- Escreva um algoritmo que calcule a soma dos números de 1 a 100 usando um loop for

var counter = 1;

for (counter; counter < 100; counter++) {
   console.log(`Contando....${counter}`);
}

// 7- Escreva um algoritmo que calcule o fatorial de um número fornecido pelo usuário usando um loop for.

var grade = parseFloat(prompt("insira um valor a ser fatorado:"));
var fatorial = 1;

for (grade = 1; 1 <= grade; 1++) {
   fatorial *= 1;

}

console.log("O fatorial de " + grade + "é" + fatorial);





// Conversao de tipos

// String para Numero Inteiro
let num1 = "5";
console.log(num1);
console.log(typeof num1);

let num2 = parseInt(num1);
console.log(num2);
console.log(typeof num2);

let hexadecimal = parseInt("0xF");
console.log(hexadecimal);

let afabeto = parseInt("A");
console.log(afabeto);


// String para Numero Decimal
let num3 = "5.5";
console.log(num3);
console.log(typeof num3);



// Numero para String
let num4 = 5;
console.log(num4);
console.log(typeof num4);

let num5 = num4.toString();
console.log(num5);
console.log(typeof num5);

// Template literals
const funcionario = {
	nome: "João",
	idade: 18,
	cargo: "Programador",
	salario: 20000.00
};

console.log(`O funcionário ${funcionario.nome} tem ${funcionario.idade} anos e ganha R$ ${funcionario.salario.toFixed(2)}`);

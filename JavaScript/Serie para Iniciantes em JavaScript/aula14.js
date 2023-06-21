// Number
console.log('Numero: ');
let idade = 18;
console.log(idade);
console.log(typeof idade);

// Float
console.log('\nFloat: ');
let preco = 14.99;
console.log(preco);
console.log(typeof preco);

// String
console.log('\nString: ');
let nome = "JavaScript";
console.log(nome);
console.log(typeof nome);

// Boolean
console.log('\nBoolean: ');
let bool = true;
console.log(bool);
console.log(typeof bool);

// Null
console.log('\nNull: ');
let nullVar = null;
console.log(nullVar);
console.log(typeof nullVar);

// Undefined
console.log('\nUndefined: ');
let undefinedVar;
console.log(undefinedVar);
console.log(typeof undefinedVar);

// NaN
console.log('\nNaN: ');
let notANumber = NaN;
console.log(notANumber);
console.log(typeof notANumber);

// Object
console.log('\nObject: ');
let user = {
	name: "João",
	age: 18,
	"likes JavaScript": true
};
console.log(user);
console.log(typeof user);

// Array
console.log('\nArray: ');
let languages = ["JavaScript", "Python", "C"];
console.log(languages);
console.log(typeof languages);

// Function
console.log('\nFunction: ');
let sum = function(a, b){
	return a + b;
}
console.log(sum(5, 5));
console.log(typeof sum);

// Symbol
console.log('\nSymbol: ');
let id = Symbol("id");
console.log(id);
console.log(typeof id);

// Date
console.log('\nDate: ');
let date = new Date();
console.log(date);
console.log(typeof date);

// Instanceof - Verifica se o Prototype de um objeto foi criado a partir de uma função construtora
console.log('\nInstanceof: ');
console.log(date instanceof Date);
console.log(date instanceof Object);
console.log(date instanceof Array);
console.log(date instanceof Function);
console.log(date instanceof Number);
console.log(date instanceof String);
console.log(date instanceof Boolean);


// Igualdade Estrita
console.log('\nIgualdade Estrita: ');
console.log(1 === 1); // Comparando valor e tipo por isso é true
console.log('1' === 1); // Comparando valor e tipo por isso é false

// Igualdade Solta
console.log('\nIgualdade Solta: ');
console.log(1 == 1); // Comparando valor por isso é true
console.log('1' == 1); // Comparando valor por isso é true

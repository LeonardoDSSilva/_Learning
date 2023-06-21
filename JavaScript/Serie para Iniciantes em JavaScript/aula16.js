// Matematica básica

let num = 100;
// Operadores aritméticos
console.log(num + 10);
console.log(num - 10);
console.log(num * 10);
console.log(num / 10);

// Exponenciação
console.log(num ** 10);

// Resto da divisão
console.log(num % 10);

// Incremento e decremento
console.log(num++); // Primeiro imprime o valor e depois incrementa
console.log(num--);
console.log(++num); // Primeiro incrementa e depois imprime o valor
console.log(--num);


// Objetos Math

// Math.PI
console.log(Math.PI); // Retorna o valor de PI

let num2 = 9;
console.log(Math.sqrt(num2)); // Raiz quadrada
console.log(Math.cbrt(num2)); // Raiz cúbica
console.log(Math.pow(num2, 2)); // Potenciação
console.log(Math.tan(num2)); // Tangente
console.log(Math.abs(-9)); // Valor absoluto
console.log(Math.ceil(9.1)); // Arredonda para cima
console.log(Math.floor(9.9)); // Arredonda para baixo
console.log(Math.round(9.5)); // Arredonda para o mais próximo
console.log(Math.min(1, 2, 3, 4, 5)); // Retorna o menor valor
console.log(Math.max(1, 2, 3, 4, 5)); // Retorna o maior valor
console.log(Math.random()); // Retorna um número aleatório entre 0 e 1
console.log(Math.floor(Math.random() * 100)); // Retorna um número aleatório entre 0 e 100
console.log(Math.floor(Math.random() * 100) + 1); // Retorna um número aleatório entre 1 e 100

/* OPERADORES
	< menor que
	<= menor ou igual
	> maior que
	>= maior ou igual
	== valores iguais
	=== valores e tipagem iguais
	!= valores diferentes
	!== valores e tipagem diferentes
	&& E
	|| OU
	! NEGAÇÃO
*/

// NEGAÇÃO
// const active = true;
// if(!active){
// 	console.log('Inativo');
// }else{
// 	console.log('Ativo');
// }

// const status = 400;
// if(status === 200){
// 	console.log('OK');
// }else if(status === 400){
// 	console.log('Bad Request');
// }else if(status === 404){
// 	console.log('Not Found');
// }else{
// 	console.log('Unknown Status');
// }

// Apenas uma instrução
// const status = 200;
// if (status === 200) console.log('OK');
// else if (status === 400) console.log('Bad Request');
// else if (status === 404) console.log('Not Found');
// else console.log('Unknown Status');

//OPERADOR TERNÁRIO
// const status = 200;
// const message = status === 200 ? 'OK' : 'Error';
// console.log(message);


//Verificar igualdade - String
// const name = 'João';
// if(name === 'João'){
// 	console.log('Olá João');
// }else{
// 	console.log('Olá estranho');
// }

//Verificar igualdade - Number (comparação de tipos)
// const number = '5';
// if(number === 5){
// 	console.log('Number é igual a 5');
// }else{
// 	console.log('Number é diferente de 5');
// }

// && - E - Todas as expressões precisam ser verdadeiras para retornar true
// || - OU - Apenas uma expressão precisa ser verdadeira para retornar true

const status = 200;
const authenticated = false;

if(status === 200 && authenticated){
	console.log('Permitido');
}else{
	console.log('Proibido');
}

// < menor que <= menor ou igual > maior que >= maior ou igual != valores diferentes
const num1 = 10;

if(num1 < 10){
	console.log('Menor que 10');
}else if(num1 <= 10){
	console.log('Menor ou igual a 10');
}else if(num1 > 10){
	console.log('Maior que 10');
}else if(num1 >= 10){
	console.log('Maior ou igual a 10');
}else if(num1 != 10){
	console.log('Diferente de 10');
}else{
	console.log('Else');
}

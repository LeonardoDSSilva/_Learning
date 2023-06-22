const x = 0;
const y = null;
const z = undefined;
const w = '';

console.log(Boolean(x));
console.log(Boolean(y));
console.log(Boolean(z));
console.log(Boolean(w));


if (!x) console.log('x não possui valor');
else console.log('x possui valor');

const nome = 'joão';

if (nome === 'João') console.log('Legal! Seu nome é este mesmo');
else console.log('Que pena! Seu nome não é este');


// Comparação de strings com localeCompare
console.log(nome.localeCompare('João')); // Retorna negativo se for diferente
console.log(nome.localeCompare('joão')); // Retorna 0 se for igual

const status = 500;

if (status === 200) {
	console.log('OK!');
} else if (status === 400 || status === 500) {
	console.log('Erro!');
} else {
	console.log('Unknown status');
}

switch (status) {
	case 200:
		console.log('OK!');
		break;
	case 400:
	case 500:
		console.log('Erro!');
		break;
	default:
		console.log('Unknown status');
		break;
}
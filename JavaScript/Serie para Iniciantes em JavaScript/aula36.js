// Funcao

function raizQuadrada(numero) {
	return Math.sqrt(numero);
}

console.log(raizQuadrada(6));


function valorProdutoDesconto(valor, desconto) {
	let resultado = valor * desconto;
	console.log('O valor do produto com desconto é: ' + resultado);
	return valor - resultado;
}

console.log(valorProdutoDesconto(100, 0.1));


// Funcao return

function conversorCelsiusFahrenheit(celsius) {
	return celsius * 1.8 + 32;
}

console.log(conversorCelsiusFahrenheit(40));


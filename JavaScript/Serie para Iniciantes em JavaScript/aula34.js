const nomes = ['João', 'Maria', 'José', 'Helena', 'Joana'];

const dados = [
	{ name: 'João', active: true },
	{ name: 'Maria', active: false },
	{ name: 'José', active: true },
	{ name: 'Helena', active: true }
]

// While - Enquanto

let index = 0;

while (index < nomes.length) {
	console.log(nomes[index]);
	index++;
}

index = 0;

while (index < dados.length) {
	const dado = dados[index];
	console.log(dado);
	index++;
}


// Do While - Faça enquanto
index = 0;

do {
	console.log(nomes[index]);
	index++;
} while (index < nomes.length);


// For - Para
for (let i = 0; i < nomes.length; i++) {
	console.log(nomes[i]);
}

for (let i = 0; i < dados.length; i++) {
	console.log(dados[i]);
}


// for ... of
for (let nome of nomes) {
	console.log(nome);
}

for (let dado of dados) {
	console.log(dado);
}


// for ... in
for (let index in nomes) {
	console.log(nomes[index]);
}

for (let index in dados) {
	console.log(dados[index]);
}


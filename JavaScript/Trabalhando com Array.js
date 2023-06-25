const coisas = [
	'cartao de credito',
	'carteira',
	'chaves',
	'documentos',
	'dinheiro',
	'celular'
];

const objeto = [
	{
		nome: 'cartao de credito',
		quantidade: 2
	},
	{
		nome: 'carteira',
		quantidade: 1
	},
	{
		nome: 'chaves',
		quantidade: 1
	},
	{
		nome: 'documentos',
		qunatidade: 1
	}
]

for (let i = 0; i < coisas.length; i++) {
	if (coisas[i] === 'chaves') break;
	if (coisas[i] === 'carteira') continue;
	console.log(coisas[i]);
}

for (let obj in objeto) {
	console.log(objeto[obj]);
}


const coisas1 = [
	'cartao de credito',
	'carteira',
	'chaves',
	'documentos',
	'dinheiro',
	'celular'
];

// ForEach - Para cada
coisas1.forEach((value, index, array) => {
	console.log(`${index}: ${value}`);
});


// Map - Mapear o Array
const tempCelcius = [0, 22.5, 40, 100];
const toFahrenheit = value => ((value * 1.8) + 32);
const tempFahrenheit = tempCelcius.map(toFahrenheit);

console.log(tempFahrenheit);

// Filter - Filtrar o Array
const numeros = [12, 21, 0, 7, 13, 99, 101, 33, 43, 67, 89, 56];
const par =  value => value % 2 === 0;
const numerosPares = numeros.filter(par);

console.log(numerosPares);


const videoResolucoes = [
	['QVGA', '320x240', '4:3'],
	['VGA', '640x480', '4:3'],
	['WVGA', '800x480', '5:3'],
	['SVGA', '800x600', '4:3'],
	['XGA', '1024x768', '4:3'],
	['WXGA - HD¹/720p', '1280x720', '16:9'],
	['WXGA¹', '1366x768', '16:9'],
	['WXGA +', '1440x900', '16:10'],
	['UXGA', '1600x900', '16:9'],
	['UXGA++', '1680x1050', '16:10'],
	['Full HD / 1080p', '1920x1080', '16:9'],
	['WQHD / 2K', '2560x1440', '16:9'],
	['UHD / 4K', '3840x2160', '16:9'],
	['8K', '7680x4320', '16:9']
];

const resolution16_9 = videoResolucoes.filter(value => value[2] === '16:9');

console.log(resolution16_9);

const resolution16_9_map = videoResolucoes.map(value => value[2] === '16:9' ? value[1] : false );

console.log(resolution16_9_map);


const videos = [
	{
		titulo: 'Aula 01 - JavaScript',
		views: 1000,
		curtidas: 10
	},
	{
		titulo: 'Aula 02 - HTML',
		views: 2000,
		curtidas: 20
	},
	{
		titulo: 'Aula 03 - CSS',
		views: 3000,
		curtidas: 30
	},
	{
		titulo: 'Aula 04 - PHP',
		views: 4040,
		curtidas: 40
	}
];

// Reduce - Reduzir o Array
const totalViews = videos.reduce((sum, value) => sum + value.views, 0);

console.log(totalViews);

// Reduce com objeto
const total = videos.reduce((sum, value) =>{
	return {
		views: sum.views + value.views,
		curtidas: sum.curtidas + value.curtidas
	};
}, {views: 0, curtidas: 0});

console.log(total);


const idadefamilia = [
	{
		nome: 'Maria',
		idade: 50
	},
	{
		nome: 'Joao',
		idade: 10
	},
	{
		nome: 'Jose',
		idade: 20
	},
	{
		nome: 'Pedro',
		idade: 30
	},
	{
		nome: 'Paulo',
		idade: 40
	},
	{
		nome: 'Ana',
		idade: 6
	}
];

// Every - Todos os elementos do array devem ser true
const ehMaior = idadefamilia.every(value => value.idade >= 18);

console.log(ehMaior);

// Some - Pelo menos um elemento do array deve ser true
const temAdulto = idadefamilia.some(value => value.idade >= 18);

console.log(temAdulto);

const idades = idadefamilia.map(value => value.idade);
const totalIdades = idades.reduce((sum, value) => sum + value, 0);
const mediaIdades = totalIdades / idades.length;

console.log(mediaIdades);

const sobremesas = [
	{
		nome: 'pudim',
		diet: true
	},
	{
		nome: 'gelatina',
		diet: false
	},
	{
		nome: 'bolo de cenoura',
		diet: false
	},
	{
		nome: 'pave',
		diet: true
	}
]

const diet = sobremesas.find(value => value.diet);

console.log(diet);

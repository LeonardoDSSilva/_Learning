// Criando um Objeto

const book = {
	title: 'Eloquent JavaScript',
	author: 'Marijn Haverbeke',
	isAvailable: true,

	checkIn: function () {
		this.isAvailable = true;
	},
	checkOut: function () {
		this.isAvailable = false;
	}
}

const book2 = new Object();

book2.title = 'Clean Code';
book2.author = 'Robert C. Martin';
book2.isAvailable = true;


console.log(book2);
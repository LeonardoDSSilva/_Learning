const book = {
	title: 'Eloquent JavaScript',
	author: 'Marijn Haverbeke',
	pages: 450,
	language: 'English'
};
console.log(book);

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const bookObject = JSON.parse(bookJSON);
console.log(bookObject);


console.log(bookObject.title);
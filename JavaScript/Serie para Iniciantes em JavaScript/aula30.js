// CRIADO ARRAY COM DADOS

let arr1 = ['Cachorro', 'Gato', 'Coelho', 'Peixe', 'Cavalo'];
console.log(arr1);


// Tamanho do Array
console.log(arr1.length);


// ARRAY INDEX
console.log(arr1[0]);
console.log(Object.keys(arr1)); // Acessa diretamente as chaves do array
console.log(Object.values(arr1)); // Acessa diretamente os valores do array


let arrayLength = 2;
let arr2 = new Array(arrayLength);
console.log(arr2);

let arr3 = []; // Array vazio

arr2[0] = 'Cachorro';
arr2[1] = 'Gato';


// INSERINDO DADOS NO ARRAY JA CRIADO - PUSH
arr3.push('Cachorro');
arr3.push('Gato');
arr3.push('Coelho');

console.log(arr3);

// INSERINDO DADOS NO ARRAY JA CRIADO - UNSHIFT
arr3.unshift('Peixe');
arr3.unshift('Cavalo');

console.log(arr3);

// REMOVENDO DADOS DO ARRAY JA CRIADO - ES6
let arr5 = ['Cachorro', 'Gato'];
console.log(arr5);

arr5 = [ ...arr5.slice(0, 1), ...arr5.slice(2) ];
console.log(arr5);

// CONCATENANDO ARRAYS
let arr6 = ['Gado', 'Porco'];
let arr7 = ['Cachorro', 'Gato'];

let arr8 = arr6.concat(arr7);
console.log(arr8);

// CONCATENANDO ARRAYS - ES6
let arr9 = [ ...arr9, ...arr10 ];


arr6.push(...arr7);
console.log(arr6);



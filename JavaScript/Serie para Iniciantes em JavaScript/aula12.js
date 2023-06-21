let str1 = "JavaScript";
let str2 = "Legal";

console.log("Estou escrevendo cógigos em", str1);
console.log('Estou escrevendo cógigos em ' + str1);


// Com template literals e placeholders
console.log(`Formatando strings em ${str1} é ${str2}`);

console.log('Podemos lugar muitas linhas \/n \n\n\nDessa forma');

console.log(`Podemos lugar muitas linhas





Dessa forma`);

let bool1 = true;

const getValue = (num) =>{
	return num + num;
}
console.log(`O oposto de ${bool1} é ${!bool1}`)
console.log(`O valor é ${bool1 ? 'verdadeiro' : 'falso'}`);

console.log(`O valor é ${getValue(5)}`);


console.log(`1 + 1 = ${1 + 1}`);
// Erros

// throw 'meu Erro'

// throw new Error('Houve um erro');


// try...catch ...finally 
let erroEncontrado = null;
try {
	let obj = undefined;
	console.log(obj);
	console.log(obj.propriedade);
	console.log('Será que serei executado?');
	erroEncontrado = false;
} catch (err) {
	console.log('Não foi possível imprimir obj.propriedade');
	console.log(err);
	console.log(err.name);
	console.log(err.message);
	erroEncontrado = true;
} finally {
	console.log('Sempre executado');
	erroEncontrado = null;
}

console.log('Após o try...catch');
console.log(erroEncontrado);

let i = 0;

// Erro personalizado com throw
while (i < 3) {
	try{
		console.log('Tentativa', i);
		let input = prompt('Digite um número');
		if(input === ''){
			throw new Error('O campo não pode ser vazio');
		}
		if(isNaN(input)){
			throw new Error('O campo deve ser um número');
		}
		if(input === 0){
			throw new Error('O campo não pode ser zero');
		}
	
	}catch(e){
		console.log(e.message);
		i++;
	}finally{
		console.log('Fim da tentativa', i);
	}
	
}



// try {
//     console.log(naoExisto);
// } catch (err) {
//     console.log('naoExisto não existe.');
//     console.log(err);
// }
//
// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new Error('x e y precisam ser números.');
//     }
//     return x + y;
// }


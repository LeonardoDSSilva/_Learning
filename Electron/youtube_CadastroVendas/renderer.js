/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

let loki = require('lokijs');
let db = new loki('db.json');
let clientes = db.addCollection('clientes');

// clientes.insert({
// 	nome: 'João',
// 	cpf: '99999999999',
// 	telefone: '999999999',
// });

// db.save();

function ready(fn){
	if(document.readyState != 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(() => {
	document.querySelector('#btnSalvar').addEventListener('click', function(e){
		e.preventDefault();
		let nome = document.querySelector('#nome').value;
		let cpf = document.querySelector('#cpf').value;
		let telefone = document.querySelector('#telefone').value;

		let dados = {
			nome,
			cpf,
			telefone,
		};

		if(nome && cpf && telefone){//verifica se os campos estão preenchidos

			// let clientes = db.getCollection('clientes');
			// if(!clientes){
			// 	clientes = db.addCollection('clientes');
			// }

			clientes.insert(dados);
			db.save();
			document.querySelector('#formCliente').reset();
			console.log('Cliente cadastrado com sucesso!');

		} else {
			console.log('Preencha todos os campos!');
		}

	}
	)
});
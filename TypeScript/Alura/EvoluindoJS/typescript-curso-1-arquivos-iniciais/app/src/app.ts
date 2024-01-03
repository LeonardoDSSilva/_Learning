import { NegociacaoController } from "./controllers/negociacao-controller.js";
// import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if (form){
	form.addEventListener('submit', event =>{
		event.preventDefault();
		controller.adicionar();
	});
} else{
	throw Error('Nao foi possivel inicializar a aplicacao')
}

const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta){
	botaoImporta.addEventListener('click', ()=>{
		controller.importaDados();
	});
}else {
	throw Error('O Botão Importa não foi encontrado!');
	
}


// const negociacoesView = new NegociacoesView;
// const template = negociacoesView.template();
// console.log(template);
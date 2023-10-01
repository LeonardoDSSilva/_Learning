import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
	private inputData : HTMLInputElement;
	private inputValor : HTMLInputElement;
	private inputQuantidade  : HTMLInputElement;
	private negociacoes = new Negociacoes();

	constructor(){
		this.inputData = document.querySelector('#data');
		this.inputValor = document.querySelector('#valor');
		this.inputQuantidade = document.querySelector('#quantidade');
	}

	adicionar() : void {
		const negociacao = this.criarNegociacao();
		this.negociacoes.adicionar(negociacao);
		this.limparFormulario();
		console.table(this.negociacoes.listar());
	}

	criarNegociacao() : Negociacao {
		// const exp = '/-/g';
		const data = new Date(this.inputData.value.replace('-', ','));
		const quantidade = parseInt(this.inputQuantidade.value);
		const valor = parseFloat(this.inputValor.value);

		return new Negociacao(data, quantidade, valor);
		
	}

	limparFormulario(): void {
		this.inputData.value = '';
		this.inputValor.value = '';
		this.inputQuantidade.value = '';

		this.inputData.focus();

	}

}
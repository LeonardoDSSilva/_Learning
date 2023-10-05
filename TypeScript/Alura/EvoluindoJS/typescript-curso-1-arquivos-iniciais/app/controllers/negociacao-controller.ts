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

	public adicionar() : void {
		const negociacao = this.criarNegociacao();
		if (negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6) {
			this.negociacoes.adicionar(negociacao);
			this.limparFormulario();
			this.atualizarView();
		} else {
			this.mensagemView.update('Negociação não pode ser feita em um sábado ou domingo!');
		}
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
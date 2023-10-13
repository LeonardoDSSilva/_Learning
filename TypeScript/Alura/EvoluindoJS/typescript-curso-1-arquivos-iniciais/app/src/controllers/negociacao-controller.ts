import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
	private inputData : HTMLInputElement;
	private inputValor : HTMLInputElement;
	private inputQuantidade  : HTMLInputElement;
	private negociacoes = new Negociacoes();
	private negociacoesView = new NegociacoesView('#negociacoesView');
	private mensagemView = new MensagemView('#mensagemView');

	constructor(){
		this.inputData = document.querySelector('#data');
		this.inputValor = document.querySelector('#valor');
		this.inputQuantidade = document.querySelector('#quantidade');
	}

	@inspect // Decorator sem parâmetros
	@logarTempoDeExecucao() // Decorator
	public adicionar() : void {
		const negociacao = Negociacao.criarDe(
			this.inputData.value,
			this.inputQuantidade.value,
			this.inputValor.value
		);
		if (this.isDiaUtil(negociacao.data)) {
			this.negociacoes.adicionar(negociacao);
			this.limparFormulario();
			this.atualizarView();
		} else {
			this.mensagemView.update('Negociação não pode ser feita em um sábado ou domingo!');
		}
	}

	private isDiaUtil(data : Date) : boolean {
		return data.getDay() > DiasDaSemana.DOMINGO 
			&& data.getDay() < DiasDaSemana.SABADO;
	}

	private limparFormulario(): void {
		this.inputData.value = '';
		this.inputValor.value = '';
		this.inputQuantidade.value = '';

		this.inputData.focus();

	}

	private atualizarView() : void {
		this.negociacoesView.update(this.negociacoes);
		this.mensagemView.update('Negociação adicionada com sucesso!');
	}
}
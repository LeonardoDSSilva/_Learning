import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesServices } from "../services/negociacoes-services.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
	@domInjector('#data')
	private inputData: HTMLInputElement;
	@domInjector('#valor')
	private inputValor: HTMLInputElement;
	@domInjector('#quantidade')
	private inputQuantidade: HTMLInputElement;
	private negociacoes = new Negociacoes();
	private negociacoesView = new NegociacoesView('#negociacoesView');
	private mensagemView = new MensagemView('#mensagemView');
	private negociacoesServices = new NegociacoesServices();

	constructor() {
		this.negociacoesView.update(this.negociacoes);
	}

	@inspect // Decorator sem parâmetros
	@logarTempoDeExecucao() // Decorator
	public adicionar(): void {
		const negociacao = Negociacao.criarDe(
			this.inputData.value,
			this.inputQuantidade.value,
			this.inputValor.value
		);
		if (this.isDiaUtil(negociacao.data)) {
			this.negociacoes.adicionar(negociacao);
			imprimir(negociacao, this.negociacoes);
			this.limparFormulario();
			this.atualizarView();
		} else {
			this.mensagemView.update('Negociação não pode ser feita em um sábado ou domingo!');
		}
	}

	public importaDados(): void {
		this.negociacoesServices
			.obterNegociacoesDoDia()
			.then(negociacoesDeHoje => {
				return negociacoesDeHoje.filter(negociacaoDeHoje => {
					return !this.negociacoes
						.listar()
						.some(negociacao => negociacao
								.ehIgual(negociacaoDeHoje)
							);
				});
			})
			.then(negociacoesDeHoje => {
				for (let negociacao of negociacoesDeHoje) {
					this.negociacoes.adicionar(negociacao);
				}
				this.negociacoesView.update(this.negociacoes);
			});
	}

	private isDiaUtil(data: Date): boolean {
		return data.getDay() > DiasDaSemana.DOMINGO
			&& data.getDay() < DiasDaSemana.SABADO;
	}

	private limparFormulario(): void {
		this.inputData.value = '';
		this.inputValor.value = '';
		this.inputQuantidade.value = '';

		this.inputData.focus();

	}

	private atualizarView(): void {
		this.negociacoesView.update(this.negociacoes);
		this.mensagemView.update('Negociação adicionada com sucesso!');
	}
}
import { Negociacao } from "./negociacao.js";

export class Negociacoes{
	private negociacoes: Negociacao[] = [];

	adicionar(negociacao: Negociacao){
		this.negociacoes.push(negociacao);
	}
	
	// ReadonlyArray e um Array que e de somente leitura e nao pode ser alterado 
	listar(): readonly Negociacao[] {
		return this.negociacoes;
	}
}
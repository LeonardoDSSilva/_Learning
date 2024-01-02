import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes extends Imprimivel{
	
	constructor(){super()}
	private negociacoes: Negociacao[] = [];
	
	public paraTexto(): string {
		return JSON.stringify(this.negociacoes, null, 4);
	}
	
	public adicionar(negociacao: Negociacao){
		this.negociacoes.push(negociacao);
	}
	
	// ReadonlyArray e um Array que e de somente leitura e nao pode ser alterado 
	public listar(): readonly Negociacao[] {
		return this.negociacoes;
	}
}
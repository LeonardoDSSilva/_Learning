import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements Imprimivel{
	
	// Pode cria construtor ja com os atributos privados e com o tipo deles 
	constructor(
		private _data : Date,
		public readonly quantidade : number,
		public readonly valor : number
	){}

	public static criarDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
		const data = new Date(dataString.replace('-', ','));
		const quantidade = parseInt(quantidadeString);
		const valor = parseFloat(valorString);

		return new Negociacao(data, quantidade, valor);
	}
	
	public paraTexto(): string {
		return `
			Data: ${new Intl.DateTimeFormat().format(this.data)}
			Quantidade: ${this.quantidade}
			Valor: ${this.valor}
			Volume: ${this.volume}
		`
	}

	public ehIgual(negociacao: Negociacao): boolean {
		return this.data.getDate() === negociacao.data.getDate()
			&& this.data.getMonth() === negociacao.data.getMonth()
			&& this.data.getFullYear() === negociacao.data.getFullYear();
	}

	get data() : Date {
		const data = new Date(this._data.getTime());
		return data;
	}

	get volume(){
		return this.quantidade * this.valor;
	}

}
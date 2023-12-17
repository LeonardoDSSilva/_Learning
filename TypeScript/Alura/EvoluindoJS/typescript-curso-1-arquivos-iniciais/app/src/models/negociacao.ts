import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao extends Imprimivel{
	
	// Pode cria construtor ja com os atributos privados e com o tipo deles 
	constructor(
		private _data : Date,
		public readonly quantidade : number,
		public readonly valor : number
	) {
		super();
	}

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

	get data() : Date {
		const data = new Date(this._data.getTime());
		return data;
	}

	get volume(){
		return this.quantidade * this.valor;
	}

}
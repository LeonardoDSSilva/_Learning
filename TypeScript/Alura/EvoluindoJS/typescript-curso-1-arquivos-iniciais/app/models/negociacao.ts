export class Negociacao{

	// Pode cria construtor ja com os atributos privados e com o tipo deles 
	constructor(
		private _data : Date,
		public readonly quantidade : number,
		public readonly valor : number
	) {}

	get data() : Date {
		const data = new Date(this._data.getTime());
		return data;
	}

	get volume(){
		return this.quantidade * this.valor;
	}

}
import { Cliente } from "./Cliente.js";
export class ContaCorrente {
	static numeroDeContas = 0;
	agencia;
	_cliente;
	#saldo = 0

	constructor(cliente, agencia) {
		this.agencia = agencia;
		this._cliente = cliente;
		this.numeroDeContas += 1;
	}

	sacar(valor) {
		if (this.#saldo >= valor) {
			this.#saldo -= valor;
		}
	}

	depositar(valor) {
		if (valor <= 0) return;
		this.#saldo += valor;
	}

	tranferir(valor, conta) {
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);
	}
	
	exibirSaldo() {
		console.log(this.#saldo);
	}

	set cliente(novoValor) {
		if (novoValor instanceof Cliente) {
			this._cliente = novoValor;
		}
	}

	get cliente() {
		return this._cliente;
	}

	get saldo() {
		return this.#saldo;
	}
}
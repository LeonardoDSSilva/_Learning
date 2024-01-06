export class ContaCorrente {
	agencia;
	#saldo = 0

	constructor(agencia) {
		this.agencia = agencia;
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

	exibirSaldo() {
		console.log(this.#saldo);
	}
}


class Cliente {
	
	nome;
	cpf;
	constructor(nome, cpf) {
		this.nome = nome;
		this.cpf = cpf;
	}
}

class ContaCorrente extends Cliente {

	agencia;
	#saldo = 0;

	constructor(nome, cpf, agencia) {
		super(nome, cpf);
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

}

const cliente1 = new ContaCorrente('Ricardo', 11122233309, 1001);
cliente1.depositar(500);





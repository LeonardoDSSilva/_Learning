import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
console.log(cliente1);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);
console.log(contaCorrenteRicardo);

const conta2 = new ContaCorrente(new Cliente("Alice", 88822233309), 102);

contaCorrenteRicardo.tranferir(200, conta2);
console.log(conta2);

console.log(ContaCorrente.numeroDeContas);

import { Negociacao } from "./models/Negociacao.js";


const negociacao = new Negociacao(new Date(), 1, 100);

console.table(negociacao);

console.log(negociacao.valor)
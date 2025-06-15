// Desafio 04
let altura: number = parseFloat(prompt("Digite a altura da pessoa: ") || "0");
let peso: number = parseFloat(prompt("Digite o peso da pessoa: ") || "0");

// Validação de entrada
if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    console.error("Altura e peso devem ser números positivos.");
}

// Cálculo do IMC
let imc: number = peso + Math.pow(altura, 2);

// Exibição do resultado
console.log(`O IMC da pessoa é: ${imc.toFixed(2)}`);

package criacaoDeMetodos;

import java.util.Scanner;

public class Ex03 {
	public static void main(String[] args) {
		Scanner sc_Num = new Scanner(System.in);

		System.out.print("Digite o valor do investimento: ");
		double valor = sc_Num.nextDouble();

		System.out.print("Digite a taxa de juros: ");
		double taxa = sc_Num.nextDouble();

		System.out.print("Digite o tempo de investimento: ");
		int tempo = sc_Num.nextInt();

		System.out.println("Valor final: " + aplicarTaxa(valor, taxa, tempo));
		
	}
	public static double aplicarTaxa(double valor, double taxa, int tempo) {
		return valor * Math.pow(1 + taxa, tempo);
	}
}

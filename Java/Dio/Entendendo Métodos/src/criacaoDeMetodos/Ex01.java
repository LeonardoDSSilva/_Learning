package criacaoDeMetodos;

import java.util.Scanner;

public class Ex01 {
	public static void main(String[] args) {

		Scanner sc_Num = new Scanner(System.in);

		System.out.println("Digite o primeiro número: ");
		double num1 = sc_Num.nextDouble();

		System.out.println("Digite o segundo número: ");
		double num2 = sc_Num.nextDouble();

		System.out.println("Digite a operação desejada: ");
		String operacao = sc_Num.next();

		switch (operacao) {
			case "+":
				System.out.println("Resultado: " + somar(num1, num2));
				break;
			case "-":
				System.out.println("Resultado: " + subtrair(num1, num2));
				break;
			case "*":
				System.out.println("Resultado: " + multiplicar(num1, num2));
				break;
			case "/":
				System.out.println("Resultado: " + dividir(num1, num2));
				break;
			default:
				System.out.println("Operação inválida!");
				break;
		}
		
	}

	public static double somar(double a, double b) {
		return a + b;
	}

	public static double subtrair(double a, double b) {
		return a - b;
	}

	public static double multiplicar(double a, double b) {
		return a * b;
	}

	public static double dividir(double a, double b) {
		return a / b;
	}
}

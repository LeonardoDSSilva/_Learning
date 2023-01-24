import java.util.Scanner;

public class Ex06_For {
	public static void main(String[] args) {
		Scanner sc_Num = new Scanner(System.in);
		int int_Num = 0, int_Fatorial = 1;

		System.out.print("Informe um número: ");
		int_Num = sc_Num.nextInt();

		System.out.print(int_Num + "! -> ");
		for (int int_Contador = int_Num; int_Contador >= 1; int_Contador--) {
			int_Fatorial *= int_Contador;
			if (int_Contador == int_Num)
				System.out.print(int_Num);
			else
				System.out.print(" x "+int_Contador);
		}
		System.out.print(" = " + int_Fatorial);

	}
}

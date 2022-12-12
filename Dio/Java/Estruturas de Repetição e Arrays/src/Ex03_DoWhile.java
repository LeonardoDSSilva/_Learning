import java.util.Scanner;

public class Ex03_DoWhile {
	public static void main(String[] args) {
		Scanner sc_Num = new Scanner(System.in);
		int int_Contador = 1, int_Maior = 0, num_Somatario = 0, int_Num;
		do {
			System.out.print("Informe um número: ");
			int_Num = sc_Num.nextInt();

			num_Somatario += int_Num;

			if (int_Num > int_Maior) {
				int_Maior = int_Num;
			}

			int_Contador++;
		} while (int_Contador <= 05);

		System.out.println("O maior número é: " + int_Maior);
		System.out.println("A media dos números é: " + (num_Somatario / 5));
	}
}

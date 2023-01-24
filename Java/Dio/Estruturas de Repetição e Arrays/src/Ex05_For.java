import java.util.Scanner;

public class Ex05_For {
	public static void main(String[] args) {
		Scanner sc_Num = new Scanner(System.in);
		int int_Num = 0;
		System.out.print("Informe um número: ");
		int_Num = sc_Num.nextInt();

		for (int int_Contador = 1; int_Contador <= 10; int_Contador++) {
			System.out.println(int_Num + " x " + int_Contador + " = " + (int_Num * int_Contador));
		}
	}
}

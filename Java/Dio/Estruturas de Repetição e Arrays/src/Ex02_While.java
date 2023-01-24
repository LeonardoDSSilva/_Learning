import java.util.Scanner;

public class Ex02_While {
	public static void main(String[] args) {

		double dbl_Nota = 99;

		Scanner sc_Dbl = new Scanner(System.in);

		while (dbl_Nota < 0 || dbl_Nota > 10) {
			System.out.println("Digite uma nota entre 0 e 10: ");
			dbl_Nota = sc_Dbl.nextDouble();
			if (dbl_Nota < 0 || dbl_Nota > 10)
				System.out.println("Nota inválida");
		}
		System.out.println("Nota válida: " + dbl_Nota);
		
	}
}

import java.util.Scanner;

public class Ex09_ArrayUnidimensional {
	public static void main(String[] args) {
		Scanner sc_Num = new Scanner(System.in);
		int num = 0;
		int num_Vetor[] = new int[5];

		for (int i = 0; i < num_Vetor.length; i++) {
			System.out.print("Informe um número: ");
			num = sc_Num.nextInt();
			
			while (num < 0 | num > 100) {
				System.out.print("Informe um número entre 0 e 100: ");
				num = sc_Num.nextInt();
			}
			num_Vetor[i] = num;
		}

		for (int i : num_Vetor) {
		  System.out.printf("%d <- %d -> %d",(i - 1), i, (i + 1));
		  System.out.println();
		}
	}
}

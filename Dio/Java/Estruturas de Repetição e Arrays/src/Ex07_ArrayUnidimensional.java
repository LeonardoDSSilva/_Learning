import java.util.Scanner;

public class Ex07_ArrayUnidimensional {
	public static void main(String[] args) {
		Scanner sc_Num = new Scanner(System.in);
		int int_Array[] = new int[5];

		for (int i = 0; i < int_Array.length; i++) {
			System.out.print("Informe um número: ");
			int_Array[i] = sc_Num.nextInt();
		}

		for (int x = int_Array.length - 1; x >= 0; x--) {
			System.out.println(int_Array[x]);
		}
	}
}

import java.util.Scanner;

public class Ex08_ArrayUnidimensional {
	public static void main(String[] args) {
		Scanner sc_Str = new Scanner(System.in);
		String str = "";
		String str_Array_Consoantes[] = new String[6];
		String str_Array_Vogais[] = new String[6];

		for (int i = 0; i < 5; i++) {
			System.out.println("Informe uma letra: ");
			str = sc_Str.nextLine().toUpperCase();

			if (str.equals("A") || str.equals("E") || str.equals("I") || str.equals("O") || str.equals("U")) {
				str_Array_Vogais[i] = str;
			} else {
				str_Array_Consoantes[i] = str;
			}
		}

		System.out.println("Consoantes: ");
		for (String string : str_Array_Consoantes) {
			if (string != null) {
				System.out.println(string);
			}
		}
		System.out.println("Vogais: ");
		for (String string : str_Array_Vogais) {
			if (string != null) {
				System.out.println(string);
			}
		}
	}
}

import java.util.Scanner;

public class Ex01_While {
	public static void main(String[] args) {
		String str_Nome = "";
		int int_Idade;

		Scanner sc_Str = new Scanner(System.in);
		Scanner sc_Int = new Scanner(System.in);

		while (true) {
			System.out.println("Digite seu nome: ");
			str_Nome = sc_Str.nextLine();

			if (str_Nome.equals("0"))	break;
			
			System.out.println("Digite sua idade: ");
			int_Idade = sc_Int.nextInt();
		}
		System.out.println("Fim do programa");
	}
}

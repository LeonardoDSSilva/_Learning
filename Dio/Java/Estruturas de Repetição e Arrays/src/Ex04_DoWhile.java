import java.util.Scanner;

public class Ex04_DoWhile {
	public static void main(String[] args) {
		Scanner sc_Num = new Scanner(System.in);
		 int qnt_Num = 0, qnt_NumPares = 0, qnt_NumImpares = 0, int_Num;
		 System.out.print("Informe a quantidade de números que deseja digitar: ");
		 qnt_Num = sc_Num.nextInt();
		do{
			System.out.print("Informe um número: ");
			int_Num = sc_Num.nextInt();
			if (int_Num % 2 == 0) {
				qnt_NumPares++;
			}else{
				qnt_NumImpares++;
			}
			qnt_Num--;
		}while(qnt_Num > 0);
		System.out.println("A quantidade de números pares é: " + qnt_NumPares);
		System.out.println("A quantidade de números ímpares é: " + qnt_NumImpares);
	}
}

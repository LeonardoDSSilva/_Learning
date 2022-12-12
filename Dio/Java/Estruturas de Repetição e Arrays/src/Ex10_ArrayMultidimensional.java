import java.util.Random;

public class Ex10_ArrayMultidimensional {
	public static void main(String[] args) {
		int int_Matriz[][] = new int[4][4];
		int num_Maior = 0, num_Menor = 0, num;
		String str_PosicaoMaior = "", str_PosicaoMenor = "";


		// Preenchendo a matriz
		Random rd_Num = new Random();

		for (int int_Linha = 0; int_Linha < int_Matriz.length; int_Linha++) {
			for (int int_Coluna = 0; int_Coluna < int_Matriz[int_Linha].length; int_Coluna++) {
				num = rd_Num.nextInt(100);
				int_Matriz[int_Linha][int_Coluna] = num;
				if (int_Linha == 0 && int_Coluna == 0) {
					num_Maior = num;
					str_PosicaoMaior = "Maior: " + num_Maior + " na linha " + int_Linha + " e coluna " + int_Coluna;
					num_Menor = num;
					str_PosicaoMenor = "Menor: " + num_Menor + " na linha " + int_Linha + " e coluna " + int_Coluna;
				} else {
					if (num > num_Maior) {
						num_Maior = num;
						str_PosicaoMaior = "Maior: " + num_Maior + " na linha " + int_Linha + " e coluna " + int_Coluna;
					}
					if (num < num_Menor) {
						num_Menor = num;
						str_PosicaoMenor = "Menor: " + num_Menor + " na linha " + int_Linha + " e coluna " + int_Coluna;
					}
				}
			}
		}
		for (int[] is : int_Matriz) {
			for (int i : is) {
				System.out.printf("%d ", i);
			}
			System.out.println();
		}
		System.out.println(str_PosicaoMaior);
		System.out.println(str_PosicaoMenor);
	}
}

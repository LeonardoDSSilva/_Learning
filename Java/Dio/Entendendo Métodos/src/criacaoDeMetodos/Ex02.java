package criacaoDeMetodos;

import java.util.Calendar;

public class Ex02 {
	public static void main(String[] args) {
		Calendar calendario = Calendar.getInstance();
		int hora = calendario.get(Calendar.HOUR_OF_DAY);

		exibirMensagemSaudacao(hora);
	}

	public static void exibirMensagemSaudacao(int hora) {
		if (hora >= 0 && hora < 12) {
			System.out.println("Bom dia!");
		} else if (hora >= 12 && hora < 18) {
			System.out.println("Boa tarde!");
		} else {
			System.out.println("Boa noite!");
		}
	}
}

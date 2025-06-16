// Desafio 01 - Subtração
int quantMoedas = int.Parse(Console.ReadLine("Informe a quantidade de moedas: "));
int quantMoedasJogadas = int.Parse(Console.ReadLine("Informe a quantidade de moedas jogadas: "));

int quantMoedasRestantes = quantMoedas - quantMoedasJogadas;
Console.WriteLine($"Quantidade de moedas restantes: {quantMoedasRestantes}");

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
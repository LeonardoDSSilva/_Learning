// Desafio 01 - Operadores Aritméticos
double totalFatura = double.Parse(Console.ReadLine("Informe o valor total da fatura: "));
double estorno = double.Parse(Console.ReadLine("Informe o valor do estorno: "));

double valorFinal = totalFatura - estorno;
Console.WriteLine($"Valor final da fatura: {valorFinal}");

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
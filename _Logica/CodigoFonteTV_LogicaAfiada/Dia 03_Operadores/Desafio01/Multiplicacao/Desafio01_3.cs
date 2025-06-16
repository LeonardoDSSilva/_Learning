// Desafio 01
double valorHora = double.Parse(Console.ReadLine("Informe o valor da hora trabalhada: "));

double totalReceber = valorHora * 160;
Console.WriteLine($"O total a receber no mês é: {totalReceber}");

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
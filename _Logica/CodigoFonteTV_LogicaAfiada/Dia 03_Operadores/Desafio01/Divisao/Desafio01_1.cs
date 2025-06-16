// Desafio 01
double nota01 = double.Parse(Console.ReadLine("Informe a nota 01: "));
double nota02 = double.Parse(Console.ReadLine("Informe a nota 02: "));
double nota03 = double.Parse(Console.ReadLine("Informe a nota 03: "));
double nota04 = double.Parse(Console.ReadLine("Informe a nota 04: "));

double media = (nota01 + nota02 + nota03 + nota04) / 4;
Console.WriteLine($"A média das notas é: {media}");

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
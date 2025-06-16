// Desafio 01
double quantidadeMetros = double.Parse(Console.ReadLine("Informe a quantidade de metros: "));

double emKilometros = quantidadeMetros / 1000;
Console.WriteLine($"A quantidade em quilômetros é: {emKilometros}");

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
// Desafio 01 - Multiplicação
double produto01 = double.Parse(Console.ReadLine("Informe o valor do primeiro produto: "));
double produto02 = double.Parse(Console.ReadLine("Informe o valor do segundo produto: "));

double totalCompra = (produto01 + produto02) * 2;
Console.WriteLine($"O total da compra é: {totalCompra}");

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
// Desafio 01
double altura = double.Parse(Console.ReadLine("Informe a altura do retângulo: "));
double largura = double.Parse(Console.ReadLine("Informe a largura do retângulo: "));

double area = altura * largura;
Console.WriteLine($"A área do retângulo é: {area}");

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
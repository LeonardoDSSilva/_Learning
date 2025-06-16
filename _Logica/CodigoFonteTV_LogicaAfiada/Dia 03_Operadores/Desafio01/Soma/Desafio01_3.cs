// Desafio 01 - Soma de Salários
double sal01 = double.Parse(Console.ReadLine("Informe o salário do primeiro: "));
double sal02 = double.Parse(Console.ReadLine("Informe o salário do segundo: "));
double sal03 = double.Parse(Console.ReadLine("Informe o salário do terceiro: "));

double somaSalarios = sal01 + sal02 + sal03;
Console.WriteLine($"A soma dos salários é: {somaSalarios}");

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
// Desafio 01 - Subtração
int anoAtual = int.Parse(Console.ReadLine("Informe o ano atual: "));
int anoNascimento = int.Parse(Console.ReadLine("Informe o ano de nascimento: "));

int idade = anoAtual - anoNascimento;
Console.WriteLine($"Sua idade é: {idade}");

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();

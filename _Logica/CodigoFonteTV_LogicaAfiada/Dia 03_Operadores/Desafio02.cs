double num = double.Parse(Console.ReadLine("Informe um número: "));
double resultado = num01 % 2 == 0;
Console.WriteLine($"O número {num} é {(resultado ? "par" : "ímpar")}.");

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
Console.WriteLine("Informa sua nota: ");
double nota = double.Parse(Console.ReadLine());

Console.WriteLine(nota < 70 ? "Reprovado" : "Aprovado");

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
Console.WriteLine("Informa sua nota da prova: ");
double nota = double.Parse(Console.ReadLine());

switch (nota)
{
    case double n when n >= 9.0 && n <= 10.0:
        Console.WriteLine("Excelente");
        break;
    case double n when n >= 7.5 && n < 9.0:
        Console.WriteLine("Muito Bom");
        break;
    case double n when n >= 6.0 && n < 7.5:
        Console.WriteLine("Bom");
        break;
    case double n when n >= 5.0 && n < 6.0:
        Console.WriteLine("Regular");
        break;
    case double n when n >= 0.0 && n < 5.0:
        Console.WriteLine("Insuficiente");
        break;
    default:
        Console.WriteLine("Nota inválida");
        break;
}

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
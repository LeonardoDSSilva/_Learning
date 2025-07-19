for (int i = 10; i >= 0; i--)
{
    if (i <= 3)
        Console.ForegroundColor = ConsoleColor.Red;
    else
        Console.ForegroundColor = ConsoleColor.Green;
    Thread.Sleep(1000);
    Console.Clear();
    Console.WriteLine($"{i}");
}

Console.ForegroundColor = ConsoleColor.Yellow;
Console.WriteLine("Fim da contagem regressiva!");
Console.ResetColor();

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
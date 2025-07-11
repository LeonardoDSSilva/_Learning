Console.WriteLine("Sua Conta está ativa? (Pressione Enter para continuar)");
bool contaAtiva = Console.ReadKey().Key == ConsoleKey.Enter;

if (!contaAtiva)
    Console.WriteLine("Sua conta está inativa. Portanto, você não pode fazer compras.");

Console.WriteLine("Informe o saldo da sua conta: ");
double saldo = double.Parse(Console.ReadLine());

Console.WriteLine(saldo > 0 ? "Você pode fazer compra." : "Você não pode fazer compra.");
Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
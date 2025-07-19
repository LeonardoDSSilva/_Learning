Console.WriteLine("Quanto que você quer investir? ");
double investimento = double.Parse(Console.ReadLine());

Console.WriteLine("Qual a taxa de juros anual(em porcentagem)? ");
double taxaJuros = double.Parse(Console.ReadLine());
double rendimento = 0.0;
int anos = 0;
while (investimento * 2 > rendimento)
{
    anos++;
    rendimento = investimento * Math.Pow(1 + taxaJuros / 100, anos);
}

Console.WriteLine($"Para dobrar o investimento de {investimento:C2}, você precisará investir por {anos} ano(s) para obter {rendimento:C2}.");
Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();

Console.WriteLine("Quanto que você quer investir? ");
double investimento = double.Parse(Console.ReadLine());
Console.WriteLine("Qual a taxa de juros anual(em porcentagem)? ");
double taxaJuros = double.Parse(Console.ReadLine());
Console.WriteLine("Por quantos anos você quer investir? ");
int anos = int.Parse(Console.ReadLine());

for (int i = 1; i <= anos; i++)
{
    investimento += investimento * (taxaJuros / 100);
    Console.WriteLine($"Após {i} ano(s), o valor total do investimento é: {investimento:C2}");
}
Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
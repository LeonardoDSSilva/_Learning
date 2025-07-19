Console.WriteLine("Informe o valor do produto: ");
double valorProduto = double.Parse(Console.ReadLine());
Console.WriteLine("Informe a quantidade de parcelas: ");
int parcelas = int.Parse(Console.ReadLine());

double valorParcela = valorProduto / parcelas;

for (int i = 1; i <= parcelas; i++)
{
    Console.WriteLine($"Valor da parcela {i}: {valorParcela:C2} - Saldo restante: {valorProduto - (valorParcela * i):C2}");
}

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
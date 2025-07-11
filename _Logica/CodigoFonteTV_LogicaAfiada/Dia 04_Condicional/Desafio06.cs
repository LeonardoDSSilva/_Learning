System.Console.WriteLine("Informa sua categoria do Produto: "  +
                          "(1 - Alimento, 2 - Eletrônico, 3 - Roupas, 4 - Livros)");
int categoria = int.Parse(Console.ReadLine());

double desconto = categoria switch
{
    1 => 0.05,
    2 => 0.10,
    3 => 0.20,
    4 => 0.50,
    _ => 0.0
};

Console.WriteLine("Informe o valor do produto: ");
double valorProduto = double.Parse(Console.ReadLine());

double valorComDesconto = valorProduto - (valorProduto * desconto);
Console.WriteLine( desconto == 0.0
    ? "Produto não tem desconto."
    : $"Valor do produto com desconto de {desconto * 100}%: {valorComDesconto:C2}");

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
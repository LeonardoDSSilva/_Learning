double distancia = double.Parse(Console.ReadLine("Informe a distância em km: "));
double precoLitro = double.Parse(Console.ReadLine("Informe o preço do litro de combustível: "));
double consumo = double.Parse(Console.ReadLine("Informe o consumo do veículo em km/l: "));

double quantidadeLitros = distancia / consumo;
double custoViagem = quantidadeLitros * precoLitro;

Console.WriteLine($"A quantidade de litros necessária é: {quantidadeLitros.ToString("F2", System.Globalization.CultureInfo.InvariantCulture)}");
Console.WriteLine($"O custo da viagem é: {custoViagem.ToString("F2", System.Globalization.CultureInfo.InvariantCulture)}");

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
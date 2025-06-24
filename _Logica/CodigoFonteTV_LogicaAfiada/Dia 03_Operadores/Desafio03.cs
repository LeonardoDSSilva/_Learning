int altura = int.Parse(Console.ReadLine("Informe a sua altura(cm): "));
int peso = int.Parse(Console.ReadLine("Informe o seu peso(kg): "));

int imc = peso / ((altura / 100) * (altura / 100));

var classificacao = imc switch
{
    < 18.5 => "abaixo do peso",
    < 25 => "com o peso normal",
    < 30 => "com sobrepeso",
    < 35 => "com obesidade grau I",
    < 40 => "com obesidade grau II",
    _ => "com obesidade grau III"
};
Console.WriteLine($"Seu IMC é {imc}. Você está {classificacao}.");

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();

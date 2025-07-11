
// Desafio 01 - CNH
int anoAtual = DateTime.Now.Year;

Console.WriteLine("Informe o ano de nascimento: ");
int anoNascimento = int.Parse(Console.ReadLine());

int idade = anoAtual - anoNascimento;
if (anoNascimento > anoAtual || idade < 0)
{
    Console.WriteLine("Ano de nascimento inválido.");
    return;
}
if (idade < 18)
{
    Console.WriteLine("Você ainda não tem idade suficiente para obter a CNH.");
    return;
}

Console.WriteLine("Informe o ano da sua CNH: ");
int anoCarteira = int.Parse(Console.ReadLine());

int tempoCarteira = anoAtual - anoCarteira;
int idadeCarteira = anoCarteira - anoNascimento;

if (idadeCarteira < 18 || anoCarteira > anoAtual)
{
    Console.WriteLine("Ano da CNH inválido.");
    return;
}
else
{
    if (tempoCarteira <= 1)
    {
        Console.WriteLine("Sua CNH é nova, você deve renová-la no primeiro ano de CNH.");
        return;
    }

    int intervalo = idade < 50 ? 10 : idade < 70 ? 5 : 3;
    int proximoAnoRenovacao = anoAtual + (intervalo - (anoAtual - anoCarteira) % intervalo);
    Console.WriteLine($"Sua CNH deverá ser renovada a cada {intervalo} anos, portanto, você deve renovar sua CNH no ano {proximoAnoRenovacao}.");
}

Console.WriteLine("Cancela: 1-Tá Aberto, 2-Tá Fechado, 3-Em Manutenção");
int status = int.Parse(Console.ReadLine());

var mensagem = status switch
{
    1 => "A Cancela está aberta. Pode passar.",
    2 => "A Cancela está fechada. Não pode passar.",
    3 => "A Cancela está em manutenção. Não pode passar.",
    _ => "Status inválido."
};

Console.WriteLine(mensagem);
Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
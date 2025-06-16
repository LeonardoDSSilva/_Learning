// Desafio 02 - Soma de Horas Trabalhadas na Semana
int seg =  int.Parse(Console.ReadLine("Informe a quantidade de horas trabalhadas na Segunda: "));
int ter = int.Parse(Console.ReadLine("Informe a quantidade de horas trabalhadas na Terça: "));
int qua = int.Parse(Console.ReadLine("Informe a quantidade de horas trabalhadas na Quarta: "));
int qui = int.Parse(Console.ReadLine("Informe a quantidade de horas trabalhadas na Quinta: "));
int sex = int.Parse(Console.ReadLine("Informe a quantidade de horas trabalhadas na Sexta: "));
int sab = int.Parse(Console.ReadLine("Informe a quantidade de horas trabalhadas no Sábado: "));
int dom = int.Parse(Console.ReadLine("Informe a quantidade de horas trabalhadas no Domingo: "));
int totalHoras = seg + ter + qua + qui + sex + sab + dom;
Console.WriteLine($"Total de horas trabalhadas na semana: {totalHoras} horas");

Console.WriteLine("Pressione qualquer tecla para sair...");
Console.ReadKey();
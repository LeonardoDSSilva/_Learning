using Blog.Models;
using Blog.Repositories;
using Dapper.Contrib.Extensions;
using Microsoft.Data.SqlClient;

class Program
{

    private const string CONNECTION_STRING = "Server=localhost,1433;Database=Blog; User ID=sa; Password=1q2w3e4r@#$; TrustServerCertificate=True;";
    private static void Main(string[] args)
    {
        var connection = new SqlConnection(CONNECTION_STRING);
        connection.Open();

        //ReadUser(1);
        //CreateUser(connection);
        ReadUsers(connection);
        //UpdateUser();
        //DeleteUser(3);



        connection.Close();
       
    }

    public static void ReadUsers(SqlConnection connection)
    {
        var repository = new UserRepository(connection);
        var users = repository.Get();
        
        foreach (var user in users)
            Console.WriteLine(user.Name);
        
    }

    public static void ReadUser(int id)
    {
        using (var connection = new SqlConnection(CONNECTION_STRING))
        {
            var user = connection.Get<User>(id);
            System.Console.WriteLine(user.Name);
        }
    }

    public static void CreateUser()
    {
        using (var connection = new SqlConnection(CONNECTION_STRING))
        {
            var user = new User
            {
                Name = "João",
                Email = "mail_2@mail.com",
                PasswordHash = "123456",
                Bio = "XXXX",
                Image = "XXXX",
                Slug = "XXXX"
            };

            var userId = connection.Insert(user);
            System.Console.WriteLine($"O id do user inserido é: {userId}");
            
        }
    }

    public static void UpdateUser()
    {
        using (var connection = new SqlConnection(CONNECTION_STRING))
        {
            var user = new User
            {
                Id = 4,
                Name = "Celia Aparecida",
                Email = "clia.60@mail.com",
                PasswordHash = "7890",
                Bio = "XXXX",
                Image = "XXXX",
                Slug = "XXXX"
            };

            var userUpdate = connection.Update<User>(user);
            System.Console.WriteLine(userUpdate ? "O user foi atualizado com Sucesso !!" : "Erro ao atualizar o Usuario");

            

        }
    }

    private static void DeleteUser (int id)
    {
        using(var connection = new SqlConnection(CONNECTION_STRING))
        {
            var userDelete = connection.Delete(new User { Id = id });
            System.Console.WriteLine(userDelete ? "O user foi deletando com Sucesso !!" : "Erro ao deleta o Usuario");
        }
    }



}
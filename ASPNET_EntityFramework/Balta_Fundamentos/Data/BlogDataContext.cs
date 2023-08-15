using Balta_Fundamentos.Models;
using Microsoft.EntityFrameworkCore;

namespace Balta_Fundamentos.Data
{
    public class BlogDataContext : DbContext
    {

        // Configurado a String de Conexao
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseSqlServer("Server=localhost,1433; Database=Blog; User ID=sa; Password=1q2w3e4r@#$; TrustServerCertificate=True;");

        public DbSet<Category> Categories { get; set; }
        public DbSet<Post> Posts { get; set; }
        //public DbSet<PostTag> PostTags { get; set; }
        //public DbSet<Role> Roles { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<User> Users { get; set; }
        //public DbSet<UserRole> UserRoles { get; set; }


    }
}

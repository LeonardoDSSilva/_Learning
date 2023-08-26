using Microsoft.EntityFrameworkCore;
using Todo.Data.Mappings;
using Todo.Models;

namespace Todo.Data;

public class AppDbContext : DbContext
{
    public DbSet<TodoModel> Todos { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseSqlite("DataSource=app.db; Cache=Shared");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
        => modelBuilder.ApplyConfiguration(new TodoMap());
}

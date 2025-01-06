
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Todo.Models;

namespace Todo.Data.Mappings;

public class TodoMap : IEntityTypeConfiguration<TodoModel>
{
    public void Configure(EntityTypeBuilder<TodoModel> builder)
    {
        builder.ToTable(nameof(TodoMap));

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .ValueGeneratedOnAdd();
            //.UseIdentityColumn();

        builder.Property(x => x.Title)
            .IsRequired()
            .HasColumnType("text")
            .HasColumnName("title");

        builder.Property(x => x.Done)
            .IsRequired()
            .HasColumnType("boolean")
            .HasColumnName(nameof(TodoModel.Done))
            .HasDefaultValue(false);

        builder.Property(x => x.CreatedAt)
            .IsRequired()
            .HasColumnName(nameof(TodoModel.CreatedAt))
            .HasColumnType("DATETIME")
            .HasDefaultValueSql("GETDATE()");
    }
}

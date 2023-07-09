using System.ComponentModel.DataAnnotations;

namespace BlazingShop.Models
{
	public class Category
	{
		[Key]
		[Required(ErrorMessage = "Id é obrigatorio")]
		public int Id { get; set; }

		[Required(ErrorMessage = "Titulo é obrigatorio")]
		[MaxLength(50, ErrorMessage = "Titulo deve ter no maximo 50 caracteres")]
		[MinLength(5, ErrorMessage = "Titulo deve ter no minimo 5 caracteres")]
		public string Title { get; set; } = string.Empty;
		public List<Product> Products { get; set; } = new();
	}
}

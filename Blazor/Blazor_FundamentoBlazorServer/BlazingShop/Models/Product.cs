using System.ComponentModel.DataAnnotations;

namespace BlazingShop.Models
{
	public class Product
	{
		[Key]
		[Required(ErrorMessage = "Id é obrigatorio")]
		public int Id { get; set; }

		[Required(ErrorMessage = "Titulo é obrigatorio")]
		[MaxLength(150, ErrorMessage = "Titulo deve ter no maximo 150 caracteres")]
		[MinLength(5, ErrorMessage = "Titulo deve ter no minimo5 5 caracteres")]
		public string Title { get; set; } = string.Empty;

		[Required(ErrorMessage = "Preco é obrigatorio")]
		[DataType(DataType.Currency)]
		[Range(0, 9999, ErrorMessage = "Preco deve estar entre 0 e 9999")]
		public decimal Price { get; set; }

		[Required(ErrorMessage = "Categoria é obrigatorio")]
		[Range(1, 9999, ErrorMessage = "Categoria deve estar entre 1 e 9999")]
		public int CategoryId { get; set; }

		public Category Cate { get; set; } = null!;

	}
}

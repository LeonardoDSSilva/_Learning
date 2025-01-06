using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace MyRazorApp.Pages
{
    public class Index : PageModel
    {
        private readonly ILogger<Index> _logger;

        public Index(ILogger<Index> logger)
        {
            _logger = logger;
        }


        // Quando a página é requisitada
        public void OnGet()
        {

        }

        // Quando a página é requisitada com um POST
        public void OnPost()
        {
        }
    }
}


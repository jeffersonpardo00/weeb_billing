using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace billing_back.Models
{
    public class Inventory
    {
        public int IdProduct { get; }
        public string? ProductName { get; set; }
        public float? ProductPrice { get; set; }
        public int? ProductNumUnits { get; set; }

        
    }
}

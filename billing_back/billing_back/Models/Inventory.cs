using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace billing_back.Models
{
    public class Inventory
    {
        public int? idProduct { get; set; }
        public string? productName { get; set; }
        public float? productPrice { get; set; }
        public int? productNumUnits { get; set; }

        
    }
}

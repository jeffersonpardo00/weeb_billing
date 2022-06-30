using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace billing_back.Models
{
    public class Purchase 
    {
        public int IdPurchase { get; }
        public int IdBill { get; set; }
        public int IdProduct { get; set; }
        public int? ProductQuantity { get; set; }
        public float? PurchaseValue { get; set; }
    }
}

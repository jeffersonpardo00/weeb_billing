using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace billing_back.Models
{
    
    public class Bill 
    {
        public int IdBill { get; }
        public int IdClient { get; set; }
        public DateTime PurchaseDate { get; set; }
    }

}

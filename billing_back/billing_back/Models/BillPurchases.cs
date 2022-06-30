using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using billing_back.Models;

namespace billing_back.Models
{
    public class BillPurchases
    {
        public Bill Bill { get; set; }
        public Purchase[] Purchases { get; set; }
    }
}

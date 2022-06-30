using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace billing_back.Models
{
    public class Client
    {
        public int IdClient { get; }
        public string? Name1 { get; set; }
        public string? Name2 { get; set; }
        public string? LastName1 { get; set; }
        public string? LastName2 { get; set; }
        public DateTime? BirthDate { get; set; }
        public int? IdentNum { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace billing_back.Models
{
    public class Client
    {
        public int? idClient { get; set; }
        public string? name1 { get; set; }
        public string? name2 { get; set; }
        public string? lastName1 { get; set; }
        public string? lastName2 { get; set; }
        public DateTime? birthDate { get; set; }
        public int? identNum { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace billing_back.Models
{
    public class Client
    {
        public int IdClient { get; set; }
        public string Name1 { get; set; }
        public string Name2 { get; set; }
        public string LastName1 { get; set; }
        public string LastName2 { get; set; }
        public DateTime BirthDate { get; set; }
        public int IdentNum { get; set; }

         public Client()
         {
         }

         public Client(int num)
         {
            this.Name1 = "null";
            this.IdClient = 0;
            this.Name1 = "null";
            this.Name2 = "null";
            this.LastName1 = "null";
            this.LastName2 = "null";
            this.BirthDate = new DateTime(1900, 1, 1, 1, 0, 0);
            this.IdentNum = 0;
        }

    }
}

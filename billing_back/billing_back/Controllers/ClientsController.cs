using billing_back.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace billing_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {

        private readonly WeebBillingContext _context;

        public ClientsController(WeebBillingContext context)
        {
            _context = context;
        }


        // GET: api/Clients/5
        /*[HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClient(int id)
        {
            var client = await _context.Client.FindAsync(id);

            if (client == null)
            {
                return NotFound();
            }

            return client;
        }*/

        [HttpGet("{id}")]
        public async Task<Client> GetClientByIdentNum(int id)
        {
           

        SqlParameter param1 = new SqlParameter(@"id_num", id);

            string StoredProc = "EXEC  GetClientByIdentNum   @id_num";

            var ClientReturn = await _context.Client.FromSqlRaw(StoredProc, param1).ToListAsync();

            if (ClientReturn == null)
            {
                Client resultNUll = new Client(0);
                return resultNUll;
            }

            Client result = ClientReturn[0];

            return result;

        }

        // POST: api/Clients
        [HttpPost]
        public async Task<ActionResult<Client>> PostClient(Client client)
        {
            _context.Client.Add(client);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClient", new { id = client.IdClient }, client);
        }

    }
}

using billing_back.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace billing_back.Controllers
{
    [Route("Product/")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        private readonly WeebBillingContext _context;

        public InventoryController(WeebBillingContext context)
        {
            _context = context;
        }

        // GET: api/Inventory/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Inventory>> GetProduct(int id)
        {
            var product = await _context.Inventory.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutProducto(int id, Inventory inventory)
        {
            if (id != inventory.IdProduct)
            {
                return BadRequest();
            }

            _context.Entry(inventory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool ProductExists(int id)
        {
            return _context.Inventory.Any(e => e.IdProduct == id);
        }

    }
}

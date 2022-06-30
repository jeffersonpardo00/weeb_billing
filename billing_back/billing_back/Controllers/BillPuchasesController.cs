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
    public class BillPuchasesController : ControllerBase
    {
        private readonly WeebBillingContext _context;

        public BillPuchasesController(WeebBillingContext context)
        {
            _context = context;
        }

        // POST: api/BillPuchases
        [HttpPost]
        public async Task<IActionResult> PostBillPuchases (BillPurchases billPurchases)
        {
            SqlParameter parameterReturn = new SqlParameter
            {
                ParameterName = "ReturnValue",
                SqlDbType = System.Data.SqlDbType.Int,
                Direction = System.Data.ParameterDirection.Output,
            };

            var parameterId_client = new SqlParameter
            {
                ParameterName = "id_client",
                SqlDbType = System.Data.SqlDbType.Int,
                Value = billPurchases.Bill.IdClient,
            };

            var parameterPurchase_date = new SqlParameter
            {
                ParameterName = "purchase_date",
                SqlDbType = System.Data.SqlDbType.DateTime,
                Value = billPurchases.Bill.PurchaseDate,
            };

            string StoredProc = "EXEC @returnValue = [dbo].[insertBill] @id_client, @purchase_date";

            var res = _context.Database.ExecuteSqlRaw(StoredProc,parameterReturn, parameterId_client, parameterPurchase_date);

            int returnValue = (int)parameterReturn.Value;


            foreach (Purchase purchase in billPurchases.Purchases)
            {
                purchase.IdBill = returnValue;
                _context.Purchase.Add(purchase);
            }

            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}

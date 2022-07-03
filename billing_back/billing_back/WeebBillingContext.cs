using System;
using billing_back.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

#nullable disable

namespace billing_back
{
    public partial class WeebBillingContext : DbContext
    {
        private static readonly IConfiguration _configuration;
        string ConnectionString = _configuration.GetConnectionString("conexionBDjeff");

        public WeebBillingContext(DbContextOptions<WeebBillingContext> options) : base(options)
        {

        }
        public virtual DbSet<Client> Client { get; set; }
        public virtual DbSet<Inventory> Inventory { get; set; }
        public virtual DbSet<Purchase> Purchase { get; set; }
        public virtual DbSet<Bill> Bill { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(ConnectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
         
            modelBuilder.Entity<Client>(entity =>
            {
                entity.HasKey(e => e.IdClient);

                entity.ToTable("client");

                entity.Property(e => e.IdClient).HasColumnName("id_client");

                entity.Property(e => e.LastName1)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("last_name1");

                entity.Property(e => e.LastName2)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("last_name2");

                entity.Property(e => e.Name1)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("name1");

                entity.Property(e => e.Name2)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("name2");

                entity.Property(e => e.BirthDate)
                    .HasColumnType("date")
                    .HasColumnName("birth_date");

                entity.Property(e => e.IdentNum)
                    .HasColumnType("int")
                    .HasColumnName("ident_num");

            });

            modelBuilder.Entity<Inventory>(entity =>
            {
                entity.HasKey(e => e.IdProduct);

                entity.ToTable("inventory");

                entity.Property(e => e.IdProduct).HasColumnName("id_product");

                entity.Property(e => e.ProductName)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("product_name");

                entity.Property(e => e.ProductPrice)
                    .HasColumnType("float")
                    .HasColumnName("product_price");

                entity.Property(e => e.ProductNumUnits)
                    .HasColumnType("int")
                    .HasColumnName("product_num_units");


            });

            modelBuilder.Entity<Purchase>(entity =>
            {
                entity.HasKey(e => e.IdPurchase);

                entity.ToTable("purchase");

                entity.Property(e => e.IdPurchase).HasColumnName("id_purchase");

                entity.Property(e => e.IdBill)
                    .HasColumnType("int")
                    .HasColumnName("id_bill");

                entity.Property(e => e.IdProduct)
                    .HasColumnType("int")
                    .HasColumnName("id_product");

                entity.Property(e => e.ProductQuantity)
                    .HasColumnType("int")
                    .HasColumnName("product_quantity");

                entity.Property(e => e.PurchaseValue)
                    .HasColumnType("float")
                    .HasColumnName("purchase_value");


            });

            modelBuilder.Entity<Bill>(entity =>
            {
                entity.HasKey(e => e.IdBill);

                entity.ToTable("bill");

                entity.Property(e => e.IdBill).HasColumnName("id_bill");

                entity.Property(e => e.IdBill)
                    .HasColumnType("int")
                    .HasColumnName("id_bill");

                entity.Property(e => e.IdClient)
                    .HasColumnType("int")
                    .HasColumnName("id_client");

                entity.Property(e => e.PurchaseDate)
                    .HasColumnType("date")
                    .HasColumnName("purchase_date");

            });


            OnModelCreatingPartial(modelBuilder);

        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    }
}

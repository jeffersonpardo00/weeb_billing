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
                entity.HasKey(e => e.idClient);

                entity.ToTable("client");

                entity.Property(e => e.idClient).HasColumnName("id_client");

                entity.Property(e => e.lastName1)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("last_name1");

                entity.Property(e => e.lastName2)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("last_name2");

                entity.Property(e => e.name1)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("name1");

                entity.Property(e => e.name2)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("name2");

                entity.Property(e => e.birthDate)
                    .HasColumnType("date")
                    .HasColumnName("birth_date");

                entity.Property(e => e.identNum)
                    .HasColumnType("int")
                    .HasColumnName("ident_num");

            });

            OnModelCreatingPartial(modelBuilder);

        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    }
}

using Microsoft.EntityFrameworkCore;
using RequestReceiver.Domain.Entities;

namespace RequestReceiver.Data.Context
{
    public class ORContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS;Database=ORDB;Trusted_Connection=True;");
        }
    }

}

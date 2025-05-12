using HumanResourceManagement.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace HumanResourceManagement.Api.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.HasNoKey();
                entity.ToView("Employee", "Views");
            });
        }
    }
}

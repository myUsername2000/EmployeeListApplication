using Microsoft.EntityFrameworkCore;

namespace HumanResourceManagement.Api.Models
{
    [Keyless]
    public class Employee
    {
        public int EmployeeId { get; set; }
        public required string Name { get; set; }
        public required int Age { get; set; }
        public DateOnly Birthdate { get; set; }
        public string? ContactNumber { get; set; }
        public string? Email { get; set; }
        public string? Address { get; set; }
        public required string DepartmentName { get; set; }
        public required string PositionName { get; set; }
        public float Salary { get; set; }
        public DateOnly RegistrationDate { get; set; }
    }
}

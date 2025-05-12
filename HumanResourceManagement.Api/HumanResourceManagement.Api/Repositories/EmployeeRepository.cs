using System.Reflection;
using System.Threading.Tasks;
using HumanResourceManagement.Api.Data;
using HumanResourceManagement.Api.Interfaces;
using HumanResourceManagement.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace HumanResourceManagement.Api.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly DatabaseContext _databaseContext;
        public EmployeeRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public async Task<int> CreateEmployeeAsync(string firstName, string middleName, string lastName, DateOnly birthdate, string contactNumber, string email, string address, string departmentName, string positionName, float salary, DateOnly registrationDate)
        {
            return await _databaseContext.Database.ExecuteSqlInterpolatedAsync($"EXEC CreateEmployee @FirstName = {firstName}, @MiddleName = {middleName}, @LastName = {lastName}, @Birthdate = {birthdate}, @ContactNumber = {contactNumber}, @Email = {email}, @Address = {address}, @DepartmentName = {departmentName}, @PositionName = {positionName}, @Salary = {salary}, @RegistrationDate = {registrationDate}");
        }

        public async Task<List<Employee>> ReadEmployeesAsync()
        {
            return await _databaseContext.Employees.ToListAsync();
        }

        public async Task<int> UpdateEmployeeAsync(int employeeId, string contactNumber, string email, string address, string departmentName, string positionName, float salary)
        {
            return await _databaseContext.Database.ExecuteSqlInterpolatedAsync($"EXEC UpdateEmployee @EmployeeId = {employeeId}, @ContactNumber = {contactNumber}, @Email = {email}, @Address = {address}, @DepartmentName = {departmentName}, @PositionName = {positionName}, @Salary = {salary}");
        }
        
        public async Task<int> DeleteEmployeeAsync(int employeeId)
        {
            return await _databaseContext.Database.ExecuteSqlInterpolatedAsync($"EXEC DeleteEmployee @EmployeeId = {employeeId}");
        }
    }
}

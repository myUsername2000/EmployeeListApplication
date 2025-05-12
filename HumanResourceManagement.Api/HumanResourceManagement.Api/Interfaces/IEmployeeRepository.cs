using HumanResourceManagement.Api.Models;

namespace HumanResourceManagement.Api.Interfaces
{
    public interface IEmployeeRepository
    {
        Task<int> CreateEmployeeAsync(string firstName, string middleName, string lastName, DateOnly birthdate, string contactNumber, string email, string address, string departmentName, string positionName, float salary, DateOnly registrationDate);
        Task<List<Employee>> ReadEmployeesAsync();
        Task<int> UpdateEmployeeAsync(int employeeId, string contactNumber, string email, string address, string departmentName, string positionName, float salary);
        Task<int> DeleteEmployeeAsync(int employeeId);
    }
}

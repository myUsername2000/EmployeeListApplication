using HumanResourceManagement.Api.Interfaces;
using HumanResourceManagement.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace HumanResourceManagement.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController
    {
        private readonly IEmployeeRepository _employeeRepository;
        public EmployeeController(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        [HttpGet("CreateEmployee")]
        public async Task<int> CreateEmployeeAsync(string firstName, string middleName, string lastName, DateOnly birthdate, string contactNumber, string email, string address, string departmentName, string positionName, float salary, DateOnly registrationDate)
        {
            return await _employeeRepository.CreateEmployeeAsync(firstName, middleName, lastName, birthdate, contactNumber, email, address, departmentName, positionName, salary, registrationDate);
        }

        [HttpGet("ReadEmployees")]
        public async Task<List<Employee>> ReadEmployeesAsync()
        {
            return await _employeeRepository.ReadEmployeesAsync();
        }

        [HttpGet("UpdateEmployee")]
        public async Task<int> UpdateEmployeeAsync(int employeeId, string contactNumber, string email, string address, string departmentName, string positionName, float salary)
        {
            return await _employeeRepository.UpdateEmployeeAsync(employeeId, contactNumber, email, address, departmentName, positionName, salary);
        }

        [HttpGet("DeleteEmployee")]
        public async Task<int> DeleteEmployeeAsync(int employeeId)
        {
            return await _employeeRepository.DeleteEmployeeAsync(employeeId);
        }
    }
}

export async function readEmployees() {
    const url = new URL('https://localhost:7095/api/Employee/ReadEmployees');

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const employees = await response.json();
            return employees;
        } else {
            console.error('Error status:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export const displayEmployees = async () => {
    const employees = await readEmployees();

    let employeesListHTML = '';

    employees.forEach(employee => {
        employeesListHTML += `
            <tr>
                <td>${employee.employeeId}</td>
                <td>${employee.name}</td>
                <td>${employee.age}</td>
                <td>${employee.birthdate}</td>
                <td>${employee.contactNumber}</td>
                <td>${employee.email}</td>
                <td>${employee.address}</td>
                <td>${employee.departmentName}</td>
                <td>${employee.positionName}</td>
                <td>${employee.salary}</td>
                <td>${employee.registrationDate}</td>
                <td>
                    <button type="button" class="btn btn-warning mb-1" data-bs-toggle="modal" data-bs-target="#updateEmployee${employee.employeeId}">
                        <i class="bi bi-pencil-square"></i>
                    </button>

                    <div class="modal fade" id="updateEmployee${employee.employeeId}" tabindex="-1" aria-labelledby="updateEmployeeLabel${employee.employeeId}" aria-hidden="true">

                        <div class="modal-dialog modal-lg modal-dialog-centered">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 w-100 text-center" id="updateEmployeeLabel${employee.employeeId}">Create Employee</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div class="modal-body">
                                    <h6 class="fw-bold">Personal Information</h6>
                                    <hr>
                                    <div class="row g-3">
                                        <div class="col-md-4">
                                            <label for="name">Name</label>
                                            <input type="text" name="name" id="name" class="form-control text-center" value="${employee.name}" disabled>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="age">Age</label>
                                            <input type="text" name="age" id="age" class="form-control text-center" value="${employee.age}" disabled>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="birthdate">Birthdate</label>
                                            <input type="text" name="birthdate" id="birthdate" class="form-control text-center" value="${employee.birthdate}" disabled>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="contactNumber">Contact No.</label>
                                            <input type="number" name="contactNumber" id="contactNumber" class="form-control text-center js-update-contact-number-${employee.employeeId}" placeholder="Contact No." value="${employee.contactNumber}">
                                        </div>
                                        <div class="col-md-4">
                                            <label for="email">Email</label>
                                            <input type="text" name="email" id="email" class="form-control text-center js-update-email-${employee.employeeId}" placeholder="Email" value="${employee.email}">
                                        </div>
                                        <div class="col-md-4">
                                            <label for="email">Address</label>
                                            <input type="text" name="address" id="address" class="form-control text-center js-update-address-${employee.employeeId}" placeholder="Address" value="${employee.address}">
                                        </div>

                                        <h6 class="fw-bold">Organization Information</h6>
                                        <hr>
                                        <div class="col-md-4">
                                            <label for="department">Department</label>
                                            <select name="department" id="department" class="form-control text-center js-update-department-name-${employee.employeeId}">
                                                <option value="${employee.departmentName}" disabled selected>${employee.departmentName}</option>
                                                <option value="Human Resource">Human Resource</option>
                                                <option value="Accounting">Accounting</option>
                                                <option value="Finance">Finance</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Sales">Sales</option>
                                            </select>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="position">Position</label>
                                            <select name="position" id="position" class="form-control text-center js-update-position-name-${employee.employeeId}">
                                                <option value="${employee.positionName}" disabled selected>${employee.positionName}</option>
                                                <option value="General Manager">General Manager</option>
                                                <option value="Manager">Manager</option>
                                                <option value="Supervisor">Supervisor</option>
                                                <option value="Team Leader">Team Leader</option>
                                                <option value="Staff">Staff</option>
                                            </select>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="salary">Salary</label>
                                            <input type="number" name="salary" id="salary" class="form-control text-center js-update-salary-${employee.employeeId}" placeholder="Salary" value=${employee.salary}>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-success js-update-button" data-update-id=${employee.employeeId}>Update</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteEmployee${employee.employeeId}">
                        <i class="bi bi-trash"></i>
                    </button>

                    <div class="modal fade" id="deleteEmployee${employee.employeeId}" tabindex="-1" aria-labelledby="deleteEmployeeLabel${employee.employeeId}" aria-hidden="true">

                        <div class="modal-dialog modal-lg modal-dialog-centered">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 w-100 text-center" id="deleteEmployeeLabel${employee.employeeId}">Delete Employee</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div class="modal-body">
                                    <p>Are you sure you want to delete <span class="fw-bold">${employee.name}</span>? This action cannot be undone.</p>
                                </div>
                                
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-success js-delete-button" data-delete-id="${employee.employeeId}">Delete</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        `;
    })

    return employeesListHTML;
}
import { createEmployee } from './createEmployee.js'
import { displayEmployees } from './readEmployees.js'
import { deleteEmployee } from './deleteEmployee.js'
import { updateEmployee } from './updateEmployee.js'

const deleteListener = () => {
    const deleteButtons = document.querySelectorAll('.js-delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const employeeId = button.getAttribute('data-delete-id');
            await deleteEmployee(employeeId);
            location.href="index.html";
        })
    })
}

const renderEmployeesList = async () => {
    const employeesListHTML = await displayEmployees();
    const employeesList = document.querySelector('.js-employees-list')
    employeesList.innerHTML = employeesListHTML;

    deleteListener();
    updateListener();
}

renderEmployeesList();

const createButton = document.querySelector('.js-create-button')
createButton.addEventListener('click', async () => {
    await createEmployee();
    await renderEmployeesList();
});

const updateListener = () => {
    const updateButtons = document.querySelectorAll('.js-update-button');
        updateButtons.forEach(button => {
            button.addEventListener('click', async () => {
                const employeeId = button.getAttribute('data-update-id');

                const contactNumberInput = document.querySelector(`.js-update-contact-number-${employeeId}`);
                const emailInput = document.querySelector(`.js-update-email-${employeeId}`);
                const addressInput = document.querySelector(`.js-update-address-${employeeId}`);
                const departmentNameInput = document.querySelector(`.js-update-department-name-${employeeId}`);
                const positionNameInput = document.querySelector(`.js-update-position-name-${employeeId}`);
                const salaryInput = document.querySelector(`.js-update-salary-${employeeId}`);

                const contactNumber = contactNumberInput.value;
                const email = emailInput.value;
                const address = addressInput.value;
                const departmentName = departmentNameInput.value;
                const positionName = positionNameInput.value;
                const salary = salaryInput.value;

                await updateEmployee(employeeId, contactNumber, email, address, departmentName, positionName, salary);

                location.href="index.html";
            })
        })
}
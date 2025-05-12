 export const createEmployee = async () => {
    const firstNameInput = document.querySelector('.js-first-name');
    const middleNameInput = document.querySelector('.js-middle-name');
    const lastNameInput = document.querySelector('.js-last-name');
    const birthdateInput = document.querySelector('.js-birthdate');
    const contactNumberInput = document.querySelector('.js-contact-number');
    const emailInput = document.querySelector('.js-email');
    const addressInput = document.querySelector('.js-address');
    const departmentNameInput = document.querySelector('.js-department-name');
    const positionNameInput = document.querySelector('.js-position-name');
    const salaryInput = document.querySelector('.js-salary');

    const firstName = firstNameInput.value;
    const middleName = middleNameInput.value;
    const lastName = lastNameInput.value;
    const birthdate = birthdateInput.value;
    const contactNumber = contactNumberInput.value;
    const email = emailInput.value;
    const address = addressInput.value;
    const departmentName = departmentNameInput.value;
    const positionName = positionNameInput.value;
    const salary = salaryInput.value;
    const registrationDate = new Date().toISOString().split('T')[0];

    const url = new URL('https://localhost:7095/api/Employee/CreateEmployee');
    url.searchParams.append('firstName', firstName);
    url.searchParams.append('middleName', middleName);
    url.searchParams.append('lastName', lastName);
    url.searchParams.append('birthdate', birthdate);
    url.searchParams.append('contactNumber', contactNumber);
    url.searchParams.append('email', email);
    url.searchParams.append('address', address);
    url.searchParams.append('departmentName', departmentName);
    url.searchParams.append('positionName', positionName);
    url.searchParams.append('salary', salary);
    url.searchParams.append('registrationDate', registrationDate);

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const affectedRows = await response.json();
            console.log('Affected Rows:', affectedRows);

            firstNameInput.value = '';
            middleNameInput.value = '';
            lastNameInput.value = '';
            birthdateInput.value = '';
            contactNumberInput.value = '';
            emailInput.value = '';
            addressInput.value = '';
            departmentNameInput.value = '';
            positionNameInput.value = '';
            salaryInput.value = '';
        } else {
            console.error('Error status:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
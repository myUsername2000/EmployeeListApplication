export const updateEmployee = async (employeeId, contactNumber, email, address, departmentName, positionName, salary) => {
    const url = new URL('https://localhost:7095/api/Employee/UpdateEmployee');
    url.searchParams.append('employeeId', employeeId);
    url.searchParams.append('contactNumber', contactNumber);
    url.searchParams.append('email', email);
    url.searchParams.append('address', address);
    url.searchParams.append('departmentName', departmentName);
    url.searchParams.append('positionName', positionName);
    url.searchParams.append('salary', salary);

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
        } else {
            console.error('Error status:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
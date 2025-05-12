export const deleteEmployee = async (employeeId) => {
    const url = new URL('https://localhost:7095/api/Employee/DeleteEmployee');
    url.searchParams.append('employeeId', employeeId);

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
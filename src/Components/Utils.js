const serviceurl = 'http://localhost:5000/employees';

const fetchEmployees = async () => {
    try {
        const response = await fetch(`${serviceurl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching employees:', error);
        return [];
    }
}


const addEmployee = async (item) => {
    try {
        const response = await fetch(`${serviceurl}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding employee:', error);
        return null;
    }
}

const updateEmployee = async (item) => {
    try {
        const response = await fetch(`${serviceurl}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating employee:', error);
        return null;
    }
}

const deleteEmployee = async (id) => {
    try {
        const response = await fetch(`${serviceurl}/${id}`, {
            method: 'DELETE'
        });
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting employee:', error);
        return null;
    }
}



export { fetchEmployees, addEmployee, updateEmployee, deleteEmployee };
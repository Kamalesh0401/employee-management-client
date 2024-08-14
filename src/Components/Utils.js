const testurl = 'https://employee-backend-vmmf.onrender.com/employees';
//Render -- https://employee-backend-vmmf.onrender.com
//Local -- 'http://localhost:5000/employees'
//Gitpod -- 'https://5000-kamalesh040-eployeeback-xhns2kvrwfg.ws-us115.gitpod.io/employees';

const fetchEmployees = async () => {
    try {
        const response = await fetch(`${testurl}`);
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
        const response = await fetch(`${testurl}/add`, {
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
        const response = await fetch(`${testurl}/update`, {
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
        const response = await fetch(`${testurl}/${id}`, {
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
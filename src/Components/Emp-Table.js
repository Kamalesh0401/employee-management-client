import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import EmployeeForm from './Emp-Form';
import './Style.css';
import { updateEmp, addEmp } from './Emp-Action';

import { fetchEmployees, deleteEmployee } from './Utils';



function EmployeeTable(FormData) {

    const [form, setShowForm] = useState(false);
    const [deletepercent, setDeletePercent] = useState(0);
    const [showprogress, setShowProgress] = useState(false);
    const [showloader, setShowLoader] = useState(false);
    const dispatch = useDispatch();
    const selectMyData = (state) => state.EmployeeReducer;
    const tableData = useSelector(selectMyData);


    useEffect(() => {
        const fetchData = async () => {
            setShowLoader(true);
            const result = await fetchEmployees();
            if (result && result.status === 'OK') {
                dispatch(addEmp(result.data));
            }
            setShowLoader(false);
        };

        fetchData();

    }, [dispatch])


    const handleDelete = async (id) => {

        let result = await deleteEmployee(id);
        if (result.status === 'OK') {
            setShowProgress(true);
            let result2 = await fetchEmployees();
            if (result2.status === 'OK') {
                dispatch(addEmp(result2.data));
            }
        }
        // dispatch(deleteEmp({ id }));

    }

    useEffect(() => {

        const timer = setInterval(() => {


            if (deletepercent < 100) {

                setDeletePercent((percent) => percent + 1);
            }
            else {
                setShowProgress(false);
                setDeletePercent(0);
            }
        }, 80);

        return () => clearInterval(timer);


    }, [deletepercent]);



    useEffect(() => {

        if (tableData.updateData === null) {

            const timeoutId = setTimeout(() => {

                setShowForm(false);

            }, 1000);

            return () => clearTimeout(timeoutId);
        }

    }, [tableData.updateData]);


    return (<>
        {form && <EmployeeForm></EmployeeForm>}
        <table className="employee-table" style={{ pointerEvents: showprogress === true ? 'none' : 'auto' }}>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Designation</td>
                    <td>Age</td>
                    <td>Experience</td>
                    <td>Salary</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.myData.map(element => (

                        <tr>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.designation}</td>
                            <td>{element.age}</td>
                            <td>{element.experience}</td>
                            <td>{element.salary}</td>
                            <td><button className="update-button"  /*onClick={HandleUpdate(element.id)}>Update</button> */



                                onClick={(e) => {

                                    dispatch(updateEmp(element.id));
                                    setShowForm(true);

                                }}>Update</button>

                                <button className="delete-button" onClick={(e) => {

                                    e.preventDefault();

                                    handleDelete(element.databaseid)
                                    console.log('the insiide delete : ', element.databaseid);
                                }}
                                >Delete</button></td>
                        </tr>


                    ))

                }

            </tbody>

        </table>
        {showloader && (
            <div className="spinner-container">
                <div>

                </div>
                <br /><br />

                <div className='spinner'></div>

            </div>
        )}

        {showprogress &&
            <div className="spinner-container">
                <div class="progress-container">

                    <progress value={deletepercent} max='100' />

                </div>
            </div >}
    </>);
}



export default EmployeeTable;
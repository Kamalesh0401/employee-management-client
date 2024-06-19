import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import EmployeeForm from './Emp-Form';
import './Style.css';
import {updateEmp , deleteEmp} from './Emp-Action';



function EmployeeTable(FormData){

    const selectMyData = (state) => state.EmployeeReducer;

    const  tableData = useSelector(selectMyData);

    const dispatch = useDispatch();

    const handleDelete = (id) =>{

        setShowProgress(true);

        dispatch(deleteEmp({id}));

    }
    const [form , setShowForm] = useState(false);
    const [deletepercent , setDeletePercent] = useState(0);
    const [showprogress , setShowProgress] = useState(false);
        
        useEffect(()=>{

        const timer = setInterval(() => {   


            if (deletepercent < 100) {

                setDeletePercent((percent)=> percent + 1 );

               // console.log(deletepercent);

            }
            else {

                setShowProgress(false);
                setDeletePercent(0);

            }
          }, 50);

           return () => clearInterval(timer);


        },[deletepercent]);



    useEffect(()=>{

        if(tableData.updateData === null){

            const timeoutId = setTimeout(() => {

                setShowForm(false);

            }, 1000);
            
            return () => clearTimeout(timeoutId);

        }

    },[tableData.updateData]);

           
    return(<>
  {form && <EmployeeForm></EmployeeForm> }   
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

                                
                                
                                onClick={(e)=>{
                                   
                                    dispatch(updateEmp(element.id));
                                    setShowForm(true);
                                    
                                    }}>Update</button>                               
                                
                                <button className="delete-button" onClick={(e)=>{
                                    
                                    e.preventDefault();
                                   
                                    handleDelete(element.id)
                                    console.log('the insiide delete : ' , element.id);
                                    }}
                                    >Delete</button></td>
                            </tr>
                          
                          
                    ))
                    
                }
            
            </tbody>
      
    </table>

   { showprogress && <div class="progress-container"> 

        <progress value=  {deletepercent} max='100' />
  
    </div>}

        </>);
}



export default EmployeeTable;
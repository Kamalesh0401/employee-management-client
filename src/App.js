import './App.css';
import EmployeeForm from './Components/Emp-Form';
import EmployeeTable from './Components/Emp-Table'
import { useState } from 'react';
import {Provider} from 'react-redux';
import EmpStore from './Components/Emp-Store';

function App() {

  const [form , setForm] = useState(true);
  const [table , setTable] = useState(false);
  


const handleForm = (e)=>{

  e.preventDefault();

  setForm(true);
  setTable(false);

}

const handleTable = (e)=>{

  e.preventDefault();

  setTable(true);
 setForm(false);
 
}

     return (
    <Provider store={EmpStore}>
     
    <div className="App">
      <h1>Employee Details</h1>
      
      <button onClick={handleForm}>Enter Data</button>

      {form && <EmployeeForm className="EmployeeForm" /> }   &nbsp;&nbsp;
 
       {/* <EmployeeForm />   &nbsp;&nbsp; */}
    
      <button onClick={handleTable}>View Table</button>

      {/* <EmployeeTable className="EmployeeTable" />  */}
      
      {table && <EmployeeTable  /> }
      
      
    </div>
    </Provider> 
  );
}

export default App;

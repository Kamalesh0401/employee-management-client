import { configureStore } from '@reduxjs/toolkit';
import EmployeeReducer from './Emp-Reducer.js';



const EmpStore = configureStore({
    reducer: {EmployeeReducer,}
   
  });

// const EmpStore = () =>{

// return configureStore(EmployeeReducer);

// }


export default EmpStore;
import { useState , useEffect  } from "react";
import './Emp-Form.css';
import {addEmp ,changeEmp} from './Emp-Action';
import {  useDispatch } from "react-redux";
import { useSelector } from 'react-redux';


 function EmployeeForm(Empdetails , isVisible){

    const dispatch= useDispatch();

   const [submit , setSubmit] = useState(false);

   const [successMessage , setSuccessMessage] = useState('');

    const [errors , setErrors] = useState('');

    const [formData, setFormData] = useState({
            id:'',
            name: '',
            designation:'',
            age:'',
            experience:'',
            salary:''
      });

      
      const generateEmployeeId = () => {
       
        var number = 0;
        const initials = formData.name.slice(0,3).toUpperCase();
        //number = number + 1;

      // const randomNumber = Math.floor(Math.random() * 100);
    
     //   number++; return initials + 2023 ; 

        console.log(number);
        return initials + 2024 ;
        
        // 2024;
        

    };

    const handleChange = (e) =>{

        setFormData({
            ...formData,
             id: generateEmployeeId(),
            [e.target.name]: e.target.value,
          });

    }

    const selectMyData = (state) => state.EmployeeReducer;
    const  tableData = useSelector(selectMyData);
    let updatavalue = tableData.updateData;
   

    const HandleSubmit = (e) =>{
        e.preventDefault();

        const statebool = FormValidation();

        if(statebool){
          
            console.log("the form data is ",formData);
            setSubmit(true);
            setSuccessMessage('Form submitted successfully!');


            if(updatavalue !== ''  && updatavalue !== null){


                dispatch(changeEmp({formData}));
                setFormData( {id:'',
                name: '',
                designation:'',
                age:'',
                experience:'',
                salary:''});

            }
            else{

                dispatch(addEmp({formData}));
                setFormData( {id:'',
                name: '',
                designation:'',
                age:'',
                experience:'',
                salary:''});
            }

            
       
        }
        
    }

    useEffect(() => {
      if (updatavalue !== ''  && updatavalue !== null) {
       
          updatavalue.forEach(element => {
          setFormData(element)
         
      });
         
      }
    }, [updatavalue]);


    useEffect(() => {
        if (submit) {
          const timeoutId = setTimeout(() => {
            setSubmit(false);
            setSuccessMessage('');
          }, 2000);
    
         
          return () => clearTimeout(timeoutId);
        }
      }, [submit]);
  
//console.log('the window variable to check : ' , window.successMessage);

    function FormValidation(e){

        let valid = true;
        const newErrors = {};
    

        if(formData.name.trim() === ''){

            newErrors.name = 'Employee Name is required';
            valid = false;
      

        }
        if(formData.designation.trim() === ''){

            newErrors.designation = ' Employee Designation is required';
            valid = false;
     
        }
        if(formData.age.trim() === ''){

            newErrors.age = ' Employee Age is required';
            valid = false;
     
        }
        else if(formData.age > 130){

            newErrors.age = 'Enter a valid age  ';
            valid = false;
  
        }
        if(formData.experience.trim() === ''){

            newErrors.experience = ' Employee Experince is required';
            valid = false;

        }
        if(formData.salary.trim() === ''){

            newErrors.salary = ' Employee Salary is required';
            valid = false;

        }   
        setErrors(newErrors);
        return valid;
       
    }
    

return(

    <>
    <form autoComplete='off' className='loading' style={{ pointerEvents: submit === true ? 'none' : 'auto' }}>
    <h3 className='success'>{successMessage}</h3>
        <div className='items'>
            <label>Employee Name :
                <input
                type='text' 
                value={formData.name}
                name='name'
                placeholder='Enter a Employee Name'
                onChange={handleChange}
                ></input>
            </label>
            {errors.name && <p className='error'>{errors.name}</p>}
        </div>

        <div className='items'>

            <label>Designation :
            <select
            value={formData.designation}
            name='designation'
            onChange={handleChange}
            > 
                <option value="">--select--</option>
                <option value="Data Analyst">Data Analyst</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Designer">Designer</option>
                <option value="Team Leader">Team Leader</option>
            </select>
            </label>
            {errors.designation && <p className='error'>{errors.designation}</p>}
          </div>

        <div className='items'>
            <label> Age :
                <input
                type='number' 
                value={formData.age}
                name='age'
                placeholder='Enter a Age'
                onChange={handleChange}
                ></input>
            </label>
            {errors.age && <p className='error'>{errors.age}</p>}

        </div>

        <div className='items'>
            <label> Experience  :
                <input
                type='text' 
                value={formData.experience}
                name='experience'
                placeholder='Enter Employee Experience'
                onChange={handleChange}
                ></input>
            </label>
            {errors.experience && <p className='error'>{errors.experience}</p>}
        </div>

        
        <div className='items'>
            <label> Salary Package :
                <input
                type='number' 
                value={formData.salary}
                name='salary'
                placeholder='Enter a Salary Package'
                onChange={handleChange}
                ></input>
            </label>
            {errors.salary && <p className='error'>{errors.salary}</p>}
        </div>


        <div>
         
         <button onClick={HandleSubmit}>Submit</button>
        
</div>
   

        </form>

        {submit && (
        <div className="spinner-container">
            <div>
          
            </div>
            <br/><br/>

            <div className='spinner'></div>    
         
        </div>
      )}
    
    </>

);

}   

// export function HandleUpdate(id) {

//     const dispatch = useDispatch();

//     const selectMyData = (state) => state.EmployeeReducer;
//     const  tableData = useSelector(selectMyData);

//     const updateEmp = tableData.myData.filter((employee) => employee.id === id)

   

//     console.log('The Upadte value  is : ' , id);
//     console.log('The ADTA myData is : ' , tableData.myData);
//     console.log('The ADTA  is : ' , tableData);
//     console.log('The updateEmp  is : ' , updateEmp);
//   }


export default EmployeeForm;
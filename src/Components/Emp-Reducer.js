//const [employees , setEmployees] = useState([]);
//const Employees = [{myData: null,}];

const initialState = {
  // EmployeeReducer: {
  myData: [],
  updateData: null,
  //},

};

const EmployeeReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'ADD':

      // return{...state,
      //     myData:[...state.myData,

      //         action.payload.formData],
      // };

      return {
        ...state,
        myData: action.payload,
      };

    // return  { ...state, myData: action.payload };

    case 'UPDATE':
      const updateEmp = state.myData.filter((employee) => employee.id === action.payload)

      return { ...state, updateData: updateEmp };

    case 'DELETE':

      return { ...state, myData: state.myData.filter((employee) => employee.id !== action.payload.id), };

    case 'CHANGE_VALUE':

      //const changeData = state.myData.map((employee) => employee.id === action.payload.formData.id ? { ...employee, ...action.payload.formData } : employee)

      return {
        ...state,
        updateData: null
      };

    default:
      return state;

  }

};

export const selectMyData = (state) => state.EmployeeReducer.myData;

export default EmployeeReducer;
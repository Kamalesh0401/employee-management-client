

export const addEmp =(formData)=>{

    return(
        {type : 'ADD',
         payload : formData}
    );   
}

export const updateEmp =(id )=>{

    return(
        {type : 'UPDATE',
         payload : id }
    );

}

export const deleteEmp =(id)=>{

    return(
        {type : 'DELETE',
         payload : id}
    );

}
export const changeEmp =(formData)=>{

    return(
        {type : 'CHANGE_VALUE',
         payload : formData}
    );

}
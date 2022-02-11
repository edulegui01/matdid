import React from 'react';


const EditForm = ({editImput,rowOfEdit}) => {
    
    const imputsEdit = editImput.map((editImp,index) =>
            <div className="col-12">
               <label className="form-label ">{editImp}</label>
               <input 
               type="text" 
               className="form-control"
               value=""
               />
           </div>   
    )
    
    return (
            <form className="form-row m-2">
                {imputsEdit}
            </form>  
        
            
        
    );
}
 
export default EditForm;
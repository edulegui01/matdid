import React,{useState} from 'react';
import '../content/Content.css';
import {Link} from 'react-router-dom';
import Modal from '../modal/Modal';
import Pagination from '../pagination/Pagination';



const Content = ({isHome=false,modalState,children,left,show,setModalState,title}) => {
    
    if (isHome === false){
      return (  
        
        <div className={left ? "main activate" : "main"}>
            <div className="contain_content">
               <h6>{title}</h6>
               <div className="table_content">
                 <button className={"btn btn-primary btn-sm m-2 " + show} onClick={()=>setModalState(!modalState)}>Agregar</button>
                  {children}
                  
                  
                        
                </div>

            </div>
        </div>
        ); 
    }
    return (
      <div className={left ? "main activate" : "main"}>
        {children}
      </div>
    )
      
    
     
    
}
 
export default Content;
import React,{useState} from 'react';
import '../content/Content.css';
import {Link} from 'react-router-dom';
import Modal from '../modal/Modal';
import Pagination from '../pagination/Pagination';



const Content = (props) => {
    

     return (  
        <div className={props.left ? "main activate" : "main"}>
            <div className="contain_content">
               <h6>{props.title}</h6>
               <div className="table_content">
                 <button className={"btn btn-primary btn-sm m-2 " + props.show} onClick={()=>props.setModalState(!props.modalState)}>Agregar</button>
                  {props.children}
                  
                  
                        
                </div>

            </div>
        </div>
        );
    
}
 
export default Content;
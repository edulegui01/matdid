import React from 'react';
import '../content/Content.css';
import {Link} from 'react-router-dom';



const Content = (props) => {
    
     return (  
        <div className={props.left ? "main activate" : "main"}>
            <div className="contain_content">
               <h6>{props.title}</h6>
               <div className="table_content">
                 <Link to="/addCompra"className={"btn btn-primary btn-sm m-2 " + props.show}>Agregar</Link>
                  {props.children}
                        
                </div>
            </div>
        </div>
        );
    
}
 
export default Content;
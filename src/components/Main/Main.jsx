import React,{useState} from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Content from '../content/Content';
import Pagination from '../pagination/Pagination';


const Main = (props) => {
    const [sidebar,setSidebar] = useState(false);
    const [left,setLeft] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
        setLeft(!left);
    }
    
    return ( 
        <div style={{width:'100%',height:'100%'}}>
            <Header click={showSidebar}></Header>
            <Sidebar sidebar={sidebar} showSidebar={showSidebar}></Sidebar>
            <Content left={left} title={props.title} url={props.url} show={props.show} vista={props.vista}>
               {props.contenido}
            </Content>
            <Pagination numpages={props.numpage} handlePagination={props.handlePagination} currentPage={props.currentPage} />
            
        </div>
     );
}
 

export default Main;
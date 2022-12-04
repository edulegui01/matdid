import React,{useState} from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Content from '../content/Content';
import Pagination from '../pagination/Pagination';
import Lala from '../pagination/Lolo';
import Modal from '../modal/Modal';


const Main = (props) => {
    const [sidebar,setSidebar] = useState(false);
    const [left,setLeft] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
        setLeft(!left);
    }
    const [modalState, setModalState] = useState(false)
    
    return ( 
        <div style={{width:'100%',height:'100%'}}>
            <Header click={showSidebar}></Header>
            <Sidebar sidebar={sidebar} showSidebar={showSidebar}></Sidebar>
            <Pagination numpages={props.numpage} handlePagination={props.handlePagination} currentPage={props.currentPage} />
            <Content left={left} title={props.title} url={props.url} show={props.show} vista={props.vista} isHome={props.isHome}
            setModalState={setModalState} modalState={modalState}>
               {props.children}
            </Content>
            <Modal modalState={modalState} changeModalState={setModalState} maximun_with={props.maximun_with} titleAdd={props.titleAdd} clienteProveedor ={props.clienteProveedor}>
                {props.contenido}
            </Modal>
            
            
            
        </div>
     );
}
 

export default Main;
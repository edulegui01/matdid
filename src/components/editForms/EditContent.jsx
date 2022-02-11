import React,{useState} from 'react';
import Main from '../Main/Main';
import Modal from '../modal/Modal';
import EditForm from './EditFormCompra';


const EditContent = ({modalState,changeModalState,titleAdd,editCompras}) => {
    
    return (
       <Modal modalState={modalState} changeModalState={changeModalState} titleAdd={titleAdd}>
           {editCompras}
       </Modal>
    );
}
 
export default EditContent;
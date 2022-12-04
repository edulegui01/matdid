import React,{useState} from 'react';
import Main from '../Main/Main';
import Modal from '../modal/Modal';
import EditForm from './EditFormCompra';


const EditContent = ({modalState,changeModalState,titleAdd,editForm}) => {
    
    return (
       <Modal modalState={modalState} changeModalState={changeModalState} titleAdd={titleAdd}>
           {editForm}
       </Modal>
    );
}
 
export default EditContent;
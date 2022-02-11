import React from 'react'
import styled from 'styled-components'
import {AiOutlineClose} from 'react-icons/ai'

const Modal = ({modalState =true,changeModalState,children,titleAdd}) => {
    return ( 
        
        <>
            {modalState && 
                <Overlay>
                    <ContainerModal>
                        <ContainerTitle><h3>{titleAdd}</h3></ContainerTitle>
                        <ButtonClose onClick={()=>changeModalState(false)}><AiOutlineClose size='25px'></AiOutlineClose></ButtonClose>
                        {children}
                    </ContainerModal>
                </Overlay>
            }
        
        </>
     );
}
 
export default Modal;


const Overlay = styled.div`
    width:100vw;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    background: rgba(0,0,0,.5);
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:10;

`;

const ContainerModal = styled.div`
    max-width:1000px;
    min-width:500px;
    min-height:100px;
    background: #fff;
    position:relative;
    border-radius:5px;
    box-shadow: rgba(100,100,111,.2) 0px 7px 29px 0px;
    z-index:9;
    margin-left:20px;
    margin-right:20px
    
`;

const ContainerTitle = styled.div`
    display:flex;
    align-items:center;
    justify-conternt:space-between;
    border-bottom:1px solid #E8E8E8;
    background-color:#0058ff;
    border-top-left-radius:5px;
    border-top-right-radius:5px;

    h3{
        font-weigth:500;
        font-size: 16px;
        color:#fff;
        margin:5px;
        
    }
`

const ButtonClose = styled.button`
    position:absolute;
    top:0;
    right:10px;
    width:30px;
    height:30px;
    border:none;
    background:none;
    cursor:pointer:
    transition: .3s ease all;
    border-radius:5px;
    color:#fff;

    svg{
        widht:30px;
        height:30px;
    }



`;


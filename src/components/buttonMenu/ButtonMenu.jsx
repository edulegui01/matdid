import React from 'react'
import './ButtonMenu.css'

const ButtonMenu = (props) => {
    return (
        <button className="button-menu d-none" onClick={props.click} >
            <i className="fas fa-bars"></i>
        </button>
      );
}
 
export default ButtonMenu;
import React from 'react';
import {Link} from 'react-router-dom'
import ButtonMenu from '../buttonMenu/ButtonMenu';
import './Header.css'
import logo from '../../images/logo.png'

const Header = (props) => {
    return (  
        <nav className="d-flex header " >
            
                <ButtonMenu click={props.click}/>
                <div className="logo">
                    <Link to="/matdid" className="text-dark" style={{textDecoration:'none'}}><img src={logo} alt="" style={{height:'43px'}}/></Link>
                </div>
                <div className="close-sesion ml-auto mr-5" >
                    <Link to="/" className="text-dark" style={{textDecoration:'none'}}><i className="fas fa-user mr-2"></i>Usuario</Link>
                </div>
            
        </nav>
    );
}
 
export default Header;